import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

interface LocationStorage {
  token?: string;
}

interface decodedToken {
  _id: string;
  exp: number;
  iat: number;
}

const Home: React.FC = () => {

  const location = useLocation<LocationStorage>();
  const token = location.state?.token || localStorage.getItem("authToken");
  console.log(token)

  const [show, setShow] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());
  const [nombre, setNombre] = useState<string>("");
  const [saldo, setSaldo] = useState<number>(0)

  useEffect(() => {
    setLastUpdated(new Date().toLocaleString());

    const fetchAccountData = async () => {
      if (token) {
        try {
          const decodedToken: decodedToken = jwtDecode(token);
          const id_usuario = decodedToken._id;
          console.log("id obtenido: " + id_usuario + " de tipo " + typeof (id_usuario));
          const tarjeta = await axios.get("http://localhost:4000/accounts/one", {
            params: { _id: id_usuario },
            headers: { Authorization: `Bearer ${token}` }
          });

          const user_info = await axios.get("http://localhost:4000/users/one", {
            params: { _id: id_usuario },
            headers: { Authorization: `Bearer ${token}` }
          });

          localStorage.setItem("id_tarjeta", tarjeta.data._id);
          setSaldo(tarjeta.data.informacion.balance)
          setNombre(user_info.data.nombre + " " + user_info.data.apePa)
        } catch (err: any) {
          console.log("no tenemos datos")
        }
      }
    };

    fetchAccountData();

  }, [show]);

  const showHandle = () => {
    setShow(!show);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className='w-[100%] h-screen overflow-y-auto bg-white !text-black'>
      <nav className='w-[100%] py-3 px-5 flex place-items-center justify-between'>
        {/* Botón de retroceso sin fondo y con ícono "<" */}
        <button
          onClick={goBack}
          className='text-2xl !text-black hover:text-purple-800 focus:outline-none'
        >
          &lt; {/* Este es el símbolo "<" */}
        </button>
        <p className='font-semibold text-xl'>Hola, {nombre}</p>
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
          <a href="/historialcuenta" className="w-[80%] !text-black">
            <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
              Movimientos Recientes
            </div>
          </a>

          <a href="/solvencia" className="w-[80%] !text-black">
            <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
              Indicador de Solvencia
            </div>
          </a>

          <a href="/cuentas" className="w-[80%] !text-black">
            <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
              Cuentas
            </div>
          </a>

          <a href="/acciones-frecuentes" className="w-[80%] !text-black">
            <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
              Acciones Frecuentes
            </div>
          </a>

          <a href="/analisis-inteligente" className="w-[80%] !text-black">
            <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
              Análisis Inteligente
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;