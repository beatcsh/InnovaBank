import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton, IonCard, IonCardContent, IonList, IonItem } from '@ionic/react';
import React from 'react';

type FraudTransaction = {
  id: string;
  store: string;
  amount: number;
  status: string;
  location: string;
};

const fraudTransactions: FraudTransaction[] = [
  { id: '1', store: 'Amazon', amount: 2000, status: 'En revisión', location: 'Ciudad de México - Ecatepec' },
  { id: '2', store: 'Temu', amount: 201, status: 'Reportado', location: 'Aguascalientes - Pilar Blanco' },
  { id: '3', store: 'SHEIN', amount: 100, status: 'Reportado', location: 'Andalucía - Fuengirola' },
];

const FraudDetectionScreen: React.FC = () => {
  return (

    <div className='bg-white rounded-full'>
      <nav className='w-[100%] h-[50px] px-4 '>
        <h2 className='text-black text-center font-bold'>Detección de Fraudes</h2>
      </nav>
      <div className="space-y-1 text-center ">
        <div  className="ion-text-center">
          <h2 className='font-bold text-2xl text-red-700'>¡Alerta!</h2>cd
        </div>
        <div  className="ion-text-center">
          <h3 className='text-blue-500 text-lg font-bold '>COMPRA NO PERMITIDA</h3>
        </div>

        <div className='space-y-5 grid grid-cols-1 place-items-auto'>
          {fraudTransactions.map((transaction) => (
            <div key={transaction.id} className=' font-bold bg-violet-200 rounded-xl py-2 px-6  hover:bg-violet-500 focus:outline-2  focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 transition-all duration-300 shadow-xl text-center'>

              <h4 className='text-sm text-black'>
                Compra en {transaction.store} - ${transaction.amount} -- {transaction.status}
              </h4>
              <p className='text-xs text-black'>Ubicación: {transaction.location}</p>
            </div>
          ))}
        </div>


        <div className="text-black my-8 mx-8 text-sm font-bold">

          REPORTAR TRANSACCIÓN FRAUDULENTA
        </div>

        <div className='w-[100%] grid grid-cols-1 place-items-center'>
          <button
            className='w-[80%] h-[50px] bg-violet-500 font-bold text-xl !rounded-xl hover:bg-violet-700 focus:outline-2  focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'

          >
            REPORTAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default FraudDetectionScreen;