import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AnalisisdeGastos, Elegibilidad, FraudDetectionScreen, PredictionChart, AccountHistoryScreen, Home, Login, MainBtn, Register, CreditResult, CreditResult2, Solvencia, Bienvenida, FrequentActions } from './pages';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

// no se para que deje hacer cosas
const App: React.FC = () => (
  <IonApp className='bg-white'>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/bienvenida">
          <Bienvenida />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/analisis">
          <AnalisisdeGastos />
        </Route>
        <Route exact path="/elegibilidad">
          <Elegibilidad />
        </Route>
        <Route exact path="/mainbtn">
          <MainBtn />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/creditresult">
          <CreditResult />
        </Route>
        <Route exact path="/frequent">
          <FrequentActions />
        </Route>
        <Route exact path="/predicciones">
          <PredictionChart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/fraudes">
          <FraudDetectionScreen />
        </Route>
        <Route exact path="/historialcuenta">
          <AccountHistoryScreen />
        </Route>
        <Route exact path="/solvencia">
          <Solvencia />
        </Route>
        <Route exact path="/resultado2solicitud">
          <CreditResult />
        </Route>
        <Route exact path="/resultadosolicitud">
          <CreditResult2 />
        </Route>
        <Route exact path="/">
          <Redirect to="/bienvenida" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
