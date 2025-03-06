import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Activo 1', 'Activo 2'],
  datasets: [
    {
      label: 'Distribución de Inversión',
      data: [70, 30],
      backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1,
    },
  ],
};

const LongTermInvestment = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>INVIERTE A LARGO PLAZO</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel>Selecciona el activo que te interese:</IonLabel>
              <IonSelect placeholder="Seleccionar">
                <IonSelectOption value="option1">Opción 1</IonSelectOption>
                <IonSelectOption value="option2">Opción 2</IonSelectOption>
              </IonSelect>
            </IonItem>
            <Doughnut data={data} />
            <p>Es una cadena de contratos inteligentes cuyo objetivo es ser una plataforma de alta velocidad para...</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LongTermInvestment;