import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCheckbox } from '@ionic/react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Pérdida/Ganancia',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const Predictions = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>PREDICCIONES</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <h2>Gráfico de pérdida y ganancia</h2>
            <Line data={data} />
            <IonCheckbox labelPlacement="end">Punto de referencia de la cuenta</IonCheckbox>
            <IonCheckbox labelPlacement="end">Índice de pérdida/ganancia</IonCheckbox>
            <h3>Resumen</h3>
            <p>En el último mes, el índice de pérdida y ganancia ha mostrado una tendencia descendente, reflejando una distribución en el saldo de la cuenta.</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Predictions;