import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <div className='w-[100%] h-[100vh] grid place-items-center bg-amber-300 animate-pulse'>
        <div className='text-3xl font-bold text-blue-600 animate-bounce'>Mayo</div>
      </div>
    </IonPage>
  );
};

export default Home;
