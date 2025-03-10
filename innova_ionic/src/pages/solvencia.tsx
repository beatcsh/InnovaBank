import React, { useState } from "react";
import Indicator from "../components/IndicatorSolvencia";
import Header from "../components/Header";

const SolvencyIndicator: React.FC = () => {

  const [solvencia, setSolvencia] = useState<number>(75);
  
  return (
    <div>
      <Header/>
      <div className="">
        <nav className='w-[100%] h-[50px] px-4 '>
          <h2 className='text-black text-center font-bold mb-4'>Indicador de Solvencia</h2>
        </nav>
      </div>
      <div className="ion-padding text-center">
        <Indicator solvencia={solvencia} />
      </div>
      <a href="/historialcuenta" className="w-[100%] grid place-items-center my-10">
        <button
          className='text-white w-[80%] h-[40px] bg-violet-500 font-bold text-xl !rounded-xl hover:bg-violet-700 focus:outline-2  
            focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 '
        >
          Ver mis movimientos
        </button>
      </a>href="/historialcuenta" 
    </div>
  );
};

export default SolvencyIndicator;