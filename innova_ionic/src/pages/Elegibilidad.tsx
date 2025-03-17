import { IonContent, IonPage } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useHistory } from "react-router";

const CreditEligibility: React.FC = () => {
  const history = useHistory();

  const [ganancia, setGanancia] = useState(5000); // Ganancia obtenida de la base de datos
  const [scoreCrediticio, setScoreCrediticio] = useState('');
  const [tieneDeudas, setTieneDeudas] = useState(false);
  const [deudasDescripcion, setDeudasDescripcion] = useState('');
  const [autorizado, setAutorizado] = useState(false);

  // Función para autorizar la consulta y recibir la respuesta
  const autorizarConsulta = async () => {
    setAutorizado(true);

    try {
      const response = await fetch('https://api.misitio.com/consulta_credito', {
        method: 'POST',
        body: JSON.stringify({ usuarioId: '1234' }), // Reemplaza con el ID del usuario
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setScoreCrediticio(data.puntajeCrediticio);
      setTieneDeudas(data.tieneDeudas);
      setDeudasDescripcion(data.deudasDescripcion);
    } catch (error) {
      console.error("Error al obtener el puntaje crediticio", error);
      // Maneja el error, tal vez con un mensaje de alerta
    }
  };


  const handleSubmit = () => {
    alert('Verificación completada con éxito.');
  };

  const obtenerColorSemaforo = (puntaje: number) => {
    if (puntaje < 600) {
      return "bg-red-500"; // Rojo
    } else if (puntaje >= 600 && puntaje <= 750) {
      return "bg-yellow-500"; // Amarillo
    } else {
      return "bg-green-500"; // Verde
    }
  };


  return (
    <IonPage>
      <IonContent>
        <div className="flex justify-between items-center p-4">
          <button onClick={() => history.goBack()}>
            <ChevronLeft size={35} />
          </button>
          <h3 className="p-2">Verificar Elegibilidad</h3>
          <button onClick={() => history.push("/InfoPersonal")}>
            <img
              className="w-10 h-10 rounded-full border-2 border-purple-500"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Foto de perfil"
            />
          </button>
        </div>
        <div className="flex justify-center items-center mt-6  p-4">
          <div className="!rounded-2xl bg-purple-300 w-64 p-4 shadow-2xl">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Tu ganancia mensual
            </label>
            <input
              type="text"
              value={`$${ganancia}`}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm bg-gray-100"
            />
          </div>
        </div>

        {!autorizado ? (
          <div className="flex justify-center items-center mt-6 p-4 !rounded-2xl">
            <button
              onClick={autorizarConsulta}
              className="w-64 h-10 py-3 bg-purple-600 text-white shadow-2xl !rounded-2xl hover:bg-purple-200 focus:outline-none mt-6"
            >
              Autorizar Consulta de Puntaje Crediticio
            </button>
          </div>
        ) : (
          <>

            <div className="flex justify-center items-center mt-6 p-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Puntaje crediticio
              </label>
              <div className="w-64 p-3 border border-gray-300 rounded-md shadow-sm bg-purple-100 flex items-center">
                <input
                  type="text"
                  value={scoreCrediticio}
                  readOnly
                  className="w-64"
                />
                <div
                  className={`${obtenerColorSemaforo(Number(scoreCrediticio))} w-4 h-4 rounded-full ml-2`}
                />
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-2  !rounded-xl" >
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  ¿Tienes deudas actuales?
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTieneDeudas(true)}
                    className={`w-28 h-10 shadow-2xl text-lg font-semibold !rounded-xl transition-all duration-300 transform ${tieneDeudas ? "bg-purple-500 text-white" : "bg-purple-200 text-gray-700"}`}
                  >
                    Sí
                  </button>
                  <button
                    onClick={() => setTieneDeudas(false)}
                    className={`w-28 h-10 shadow-2xl text-lg font-semibold !rounded-xl transition-all duration-300 transform ${!tieneDeudas ? "bg-purple-500 text-white" : "bg-purple-200 text-gray-700"}`}
                  >
                    No
                  </button>
                </div>

                {tieneDeudas && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Detalles de tus deudas
                    </label>
                    <textarea
                      value={deudasDescripcion}
                      readOnly
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Detalles de tus deudas..."
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center items-center mt-2 ">
              <button
                onClick={handleSubmit}
                className="w-64 h-8 py-3 bg-purple-600 text-white !rounded-xl hover:bg-purple-400 focus:outline-none mt-6 shadow-xl"
              >
                Verificar
              </button>
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CreditEligibility;