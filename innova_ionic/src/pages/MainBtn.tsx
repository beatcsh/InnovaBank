import { IonApp, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import AnalisisdeGastos from '../pages/AnalisisdeGastos';
import Elegibilidad from '../pages/Elegibilidad';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Análisis Inteligente</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" routerLink="/analisisgastos">Análisis de Gastos</IonButton>
        <IonButton expand="full" routerLink="/elegibilidad">Elegibilidad de Crédito</IonButton>
        <IonButton expand="full">Predicción de Solvencia</IonButton>
        <IonButton expand="full">Oportunidades de Inversión</IonButton>
        <IonButton expand="full">Gastos e Ingresos</IonButton>
      </IonContent>
    </IonPage>
  );
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} exact />
      <Route path="/analisisgastos" component={AnalisisdeGastos} exact />
      <Route path="/elegibilidad" component={Elegibilidad} exact />
    </IonReactRouter>
  </IonApp>
);

export default App;
