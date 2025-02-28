import React, { useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonContent, IonInput, IonText, IonCard, IonCardContent } from "@ionic/react";
import { chevronBack } from "ionicons/icons";

const CreditEligibility: React.FC = () => {
  const [income, setIncome] = useState("27000");
  const [debt, setDebt] = useState(false);
  const [debtDescription, setDebtDescription] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="flex justify-between p-3">
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={chevronBack} />
            </IonButton>
          </IonButtons>
          <IonText className="text-lg font-semibold">VERIFICAR ELEGIBILIDAD DE CRÉDITO</IonText>
        </IonToolbar>
      </IonHeader>

      <IonContent className="p-4">
        {/* Ingreso de ganancia mensual */}
        <IonCard className="p-3 bg-purple-100">
          <IonText className="text-sm font-semibold">INGRESA TU GANANCIA MENSUAL</IonText>
          <IonInput
            type="number"
            value={income}
            onIonChange={(e) => setIncome(e.detail.value!)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-white text-center"
          />
        </IonCard>

        {/* Historial Crediticio */}
        <div className="mt-4">
          <IonText className="font-medium">HISTORIAL CREDITICIO</IonText>
          <div className="flex items-center mt-2">
            <span className="w-4 h-4 bg-green-400 rounded-full mr-2"></span>
            <IonText>BUENO</IonText>
          </div>
          <div className="flex items-center mt-2">
            <span className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
            <IonText>REGULAR</IonText>
          </div>
          <div className="flex items-center mt-2">
            <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
            <IonText>MALO</IonText>
          </div>
        </div>

        {/* Tienes deudas actuales */}
        <div className="mt-6">
          <IonText className="font-medium">TIENES DEUDAS ACTUALES</IonText>
          <div className="flex gap-4 mt-2">
            <IonButton 
              color={debt ? "dark" : "medium"} 
              className="w-20 bg-purple-600 text-white"
              onClick={() => setDebt(true)}
            >
              Sí
            </IonButton>
            <IonButton 
              color={!debt ? "dark" : "medium"} 
              className="w-20 bg-purple-600 text-white"
              onClick={() => setDebt(false)}
            >
              No
            </IonButton>
          </div>
        </div>

        {/* Descripción de deudas */}
        {debt && (
          <IonCard className="p-3 mt-4 bg-purple-100">
            <IonText className="text-sm font-semibold">DESCRIBE CUÁLES</IonText>
            <IonInput
              type="text"
              value={debtDescription}
              onIonChange={(e) => setDebtDescription(e.detail.value!)}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-white"
              placeholder="Ej. Tarjeta de crédito, préstamo..."
            />
          </IonCard>
        )}

        {/* Botón Verificar */}
        <IonButton expand="full" className="mt-6 bg-purple-600 text-white rounded-lg">
          VERIFICAR
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreditEligibility;
