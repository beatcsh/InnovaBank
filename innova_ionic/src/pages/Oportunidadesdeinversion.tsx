import React from "react";
import { Line } from "react-chartjs-2";
import { IonIcon } from "@ionic/react";
import { chevronBack, notificationsOutline } from "ionicons/icons";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const InvestmentOpportunities: React.FC = () => {
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Rendimientos Futuros",
        data: [90, 85, 80, 75, 70, 65, 60],
        borderColor: "#9C27B0", // Morado
        backgroundColor: "transparent",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="bg-white min-h-screen p-4">
      <header className="bg-white shadow">
        <div className="flex items-center justify-between p-4">
          <button className="text-black">
            <IonIcon icon={chevronBack} className="text-black w-6 h-6" />
          </button>

          <span className="text-black text-lg font-bold">
            Oportunidades de inversión
          </span>

          <button className="text-black">
            <IonIcon icon={notificationsOutline} className="text-black w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="p-4">
        <div className="bg-purple-100 rounded-lg p-4 mb-4 text-center">
          <p className="text-green-600 font-semibold">Saldo disponible: $6000</p>
          <p className="text-blue-600 font-semibold">Excedentes para invertir: $3000</p>
        </div>

        <h2 className="text-sm font-bold text-black mb-2">
          GRÁFICA DE RENDIMIENTOS FUTUROS
        </h2>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <Line data={data} options={options} />
        </div>

        <h2 className="text-sm font-bold text-black mb-2">
          SUGERENCIAS DE INVERSIÓN
        </h2>
        <div className="bg-purple-100 rounded-lg p-4 mb-4">
          <p className="text-blue-600">Bodega Aurrera - 5% anual - Bajo riesgo</p>
          <p className="text-red-600">Tesla - 12% anual - Alto riesgo</p>
        </div>

        <button className="w-full h-12 bg-purple-800 text-white rounded-full shadow-md hover:bg-purple-900 hover:shadow-lg transition-colors flex items-center justify-center">
          INVERTIR
        </button>
      </main>
    </div>
  );
};

export default InvestmentOpportunities;