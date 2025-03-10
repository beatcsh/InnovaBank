import React from "react";
import { IonIcon } from "@ionic/react"; 
import { chevronBack, notificationsOutline } from "ionicons/icons";

const ExpenseAnalysis: React.FC = () => {
  const score = 711;
  const min = 400;
  const max = 850;

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const percentage = ((score - min) / (max - min)) * 100;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  const angle = (percentage / 100) * 180 - 90;
  const pointX = 50 + radius * Math.cos((angle * Math.PI) / 180);
  const pointY = 50 + radius * Math.sin((angle * Math.PI) / 180);

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-white shadow">
        <div className="flex items-center justify-between p-4">
          <button className="text-black">
            <IonIcon icon={chevronBack} className="text-black w-6 h-6" />
          </button>

          <span className="text-black text-lg font-bold">Análisis de Gastos</span>

          <div className="flex items-center gap-4">
            <button className="text-black">
              <IonIcon icon={notificationsOutline} className="text-black w-6 h-6" />
            </button>

            <button className="flex items-center justify-center w-8 h-8 bg-purple-800 rounded-full text-white font-semibold">
              NM
            </button>
          </div>
        </div>
      </header>

      <main className="p-4">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40">
              <svg
                viewBox="0 0 100 100"
                className="absolute top-0 left-0 w-full h-full"
              >
                <path
                  d="M20,80 A40,40 0 1,1 80,80"
                  stroke="#E0E0E0"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />

                <defs>
                  <linearGradient id="scoreGradient">
                    <stop offset="0%" stopColor="#E91E63" />
                    <stop offset="50%" stopColor="#9C27B0" />
                    <stop offset="100%" stopColor="#2196F3" />
                  </linearGradient>
                </defs>

                <path
                  d="M20,80 A40,40 0 1,1 80,80"
                  stroke="url(#scoreGradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />

                <circle cx={pointX} cy={pointY} r="3" fill="red" />
              </svg>

              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-black">
                {score}
              </span>
            </div>

            <div className="flex justify-between w-full mt-2">
              <span className="text-gray-500 text-sm">{min}</span>
              <span className="text-gray-500 text-sm">{max}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center mb-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-black">BUENO</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="text-black">MODERADO</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="text-black">MALO</span>
          </div>
        </div>

        <div className="bg-purple-100 rounded-lg p-4 mb-6">
          <p className="text-black text-center">
            Saldo disponible: <strong>$12,500.00 MXN</strong>
          </p>
        </div>

        <div className="bg-purple-100 rounded-lg p-4">
          <p className="text-black text-center italic">
            "Reduce tu gasto en entretenimiento un 10% y ahorras $500 al mes."
          </p>
        </div>
      </main>
    </div>
  );
};

export default ExpenseAnalysis;