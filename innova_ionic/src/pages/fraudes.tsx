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
  { id: '1', store: 'Amazon', amount: 200, status: 'En revisión', location: 'Ciudad de México - Ecatepec' },
  { id: '2', store: 'Temu', amount: 200, status: 'Reportado', location: 'Aguascalientes - Pilar Blanco' },
  { id: '3', store: 'SHEIN', amount: 200, status: 'Reportado', location: 'Andalucía - Fuengirola' },
];

const FraudDetectionScreen: React.FC = () => {
  return (
    <div className='bg-white'>
      <nav className='w-[100%] h-[50px] px-4'>
        <h2 className='text-black'>Detección de Fraudes</h2>
      </nav>
      <div className="space-y-2">
        <IonText color="danger" className="ion-text-center">
          <h2 className='font-bold text-2xl text-violet-700'>Alerta</h2>
        </IonText>
        <IonText color="primary" className="ion-text-center">
          <h3 className='text-blue-500 text-lg font-semibold'>COMPRA NO PERMITIDA</h3>
        </IonText>

        <div className='space-y-10 grid grid-cols-1 place-items-center'>
          {fraudTransactions.map((transaction) => (
            <div key={transaction.id} className='bg-white'>
              <h4 className='text-sm text-black'>
                Compra en {transaction.store} - ${transaction.amount} -- {transaction.status}
              </h4>
              <p className='text-xs text-black'>Ubicación: {transaction.location}</p>
            </div>
          ))}
        </div>

        <div className="text-black my-8 mx-8 text-sm">
          REPORTAR TRANSACCIÓN FRAUDULENTA
        </div>

        <div className='w-[100%] grid grid-cols-1 place-items-center'>
          <button
            className='w-[80%] h-[50px] bg-violet-500 font-semibold text-xl !rounded-xl'
          >
            REPORTAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default FraudDetectionScreen;
