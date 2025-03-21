import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import Header from "../components/Header";
import { useLocation } from 'react-router';
import { jwtDecode } from "jwt-decode";
import axios from "axios";

interface decodedToken {
  _id: string;
  exp: number;
  iat: number;
}

interface LocationStorage {
  token?: string;
}

const GastosIngresos: React.FC = () => {
  const [selected, setSelected] = useState<"gastos" | "ingresos">("gastos");
  const [selectedMonth, setSelectedMonth] = useState<string>("01");
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [data, setData] = useState<any[]>([]);
  const [balanceEstimate, setBalanceEstimate] = useState<number>(0);
  const [totalBalance, setTotalBalance] = useState<number>(0); // Nuevo estado para el total
  const location = useLocation<LocationStorage>();
  const token = location.state?.token || localStorage.getItem("authToken");
  const [ingresos, setIngresos] = useState<any[]>([]);
  const [gastos, setGastos] = useState<any[]>([]);

  const months = [
    { label: "Enero", value: "01" },
    { label: "Febrero", value: "02" },
    { label: "Marzo", value: "03" },
    { label: "Abril", value: "04" },
    { label: "Mayo", value: "05" },
    { label: "Junio", value: "06" },
    { label: "Julio", value: "07" },
    { label: "Agosto", value: "08" },
    { label: "Septiembre", value: "09" },
    { label: "Octubre", value: "10" },
    { label: "Noviembre", value: "11" },
    { label: "Diciembre", value: "12" },
  ];

  const years = Array.from({ length: 11 }, (_, i) => 2015 + i);

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#F44336"];

  const fetchData = async () => {
    if (token) {
      try {
        const decodedToken: decodedToken = jwtDecode(token);
        const id_usuario = decodedToken._id;

        const id_tarjeta = localStorage.getItem("id_tarjeta");
        const transacciones = await axios.get("http://localhost:4000/transactions/all", {
          params: { id_cuenta: id_tarjeta },
          headers: { Authorization: `Bearer ${token}` }
        });

        const filterByDate = (data: any[]) => {
          return data.filter((item: any) => {
            const transactionDate = new Date(item.fecha);
            const transactionMonth = (transactionDate.getMonth() + 1).toString().padStart(2, '0');
            const transactionYear = transactionDate.getFullYear().toString();

            return transactionMonth === selectedMonth && transactionYear === selectedYear;
          });
        };

        const ingresosData = filterByDate(transacciones.data.filter((item: any) => item.tipo === "ingreso"));
        const gastosData = filterByDate(transacciones.data.filter((item: any) => item.tipo === "gasto"));

        setIngresos(ingresosData);
        setGastos(gastosData);

        // Calcula el total sin filtro por fecha
        const totalIngresos = transacciones.data.filter((item: any) => item.tipo === "ingreso")
          .reduce((acc: number, item: any) => acc + item.monto, 0);
        const totalGastos = transacciones.data.filter((item: any) => item.tipo === "gasto")
          .reduce((acc: number, item: any) => acc + item.monto, 0);
        
        setTotalBalance(totalIngresos - totalGastos); // Guardar el total

        const groupByCategory = (data: any[]) => {
          return data.reduce((acc: any, curr: any) => {
            if (acc[curr.categoria]) {
              acc[curr.categoria] += curr.monto;
            } else {
              acc[curr.categoria] = curr.monto;
            }
            return acc;
          }, {});
        };

        const ingresosGrouped = groupByCategory(ingresosData);
        const gastosGrouped = groupByCategory(gastosData);

        const selectedData = selected === "ingresos"
          ? Object.keys(ingresosGrouped).map((category) => ({
              name: category,
              value: ingresosGrouped[category],
            }))
          : Object.keys(gastosGrouped).map((category) => ({
              name: category,
              value: gastosGrouped[category],
            }));

        setData(selectedData);

        const totalFilteredIngresos = ingresosData.reduce((acc: number, item: any) => acc + item.monto, 0);
        const totalFilteredGastos = gastosData.reduce((acc: number, item: any) => acc + item.monto, 0);
        setBalanceEstimate(totalFilteredIngresos - totalFilteredGastos);
      } catch (err: any) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [selected, selectedMonth, selectedYear]);

  useEffect(() => {
    if (!selectedMonth || !selectedYear) {
      setData(selected === "ingresos"
        ? ingresos.map((category: any) => ({ name: category.categoria, value: category.monto }))
        : gastos.map((category: any) => ({ name: category.categoria, value: category.monto }))
      );
    }
  }, [ingresos, gastos, selected]);

  return (
    <div className="bg-white text-black w-[100%] h-[100vh] overflow-y-auto !mb-10 !mx-2">
      <Header />

      <div className="flex justify-center gap-4 mt-5">
        <button
          className={`w-30 h-8 px-6 py-2 !rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${selected === "gastos" ? "bg-purple-500 text-white" : "bg-purple-200 text-gray-700"
            }`}
          onClick={() => setSelected("gastos")}
        >
          💸 Gastos
        </button>

        <button
          className={`w-30 h-8 px-6 py-2 !rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${selected === "ingresos" ? "bg-purple-500 text-white" : "bg-purple-200 text-gray-700"
            }`}
          onClick={() => setSelected("ingresos")}
        >
          💰 Ingresos
        </button>
      </div>

      <div className="flex justify-center gap-[100px] items-center p-4 mt-4">
        <div className="flex flex-col">
          <label className="font-semibold">Mes</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-500 shadow-lg p-2 !my-2 px-2 rounded-lg"
          >
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Año</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-500 shadow-lg p-2 !my-2 px-2 rounded-lg"
          >
            {years.map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {data.length > 0 ? (
          <PieChart width={320} height={320}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={110}
              innerRadius={60}
              paddingAngle={3}
              dataKey="value"
              isAnimationActive={true}
              animationDuration={1000}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  style={{ filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.3))" }}
                />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#c28eed", color: "#FFFFFF", borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.3)", padding: "8px" }} />
            <Legend
              iconSize={14}
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ color: "#4B5563", fontSize: "14px" }}
            />
          </PieChart>
        ) : (
          <p className="text-gray-500 text-center text-xl mt-10 h-[210px] w-[220px]">No tienes transacciones registradas en este mes c:</p>
        )}
      </div>

      <div className="flex justify-center items-center pt-8 pb-10 shadow-2xl">
        <div className="rounded-2xl bg-purple-300 w-64 p-4 shadow-2xl">
          <p className="w-full text-lg font-semibold text-center">
            Diferencia entre Ingresos y Gastos (Total):{" "}
            <span className={totalBalance >= 0 ? "text-green-500" : "text-red-500"}>
              ${totalBalance.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GastosIngresos;
