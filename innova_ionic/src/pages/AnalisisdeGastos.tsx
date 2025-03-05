import React from "react";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonCard, IonCardContent, IonIcon, IonText } from "@ionic/react";
import { chevronBack, notificationsOutline, walletOutline } from "ionicons/icons";

const ExpenseAnalysis: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="flex justify-between p-3">
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={chevronBack} />
            </IonButton>
          </IonButtons>
          <IonText className="text-lg font-semibold">Análisis de Gastos</IonText>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="p-4">
        <IonCard className="flex flex-col items-center p-6">
          <div className="relative flex justify-center items-center w-40 h-40 bg-gray-100 rounded-full">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 50">
              <path d="M10,50 A40,40 0 1,1 90,50" stroke="#ff4d4d" strokeWidth="6" fill="none" />
              <path d="M10,50 A40,40 0 1,1 80,10" stroke="#9333ea" strokeWidth="6" fill="none" />
              <path d="M10,50 A40,40 0 1,1 70,5" stroke="#3b82f6" strokeWidth="6" fill="none" />
            </svg>
            <span className="text-3xl font-bold absolute">711</span>
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              <IonText>BUENO</IonText>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
              <IonText>MODERADO</IonText>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              <IonText>MALO</IonText>
            </div>
          </div>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <div className="flex items-center">
              <IonIcon icon={walletOutline} className="mr-2 text-xl" />
              <IonText className="font-medium">Saldo disponible: <strong>$12,500.00 MXN</strong></IonText>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonText className="text-sm">
              📊 Tip de ahorro: <span className="italic">"Reduce tu gasto en entretenimiento un 10% y ahorras $500 al mes."</span>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ExpenseAnalysis;
