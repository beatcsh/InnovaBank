import { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [show, setShow] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());
  const nombre = "Jesus Sanchez";
  const saldo = 2000;

  useEffect(() => {
    setLastUpdated(new Date().toLocaleString());
  }, [show]);

  const showHandle = () => {
    setShow(!show);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className='w-[100%] h-screen overflow-y-auto bg-white text-black'>
      <nav className='w-[100%] py-3 px-5 flex place-items-center justify-between'>
        {/* Botón de retroceso sin fondo y con ícono "<" */}
        <button
          onClick={goBack}
          className='text-2xl text-black hover:text-purple-800 focus:outline-none'
        >
          &lt; {/* Este es el símbolo "<" */}
        </button>
        <p className='text-xl'>"Hola, {nombre}"</p>
        <div className='w-[50px] h-[50px] rounded-full bg-purple-800 flex items-center justify-center text-white font-semibold'>
          DM
        </div>
      </nav>

      <main className='w-[100%] grid grid-cols-1 place-items-center gap-6 my-4'>
        <div>
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-2xl p-6 w-80 shadow-2xl shadow-blue-900">
            {/* Contenedor para VISA y saldo */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-1">
                <div className="relative w-5 h-5">
                  <div className="absolute bg-red-600 w-4 h-4 rounded-full"></div>
                  <div className="absolute bg-orange-500 w-4 h-4 rounded-full left-2"></div>
                </div>
                <span className="text-sm font-semibold">VISA</span>
              </div>

              {/* Saldo al lado de VISA */}
              <div className="text-sm font-semibold">
                ${show ? saldo : "***"}
              </div>
            </div>

            {/* Número de tarjeta */}
            <div className="text-center text-md tracking-widest mb-6 font-semibold">
              .... .... .... 2104
            </div>

            {/* Nombre y fecha */}
            <div className="flex justify-between text-sm font-semibold">
              <span>{nombre}</span>
              <span>28/33</span>
            </div>
          </div>
        </div>

        {/* Botón para mostrar u ocultar saldo */}
        <div
          onClick={showHandle}
          className='bg-gray-200 rounded-xl py-2 px-6 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center'
        >
          {show ? 'Ocultar saldo' : 'Mostrar saldo'}
        </div>

        {/* Última actualización */}
        <div className='w-[100%] px-10 flex justify-between'>
          <p className='font-semibold text-sm'>Última actualización: {lastUpdated}</p>
          <i className='bx bx-refresh text-xl cursor-pointer' onClick={() => setLastUpdated(new Date().toLocaleString())}></i>
        </div>

        {/* Lista de opciones */}
        <div className='w-[100%] grid grid-cols-1 place-items-center gap-6'>
          {["Cuentas", "Indicador de Solvencia", "Movimientos Recientes", "Acciones Frecuentes", "Análisis Inteligente"].map((opcion, index) => (
            <div key={index} className='w-[80%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center'>
              {opcion}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;