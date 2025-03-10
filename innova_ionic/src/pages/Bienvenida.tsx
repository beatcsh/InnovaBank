import { IonContent, IonPage } from '@ionic/react';
import React from "react";
import "../components/animations.css";

const Bienvenida: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-800 via-purple-600 to-blue-500">
                    {/* Burbujas animadas */}
                    <div className="absolute top-10 left-20 w-60 h-60 bg-purple-400 rounded-full blur-3xl opacity-60 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
                    <div className="absolute bottom-10 right-32 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-60 animate-blob animation-delay-6000"></div>

                    {/* Contenido */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                        <img
                            src="/public/assets/logo.jpeg"
                            alt="InnovaBank Logo"
                            className="w-32 h-32 mb-6 "
                        />

                        <h1 className="text-5xl font-bold">
                            Bienvenido a <span className="text-purple-300">InnovaBank</span>
                        </h1>

                        <p className="mt-4 text-lg max-w-2xl">
                            La banca del futuro impulsada por inteligencia artificial.
                            Gestiona tu dinero con precisión y predice tu solvencia financiera.
                        </p>

                        <a href="/login">
                            <button className="duration-300 bg-purple-800 w-50 h-10 m-12 p-4 flex justify-center items-center !rounded-3xl hover:bg-purple-300 transition-all text-white">
                                Empezar
                            </button>
                        </a>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Bienvenida;