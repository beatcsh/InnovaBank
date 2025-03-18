import React from "react";
import { ChevronLeft } from "lucide-react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

const AnalisisInteligente: React.FC = () => {
    const history = useHistory();

    return (
        <div className="min-h-screen bg-white text-black">
            <Header/>
            <div className="flex flex-col items-center justify-center mt-10 space-y-8">

                <a href="/analisis" className="w-[80%] !text-black">
                    <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
                        Análisis de Gastos vs Inversiones
                    </div>
                </a>
                <a href="/elegibilidad" className="w-[80%] !text-black">
                    <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
                        Elegibilidad de Crédito
                    </div>
                </a>
                <a href="/solvencia" className="w-[80%] !text-black">
                    <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
                        Predicción de Solvencia
                    </div>
                </a>
                <a href="/prediccionInversion" className="w-[80%] !text-black">
                    <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
                        Oportunidades de Inversión
                    </div>
                </a>
            </div>
        </div>
    );
};

export default AnalisisInteligente;