import Header from "../components/Header";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const CardsPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header/>

      {/* Contenido Principal */}
      <main className="flex-grow px-6 py-4">
        {/* Título */}
        <h2 className="text-center font-bold text-xl text-gray-800 mb-6">
          Tarjetas de débito, crédito o ahorro vinculadas
        </h2>

        {/* Lista de Tarjetas */}
        <div className="space-y-4">
          {[
            { nombre: "Cuenta Nómina", monto: "$8,000.00" },
            { nombre: "Cuenta Ahorro", monto: "$8,000.00" },
            { nombre: "Tarjeta de Crédito", monto: "-$8,000.00", tipo: "negativo" },
          ].map((cuenta, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-700 to-blue-600 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              {/* Nombre de la cuenta */}
              <p className="text-lg font-semibold mb-2">{cuenta.nombre}</p>
              {/* Monto */}
              <p
                className={`text-xl font-bold ${
                  cuenta.tipo === "negativo" ? "text-red-400" : "text-green-300"
                }`}
              >
                {cuenta.monto}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Botón Transferir */}
      <div className="p-4 flex justify-center mt-8">
        <button
          className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-bold py-4 px-12 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 max-w-lg w-full"
          aria-label="Transferir dinero"
        >
          Transferir
        </button>
      </div>
    </div>
  );
};

export default CardsPage;