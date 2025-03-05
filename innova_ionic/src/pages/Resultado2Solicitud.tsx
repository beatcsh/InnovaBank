import React, { useState } from "react";
import { 
  IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonContent, IonInput, IonText, IonCard, IonCardContent, IonRange, IonAvatar 
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";

const CreditResult: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={chevronBack} />
            </IonButton>
          </IonButtons>
          <IonText className="text-lg font-semibold">RESULTADO DE SOLICITUD</IonText>
          <IonAvatar slot="end" className="bg-purple-600 text-white flex items-center justify-center w-8 h-8 rounded-full">
            <IonText>DM</IonText>
          </IonAvatar>
        </IonToolbar>
      </IonHeader>

      <IonContent className="p-4 text-center">
        <IonText className="text-red-500 font-bold">No eres elegible a crédito</IonText>

        <IonCard className="mt-4 bg-purple-100">
          <IonCardContent>
            <IonText className="text-sm font-semibold">MONTO ASIGNADO</IonText>
            <IonInput type="number" disabled className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-white text-center" />
          </IonCardContent>
        </IonCard>

        <div className="mt-4">
          <IonText className="font-medium">AJUSTE DE CRÉDITO</IonText>
          <IonRange min={0} max={100} disabled className="mt-2">
            <IonIcon slot="start" name="remove"></IonIcon>
            <IonIcon slot="end" name="add"></IonIcon>
          </IonRange>
        </div>

        <IonButton expand="full" className="mt-6 bg-purple-600 text-white rounded-lg">
          Volver
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreditResult;
