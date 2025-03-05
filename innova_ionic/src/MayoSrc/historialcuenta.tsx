import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton, IonList, IonItem } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importa el hook de React Router

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historial de la cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ backgroundColor: 'white' }}>
        <IonText color="success" className="ion-text-center">
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Saldo disponible: $20,001.00</h2>
        </IonText>

        <IonButton
          expand="block"
          style={{
            backgroundColor: 'purple',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
          }}
        >
          <IonText style={{ color: 'white', fontSize: '16px' }}>Añadir cuenta</IonText>
        </IonButton>

        <IonList>
          {transactions.map((transaction) => (
            <IonItem
              key={transaction.id}
              style={{
                padding: '15px',
                borderRadius: '5px',
                marginBottom: '10px',
                backgroundColor: transaction.amount < 0 ? '#ffe0e0' : '#e0ffe0',
              }}
            >
              <IonText style={{ fontWeight: 'bold', fontSize: '14px' }}>
                {transaction.type === 'deposit' ? 'Depósito' : 'Transferencia'}
              </IonText>
              <IonText>{transaction.name} - {transaction.date}</IonText>
              <IonText
                style={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  color: transaction.amount < 0 ? 'red' : 'green',
                  marginLeft: 'auto',
                }}
              >
                {transaction.amount < 0 ? `-${transaction.amount}` : `+$ ${transaction.amount}`}
              </IonText>
            </IonItem>
          ))}
        </IonList>

        <IonButton
          expand="block"
          style={{
            padding: '10px',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
            marginTop: '10px',
          }}
        >
          Descargar estado de cuenta
        </IonButton>

        <IonButton
          expand="block"
          color="primary"
          style={{
            padding: '10px',
            borderRadius: '5px',
            marginTop: '10px',
          }}
          onClick={() => history.push('/solvency-indicator')} // Usa history.push para navegar
        >
          Ver Solvencia
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AccountHistoryScreen;
