import React from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton, IonList, IonItem } from '@ionic/react';
import { useHistory } from 'react-router-dom'; 

type Transaction = {
  id: string;
  type: 'deposit' | 'transfer';
  name: string;
  date: string;
  amount: number;
}; 

const transactions: Transaction[] = [
  { id: '1', type: 'deposit', name: 'Montserrat Lozano', date: '31/01', amount: 500 },
  { id: '2', type: 'transfer', name: 'Montserrat Lozano', date: '30/01', amount: -700 },
  { id: '3', type: 'deposit', name: 'Nathalie Mireles', date: '30/01', amount: 200 },
  { id: '4', type: 'transfer', name: 'Francisco Meléndez', date: '01/01', amount: 20000 },
];

const AccountHistoryScreen: React.FC = () => {
  const history = useHistory(); // Usar useHistory para navegación

  return (
    <div>
      <div>
        <div className="bg-white-600">
          <h1 className="text-black text-center">Historial de la cuenta</h1>
        </div>
      </div>
      <div className="ion-padding bg-white">
        <div color="success" className="text-center">
          <h2 className="text-lg font-bold mb-2 text-green-400">Saldo disponible: $20,001.00</h2>
        </div>

        <div
          className="rounded-x1"
        >
          <div className="bg-purple-700 rounded-xl py-2 px-6  hover:bg-violet-700 focus:outline-2  focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 transition-all duration-300 shadow-xl text-center mb-2">Añadir cuenta</div>
        </div>

        <div>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`'font-bold text-1xl py-3 rounded-lg mb-2 text-black ${transaction.amount < 0 ? 'bg-green-100' : 'bg-purple-100'}`}
            >
              <div className="font-semibold text-black">
                {transaction.type === 'deposit' ? 'Depósito' : 'Transferencia'}
              </div>
              <div className="ml-2">{transaction.name} - {transaction.date}</div>
              <div
                className={`font-bold text-1x1 ml-auto ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}
              >
                {transaction.amount < 0 ? `-${transaction.amount}` : `+$ ${transaction.amount}`}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-700 rounded-xl py-2 px-6  hover:bg-violet-700 focus:outline-2  focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 transition-all duration-300 shadow-xl text-center">
          Descargar estado de cuenta
        </div>

        <div
          
          className="bg-purple-700 rounded-xl py-2 px-6  hover:bg-violet-700 focus:outline-2  focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 transition-all duration-300 shadow-xl text-center mt-3 "
          onClick={() => history.push('/solvencia')} // Usa history.push para navegar
        >
          Ver Solvencia
        </div>
      </div>
    </div>
  );
};

export default AccountHistoryScreen;
