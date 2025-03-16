import React, { useState, useEffect } from "react";
import Indicator from "../components/IndicatorSolvencia";
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

const SolvencyIndicator: React.FC = () => {

  const [solvencia, setSolvencia] = useState<number>(75);
  const [solvente, setSolvente] = useState<boolean>(false);
  const [diff, setDiff] = useState<number>(0);
  const location = useLocation<LocationStorage>();
  const token = location.state?.token || localStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {

          const id_tarjeta = localStorage.getItem("id_tarjeta");

          const decodedToken: decodedToken = jwtDecode(token);
          const id_usuario = decodedToken._id;

          const tarjeta = await axios.get("http://localhost:4000/accounts/one", {
            params: { _id: id_usuario },
            headers: { Authorization: `Bearer ${token}` }
          });

          const additions = await axios.get("http://localhost:4000/history/get-adds", {
            params: { _id: id_tarjeta },
          });

          const balance = tarjeta.data.informacion.balance || 0;
          const ingresos = additions.data.ingresos || 0;
          const egresos = additions.data.egresos || 0;

          setDiff(ingresos-egresos)

          let percent = 0;
          percent = ((balance + ingresos) / (balance + ingresos + egresos + 1)) * 100;
          console.log(percent.toFixed(2))

          setSolvencia(percent)

          const solvente = await axios.post("http://localhost:4000/users/solvency", {
            ingresos: 50000,
            gastos: 33000,
            historial_crediticio: 700
          },);

          if (solvente.data.solvente === 1) {
            setSolvente(true)
          }

        } catch (err: any) {
          console.log(err)
        }
      }
    };
    fetchData();
  }, []);


  console.log(solvente)

  return (
    <div>
      <Header />
      <div className="">
        <nav className='w-[100%] h-[50px] px-4 '>
          <h2 className='text-black text-center font-bold mb-4'>Indicador de Solvencia</h2>
        </nav>
      </div>
      <div className="ion-padding text-center">
        <Indicator solvencia={solvencia} />
      </div>
      {solvente ? (
        <div className="w-[100%] my-8 grid grid-cols-1 place-items-center">
          <div className="bg-violet-300 w-[70%] h-auto pb-8 rounded-xl">
            <h3 className="!text-violet-900 !text-lg px-4 !font-semibold">Analisis:</h3>
            <p className="text-black px-4 text-justify">En base a los resultados obtenidos, se puede observar que eres un usuario con un buen nivel de solvencia.</p>
            <h4 className="!text-violet-900 !text-lg px-4 !font-semibold">Resultados:</h4>
            <p className="text-black px-4 text-justify my-1">Nivel de solvencia: {solvencia.toFixed(2)}%</p>
            <p className="text-black px-4 text-justify my-1">Dif. gastos e ingresos: ${diff.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <div className="w-[100%] my-8 grid grid-cols-1 place-items-center">
          <div className="bg-violet-300 w-[70%] h-auto pb-8 rounded-xl">
            <h3 className="!text-violet-900 !text-lg px-4 !font-semibold">Analisis:</h3>
            <p className="text-black px-4 text-justify">En base a los resultados obtenidos, se puede observar que eres un usuario que deberia cuidar mas la manera en la que gasta, ya que tu nivel de solvencia es deficiente, pero puedes mejorar.</p>
            <h4 className="!text-violet-900 !text-lg px-4 !font-semibold">Resultados:</h4>
            <p className="text-black px-4 text-justify my-1">Nivel de solvencia: {solvencia.toFixed(2)}%</p>
            <p className="text-black px-4 text-justify my-1">Dif. gastos e ingresos: ${diff.toFixed(2)}</p>
          </div>
        </div>
      )}
      <a href="/historialcuenta" className="w-[100%] grid place-items-center my-10">
        <button
          className='text-white w-[80%] h-[40px] bg-violet-500 font-bold text-xl !rounded-xl hover:bg-violet-700 focus:outline-2  
            focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 '
        >
          Ver mis movimientos
        </button>
      </a>href="/historialcuenta"
    </div>
  );
};

export default SolvencyIndicator;