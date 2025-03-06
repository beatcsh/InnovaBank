import { useState } from 'react';

const Home: React.FC = () => {

  const [show, setShow] = useState(false);
  const nombre = "Nathalie";
  const saldo = 2000

  const showHandle = () => {
    setShow(!show)
  }

  return (
    <>
      <div className='w-[100%] h-screen overflow-y-auto text-black'>
        <nav className='w-[100%] py-3 px-5 flex place-items-center justify-between'>
          <p className='text-xl'>Hola, {nombre}</p>
          <img src='../assets/logo.jpeg' alt='avatar' className='w-[50px] rounded-full' />
        </nav>
        <main className='w-[100%] grid grid-cols-1 place-items-center gap-6 my-4'>
          <div> {/* esto es el de la tarjeta */}
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-2xl p-6 w-80 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <div className="flex space-x-2">
                  <div className="bg-red-600 w-4 h-4 rounded-full"></div>
                  <div className="bg-orange-500 w-4 h-4 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold">VISA</span>
                <span className="text-sm font-semibold">${show ? `${saldo}` : `*****`}</span>
              </div>
              <div className="text-center text-md tracking-widest mb-6 font-semibold">
                .... .... .... 2104
              </div>
              <div className="flex justify-between text-sm font-semibold">
                <span>Nathalie Mireles</span>
                <span>28/33</span>
              </div>
            </div>
          </div>
          <div onClick={showHandle} className='bg-gray-200 rounded-xl py-2 px-6 hover:bg-gray-300 transition-all duration-300 shadow-xl text-center'>
            {show ? 'Ocultar saldo' : 'Mostrar saldo'}
          </div>
          <div className='w-[100%] px-10 flex justify-between'>
            <p className='font-semibold text-sm'>Ultima actualizacion hace 5 minutos</p>
            <i className='bx bx-refresh text-xl'></i>
          </div>
          <div className='w-[100%] grid grid-cols-1 place-items-center gap-6'>
            <div className='w-[80%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-xl text-center'>
              Cuentas
            </div>
            <div className='w-[80%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-xl text-center'>
              Indicador de Solvencia
            </div>
            <div className='w-[80%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-xl text-center'>
              Movimientos Recientes
            </div>
            <div className='w-[80%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-xl text-center'>
              Acciones Frecuentes
            </div>
            <div className='w-[80%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-xl text-center'>
              Analisis Inteligente
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;