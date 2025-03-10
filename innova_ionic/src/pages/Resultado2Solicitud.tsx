import React from "react";
import { IonIcon } from "@ionic/react"; 
import { chevronBack } from "ionicons/icons";

const CreditResult2: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow">
        <div className="flex items-center justify-between p-4">
          <button className="text-black">
            <IonIcon icon={chevronBack} className="text-black w-6 h-6" />
          </button>

          <span className="text-black text-lg font-semibold">
            RESULTADO DE SOLICITUD
          </span>

          <div className="bg-purple-800 text-white w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">DM</span>
          </div>
        </div>
      </header>

      <main className="p-4 text-center">
        <p className="text-red-500 font-bold text-lg">
          No eres elegible a crédito
        </p>

        <div className="mt-4 bg-purple-100 rounded-lg p-4">
          <label className="text-sm font-semibold text-black">
            MONTO ASIGNADO
          </label>
          <input
            type="text"
            className="w-full p-2 mt-2 border-2 border-purple-500 rounded-md bg-white text-center !text-black focus:outline-none focus:border-purple-700"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold text-black">
            AJUSTE DE CRÉDITO
          </label>
          <input
            type="range"
            min={0}
            max={100}
            disabled
            className="w-full mt-2"
          />
        </div>

        <button className="w-full h-12 mt-6 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-colors flex items-center justify-center">
          Volver
        </button>
      </main>
    </div>
  );
};

export default CreditResult2;