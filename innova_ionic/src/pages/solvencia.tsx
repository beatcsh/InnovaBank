import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel } from "@ionic/react";

const SolvencyIndicator: React.FC = () => {
  return (
    <div>
      <div className="">
      <nav className='w-[100%] h-[50px] px-4 '>
        <h2 className='text-black text-center font-bold mb-4'>Indicador de Solvencia</h2>
      </nav>
      </div>
      <div className="ion-padding text-center">
        </div>
        <div className="text-center ">
        <button
            className='w-[80%] h-[50px] bg-violet-500 font-bold text-xl !rounded-xl hover:bg-violet-700 focus:outline-2  
            focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 '
          >
            REPORTAR
          </button>
        </div>
      </div>
  );
};

export default SolvencyIndicator;