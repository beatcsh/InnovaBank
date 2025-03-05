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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detección de Fraudes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ backgroundColor: 'white' }}>
        <IonText color="danger" className="ion-text-center">
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>⚠️ ALERTA!!!! ⚠️</h2>
        </IonText>
        <IonText color="primary" className="ion-text-center">
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>COMPRA NO PERMITIDA</h3>
        </IonText>

        <IonList>
          {fraudTransactions.map((transaction) => (
            <IonCard key={transaction.id} style={{ backgroundColor: '#EFEAFF' }}>
              <IonCardContent>
                <IonItem lines="none">
                  <IonText>
                    <h4 style={{ fontWeight: 'bold', fontSize: '14px', color: '#4A148C' }}>
                      Compra en {transaction.store} - ${transaction.amount} -- {transaction.status}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#4A148C' }}>Ubicación: {transaction.location}</p>
                  </IonText>
                </IonItem>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>

        <IonText className="ion-text-center" style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '20px' }}>
          REPORTAR TRANSACCIÓN FRAUDULENTA
        </IonText>

        <IonButton
          expand="block"
          color="primary"
          style={{
            marginTop: '10px',
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '10px',
            padding: '15px',
          }}
        >
          REPORTAR
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FraudDetectionScreen;
