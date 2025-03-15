import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const AccountHistoryScreen: React.FC = () => {

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/transactions/all")
        setData(response.data.response)
        console.log(response.data.response)
      } catch (err: any) {
        console.log(err)
      }
    };
    fetchData();
  }, []);

  console.log(data)

  const cards = data.map((transaction: any) => (
    <div className="w-[100%] h-[115px] border border-gray-200 rounded-lg m-3 py-2 px-3 shadow-xl flex place-items-center justify-between">
      <div className="grid grid-cols-1 w-[70%] gap-1">
        <p className="font-semibold">{transaction.tipo.toUpperCase()}</p>
        <p className="text-xs">{transaction.informacion.numero_cuenta}</p>
        <p className="text-xs">{transaction.informacion.banco}</p>
        <p className="text-xs">{transaction.descripcion} - {transaction.categoria.toUpperCase()}</p>
      </div>
      <div className="grid grid-cols-1">
        <p className={transaction.tipo.toLowerCase() === "ingreso" ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
          $ {transaction.monto}
        </p>
      </div>
    </div>
  ));


  const balance = 20000

  const alerta_categoria = (nombre: String) => {
    console.log("Elegiste: ", nombre)
  }

  const categories = [
    {
      id: 1,
      name: "Alimentos",
      icon: <i className='text-xl text-violet-800 bx bxs-bowl-rice' ></i>
    },
    {
      id: 2,
      name: "Servicios",
      icon: <i className='text-xl text-violet-800 bx bx-tv' ></i>
    },
    {
      id: 3,
      name: "Transferencias",
      icon: <i className='text-xl text-violet-800 bx bx-transfer-alt' ></i>
    }
  ]

  return (
    <>
      <div className="w-[100%] h-screen overflow-y-auto text-black">
        <Header />
        <div className="w-[100%] h-[50px] my-2 grid place-items-center">
          <h2 className="!text-2xl !font-semibold">Historial de la cuenta</h2>
        </div>
        <div className="w-[100%] py-3 px-8 flex place-items-center justify-between">
          <div className="p-3">
            <p className="text-sm">Saldo disponible</p>
            <p className="text-xl">$ {balance}</p>
          </div>
          <a href="/select"><button className="bg-violet-600 text-white w-[124px] h-[30px] !rounded-2xl">Cambiar tarjeta</button></a>
        </div>
        <h3 className="px-8 !text-sm !font-semibold">Selecciona una categoria</h3>
        <div className="w-[100%] py-3 px-10 flex place-items-center space-x-10">
          {categories.map((category) => (
            <div onClick={() => alerta_categoria(category.name)}>{category.icon}</div>
          ))}
        </div>
        <div className="w-[100%] py-3 px-8 grid place-items-center">
          {cards}
        </div>
      </div>
    </>
  );
};

export default AccountHistoryScreen;