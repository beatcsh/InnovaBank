import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import { Line } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

const PredictionChart: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState('1M');

  const chartData = {
    labels: Array(30).fill('').map((_, i) => `${i + 1}`),
    datasets: [
      {
        label: 'Índice de pérdida/ganancia',
        data: [100, 98, 96, 95, 93, 92, 90, 87, 85, 83, 80, 78, 75, 73, 70, 67, 65, 63, 60, 58, 55, 53, 50, 48, 45, 43, 40, 38, 35, 33],
        borderColor: '#9C27B0',
        backgroundColor: 'rgba(156, 39, 176, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  const ranges = ['1D', '15D', '1M', '3M', '1A'];

  return (
    <div className="bg-white min-h-screen p-6">
      <header className="flex justify-between items-center mb-4">
        <button className="text-black">
          <IonIcon icon={chevronBack} className="text-black w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold">PREDICCIONES</h1>
        <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold">
          DM
        </div>
      </header>

      <h2 className="text-center text-sm mb-4">Gráfico de pérdida y ganancia</h2>

      <div className="flex justify-center gap-2 mb-4">
        {ranges.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-3 py-1 text-sm rounded-full border ${selectedRange === range ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
          >
            {range}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-4">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="flex items-center mt-4">
        <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
        <span>Punto de referencia de la cuenta</span>
      </div>
      <div className="flex items-center mt-2">
        <div className="w-4 h-4 bg-purple-600 rounded-full mr-2"></div>
        <span>Índice de pérdida/ganancia</span>
      </div>

      <div className="bg-purple-100 rounded-lg p-4 mt-6">
        <h3 className="text-sm font-bold mb-2">Resumen</h3>
        <p className="text-sm text-gray-700">
          En el último mes, el índice de pérdida y ganancia ha mostrado una tendencia descendente, reflejando una disminución en el saldo de la cuenta.
        </p>
      </div>
    </div>
  );
};

export default PredictionChart;
