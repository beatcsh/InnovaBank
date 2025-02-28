import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton, IonInput, IonRange, IonLabel } from '@ionic/react';

export default function CreditResult() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">RESULTADO DE SOLICITUD</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <p className="text-green-600 font-bold">ERES ELEGIBLE AL CRÉDITO!!</p>
        
        <IonCard className="ion-padding" style={{ backgroundColor: '#E9D5FF' }}>
          <IonCardContent>
            <IonLabel className="text-sm font-medium">MONTO ASIGNADO</IonLabel>
            <IonInput
              className="ion-text-center"
              value="$27000"
              readonly
            />
          </IonCardContent>
        </IonCard>

        <div className="ion-margin-top">
          <IonLabel className="text-sm font-medium">AJUSTE DE CRÉDITO</IonLabel>
          <IonRange min={0} max={27000} value={27000} />
        </div>

        <IonButton expand="full" color="purple" className="ion-margin-top">
          Volver
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
