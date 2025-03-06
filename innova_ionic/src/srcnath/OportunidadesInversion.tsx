import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Bodega Aurrera', 'Tesla'],
  datasets: [
    {
      label: 'Rendimiento Anual',
      data: [5, 12],
      backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1,
    },
  ],
};

const InvestmentOpportunities = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>OPT</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <h2>Oportunidades de inversión</h2>
            <p>Saldo disponible: $6000</p>
            <p>Excedentes para invertir: $3000</p>
            <h3>Gráfica de rendimientos futuros</h3>
            <Bar data={data} />
            <h3>Sugerencias de inversión</h3>
            <p>Bodega Aurrera - 5% anual - Bajo riesgo</p>
            <p>Tesla - 12% anual - Alto riesgo</p>
            <IonButton expand="full">INVERTIR</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default InvestmentOpportunities;