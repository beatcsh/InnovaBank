import Header from "../components/Header";

const FrequentActions: React.FC = () => {
    return (
        <>
            <div className="w-[100%] h-screen overflow-y-auto text-black">
                <Header/>
                <div className="w-[100%] h-[50px] my-2 grid place-items-center">
                    <h2 className="!text-2xl !font-semibold">Acciones frecuentes</h2>
                </div>
                <div className="w-[100%] py-3 px-8 grid place-items-center">
                    {/* <a href="/transferencias" className="w-[100%] h-[100px] border-1 !text-black hover:!bg-violet-200 transition-all duration-500 border-gray-200 rounded-lg m-3 py-2 px-3 shadow-xl">
                        <p className="font-semibold">Realizar Transferencia</p>
                        <p className="text-sm">Realiza transferencias entre diferentes cuentas desde la aplicacion.</p>
                    </a> */}
                    <a href="/historialcuenta" className="w-[100%] h-[100px] border-1 !text-black hover:!bg-violet-200 transition-all duration-500 border-gray-200 rounded-lg m-3 py-2 px-3 shadow-xl">
                        <p className="font-semibold">Historial de la cuenta</p>
                        <p className="text-sm">Visualiza los ultimos movimientos de tu cuenta y filtra aquellos que no desees ver en el momento.</p>
                    </a>
                    <a href="/historialcuenta" className="w-[100%] h-[100px] border-1 !text-black hover:!bg-violet-200 transition-all duration-500 border-gray-200 rounded-lg m-3 py-2 px-3 shadow-xl">
                        <p className="font-semibold">Analisis de gastos</p>
                        <p className="text-sm">Analiza los gastos de tu cuenta de forma historica y previsualiza tu situacion a futuro.</p>
                    </a>
                </div>
                <div className="w-[100%] h-[50px] my-2 grid place-items-center">
                    <a href="/home"><button className="bg-violet-900 font-semibold w-[150px] h-[50px] !rounded-2xl text-white hover:bg-violet-600 transition-all duration-500">Volver</button></a>
                </div>
            </div>
        </>
    );
};

export default FrequentActions;