import React, { useState } from "react";
import { IonIcon } from "@ionic/react"; 
import { chevronBack, notificationsOutline } from "ionicons/icons";

const CreditEligibility: React.FC = () => {
  const [income, setIncome] = useState("27000");
  const [debt, setDebt] = useState(false);
  const [debtDescription, setDebtDescription] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow">
        <div className="flex items-center justify-between p-4">
          <button className="text-black">
            <IonIcon icon={chevronBack} className="text-black w-6 h-6" />
          </button>

          <span className="text-black text-lg font-bold">
            Verificar Elegibilidad de Crédito
          </span>

          <button className="text-black">
            <IonIcon icon={notificationsOutline} className="text-black w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="p-4">
        <div className="p-3 bg-purple-100 rounded-lg">
          <label className="text-sm font-semibold text-black">
            INGRESA TU GANANCIA MENSUAL
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full p-2 mt-2 border-2 border-purple-500 rounded-md bg-white text-center text-black focus:outline-none focus:border-purple-700"
            placeholder="$"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold text-black mb-2">
            Historial Crediticio
          </h2>
          <div className="flex items-center justify-center mt-2">
            <span className="w-4 h-4 bg-green-400 rounded-full mr-2"></span>
            <span className="text-black">BUENO</span>
          </div>
          <div className="flex items-center justify-center mt-2">
            <span className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
            <span className="text-black">REGULAR</span>
          </div>
          <div className="flex items-center justify-center mt-2">
            <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
            <span className="text-black">MALO</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-black mb-2">
            ¿Tienes Deudas Actuales?
          </h2>
          <div className="flex gap-4 mt-2 justify-center">
            <button
              onClick={() => setDebt(true)}
              className={`w-16 h-16 aspect-square rounded-full border-2 border-purple-600 flex items-center justify-center ${
                debt ? "bg-purple-600 text-white" : "bg-white text-purple-600"
              } shadow-md hover:shadow-lg transition-shadow`}
            >
              Sí
            </button>
            <button
              onClick={() => setDebt(false)}
              className={`w-16 h-16 aspect-square rounded-full border-2 border-purple-600 flex items-center justify-center ${
                !debt ? "bg-purple-600 text-white" : "bg-white text-purple-600"
              } shadow-md hover:shadow-lg transition-shadow`}
            >
              No
            </button>
          </div>
        </div>

        {debt && (
          <div className="p-3 mt-4 bg-purple-100 rounded-lg">
            <label className="text-sm font-semibold text-black">
              DESCRIBE CUÁLES
            </label>
            <input
              type="text"
              value={debtDescription}
              onChange={(e) => setDebtDescription(e.target.value)}
              className="w-full p-2 mt-2 border-2 border-purple-500 rounded-md bg-white text-black focus:outline-none focus:border-purple-700"
              placeholder="Ej. Tarjeta de crédito, préstamo..."
            />
          </div>
        )}

        <button className="w-64 h-12 mt-6 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-colors flex items-center justify-center mx-auto">
          VERIFICAR
        </button>
      </main>
    </div>
  );
};

export default CreditEligibility;