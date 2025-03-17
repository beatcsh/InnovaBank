import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Header from "../components/Header";

// Registra los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const investmentOptions = [
    { name: "Bitcoin", image: "/assets/bitcoin.png", symbol: "bitcoin" },
    { name: "Apple", image: "/assets/apple.png", symbol: "apple" },
    { name: "Tesla", image: "/assets/tesla.png", symbol: "tesla" },
    { name: "Amazon", image: "/assets/amazon.png", symbol: "amazon" }
];

const PrediccionesInversiones: React.FC = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bitcoinData, setBitcoinData] = useState([]);
    const [priceInMXN, setPriceInMXN] = useState(null);
    const [loading, setLoading] = useState(true);

    // Obtener los datos de Bitcoin y su valor en pesos mexicanos
    const fetchData = async (symbol: any) => {
        try {
            const chartResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${symbol}/market_chart`, {
                params: { vs_currency: 'usd', days: '7' }
            });
            setBitcoinData(chartResponse.data.prices);
    
            const priceResponse = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
                params: { ids: symbol, vs_currencies: 'mxn' }
            });
            setPriceInMXN(priceResponse.data[symbol]?.mxn);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => { if (selectedOption) fetchData(selectedOption.symbol); }, [selectedOption]);

    const chartData = {
        labels: bitcoinData.map(item => new Date(item[0]).toLocaleDateString()),
        datasets: [{
            label: 'Precio de Bitcoin (USD)',
            data: bitcoinData.map(item => item[1]),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.1,
        }],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { ticks: { autoSkip: true, maxTicksLimit: 7, rotation: -45 } },
            y: { ticks: { beginAtZero: false } }
        },
        plugins: { tooltip: { mode: 'index', intersect: false }, legend: { position: 'top' } }
    };

    const handleSelect = (option) => { setSelectedOption(option); setIsOpen(false); };

    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % investmentOptions.length);
    const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + investmentOptions.length) % investmentOptions.length);

    return (
        <div className="p-4 bg-white w-[100%] h-screen overflow-y-auto">
            <Header />

            <div className="relative w-64 mx-auto mt-7">
                <button onClick={() => setIsOpen(!isOpen)} className="w-full h-8 bg-purple-500 text-white px-2 !rounded-2xl">
                    {selectedOption ? `Invertir en: ${selectedOption.name}` : "Selecciona un activo"}
                </button>
                {isOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl">
                        <div className="relative flex items-center justify-center">
                            <button onClick={prevSlide} className="absolute left-0 p-2 text-gray-600">◀️</button>
                            <div className="p-2 flex flex-col items-center cursor-pointer" onClick={() => handleSelect(investmentOptions[currentIndex])}>
                                <img src={investmentOptions[currentIndex].image} alt={investmentOptions[currentIndex].name} className="rounded-lg w-40 h-40 object-cover" />
                                <p className="mt-2 font-semibold">{investmentOptions[currentIndex].name}</p>
                            </div>
                            <button onClick={nextSlide} className="absolute right-0 p-2 text-gray-600">▶️</button>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-10 mx-4 text-black font-semibold">
                {loading ? <p>Esperando tu eleccion...</p> : (
                    <div className="h-[400px]">
                        {selectedOption && priceInMXN !== null && (
                            <p className="text-lg font-semibold text-center !my-10">Valor actual en MXN: ${priceInMXN.toLocaleString()}</p>
                        )}
                        <h2 className="text-center font-semibold text-lg !my-6">Gráfico de {selectedOption ? selectedOption.name : 'Activo'} (últimos 7 días)</h2>
                        <Line data={chartData} options={chartOptions} />
                    </div>
                )}
                {selectedOption && (
                    <div className="flex justify-center my-12">
                        <button className="bg-purple-500 w-50 h-10 p-2 mt-35 flex justify-center items-center !rounded-3xl hover:bg-purple-700 text-white transition-all duration-300">
                            Comprar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrediccionesInversiones;
