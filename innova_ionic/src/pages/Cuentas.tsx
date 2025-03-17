import Header from "../components/Header";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

interface LocationStorage {
    token?: string;
}

interface decodedToken {
    _id: string;
    exp: number;
    iat: number;
}

interface ICuenta {
    _id: string;
    numero: number;
    id_usuario: string;
    tipo: "débito" | "crédito" | "ahorro";
    informacion: {
        no_tarjeta: number,
        cvv: number,
        nip: number,
        fecha_exp: string,
        balance: number
    }
}

const CardsPage = () => {

    const location = useLocation<LocationStorage>();
    const token = location.state?.token || localStorage.getItem("authToken");
    console.log(token);

    const [data, setData] = useState<ICuenta[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                try {

                    const decodedToken: decodedToken = jwtDecode(token);
                    const id_usuario = decodedToken._id;
                    console.log("id obtenido: " + id_usuario + " de tipo " + typeof (id_usuario));
                    const tarjetas = await axios.get("http://localhost:4000/accounts/all", {
                        params: { _id: id_usuario },
                        headers: { Authorization: `Bearer ${token}` }
                    });

                    setData(tarjetas.data)

                } catch (err: any) {
                    console.log(err)
                }
            };
        };
        fetchData();
    }, []);

    console.log(data)

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <Header />

            {/* Contenido Principal */}
            <main className="flex-grow px-6 py-4">
                {/* Título */}
                <h2 className="text-center font-bold text-xl text-gray-800 mb-6">
                    Tarjetas de débito, crédito o ahorro vinculadas
                </h2>

                {/* Lista de Tarjetas */}
                <div className="py-10">
                    {data.map((cuenta, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-purple-700 to-blue-600 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 space-y-2"
                        >
                            <p className="text-2xl font-semibold mb-2">{cuenta.tipo.toUpperCase()}</p>
                            <p className="text-white font-semibold text-xl">$ {cuenta.informacion.balance.toFixed(2)}</p>
                            <p className="text-white text-xl">{cuenta.informacion.no_tarjeta}</p>
                        </div>
                    ))}
                </div>
            </main>

            {/* Botón Transferir */}
            <div className="p-4 grid grid-cols-1 place-items-center w-[100%] mt-8">
                <a href="/home">
                    <button
                        className="text-white w-[200px] h-[40px] bg-violet-500 font-bold text-xl !rounded-xl hover:bg-violet-700 focus:outline-2  
                                focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 "
                        aria-label="Transferir dinero"
                    >
                        Volver
                    </button>
                </a>
            </div>
        </div>
    );
};

export default CardsPage;