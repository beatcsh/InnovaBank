import React from "react";

const CreditResult: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Encabezado */}
      <header className="bg-white shadow">
        <div className="flex items-center justify-center p-4">
          <h1 className="text-black text-lg font-bold">RESULTADO DE SOLICITUD</h1>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="p-4">
        {/* Mensaje de elegibilidad */}
        <p className="text-green-600 font-bold text-center text-lg mb-6">
          ¡ERES ELEGIBLE AL CRÉDITO!
        </p>

        {/* Tarjeta de Monto Asignado */}
        <div className="bg-purple-100 rounded-lg p-4 mb-6">
          <label className="text-sm font-medium text-black block text-center">
            MONTO ASIGNADO
          </label>
          <input
            type="text"
            value="$27000"
            readOnly
            className="w-full p-2 mt-2 border-2 border-purple-500 rounded-md bg-white text-center text-black focus:outline-none focus:border-purple-700"
          />
        </div>

        {/* Ajuste de Crédito */}
        <div className="mb-6">
          <label className="text-sm font-medium text-black block text-center">
            AJUSTE DE CRÉDITO
          </label>
          <div className="flex items-center justify-center mt-2">
            <span className="text-black text-lg font-bold">$27000</span>
          </div>
          <input
            type="range"
            min={0}
            max={27000}
            defaultValue={27000}
            className="w-full mt-2"
          />
        </div>

        {/* Botón de Volver */}
        <button className="w-full h-12 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-colors flex items-center justify-center">
          Volver
        </button>
      </main>
    </div>
  );
};

export default CreditResult;