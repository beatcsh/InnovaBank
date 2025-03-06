import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonDatetime } from '@ionic/react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Enero 2025'],
  datasets: [
    {
      label: 'Ingresos',
      data: [4100],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Gastos',
      data: [5000],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const Expenses = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Gastos e Ingresos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel>Solicitamos el periodo a realizar</IonLabel>
              <IonDatetime displayFormat="MMMM YYYY" value="2025-01"></IonDatetime>
            </IonItem>
            <h2>Gasto total: $5000</h2>
            <h3>Diferencia en relación a ingresos: -$900</h3>
            <Bar data={data} />
            <p>Se estima que en este periodo de tiempo tu cuenta termine con un...</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Expenses;