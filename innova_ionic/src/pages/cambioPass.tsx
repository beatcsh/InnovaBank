import React, { useState, useEffect } from "react";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from 'react-router';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const ChangesPass: React.FC = () => {

    const history = useHistory();
    const location = useLocation<{ token?: string }>();
    const token = location.state?.token || localStorage.getItem("authToken");

    interface decodedToken {
        _id: string;
    }

    interface User {
        nombre: string;
        apePa: string;
        apeMa: string;
        curp: string;
        rfc: string;
        email: string;
        telefono: string;
        contraseña: string;
        direccion: {
            cp: number;
            calle: string;
            numero: number;
            colonia: string;
            estado: string;
            localidad: string;
        };
    }

    const [userData, setUserData] = useState<User>({
        nombre: "",
        apePa: "",
        apeMa: "",
        curp: "",
        rfc: "",
        email: "",
        telefono: "",
        contraseña: "",
        direccion: {
            cp: 0,
            calle: "",
            numero: 0,
            colonia: "",
            estado: "",
            localidad: ""
        },
    });

    const [actual, setActual] = useState("");
    const [nueva, setNueva] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [showActualPassword, setShowActualPassword] = useState(false);
    const [showNuevaPassword, setShowNuevaPassword] = useState(false);
    const [showConfirmarPassword, setShowConfirmarPassword] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            if (token) {
                try {
                    const decodedToken: decodedToken = jwtDecode(token);
                    const id_usuario = decodedToken._id;

                    const user_info = await axios.get("http://localhost:4000/users/one", {
                        params: { _id: id_usuario },
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUserData(user_info.data);
                } catch (error) {
                    console.error("Error al obtener datos:", error);
                }
            }
        };
        fetchUserData();
    }, [token]);

    const onSubmit = async () => {
        if (!token) return alert("No hay token válido");

        try {
            if (nueva !== confirmar) {
                alert("Las contraseñas nuevas no coinciden");
                return;
            }

            const decodedToken: decodedToken = jwtDecode(token);
            const id_usuario = decodedToken._id;

            const updatedUserData = { ...userData, contraseña: nueva };

            await axios.put("http://localhost:4000/users/edit", updatedUserData, {
                params: { _id: id_usuario },
                headers: { Authorization: `Bearer ${token}` }
            });

            alert("Contraseña actualizada correctamente");
            history.push("/info-user");

        } catch (err) {
            alert("Error al editar la información");
        }
    };

    return (
        <div className="flex flex-col h-screen overflow-y-auto bg-white">
            <header className="p-4 flex items-center bg-white shadow-md">
                <Link to="/info-user" className="text-gray-700">
                    <ChevronLeft size={35} />
                </Link>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="avatar mb-4">
                    <img className="w-40 h-40 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Foto de perfil" />
                </div>

                <p className="font-bold text-lg mb-6">Cambiar Contraseña</p>

                {[{ label: "Contraseña Actual", value: actual, setValue: setActual, show: showActualPassword, setShow: setShowActualPassword },
                { label: "Nueva Contraseña", value: nueva, setValue: setNueva, show: showNuevaPassword, setShow: setShowNuevaPassword },
                { label: "Confirmar Nueva Contraseña", value: confirmar, setValue: setConfirmar, show: showConfirmarPassword, setShow: setShowConfirmarPassword }]
                    .map(({ label, value, setValue, show, setShow }, index) => (
                        <div key={index} className="mb-4 w-64">
                            <label className="block mb-1 text-gray-700">{label}</label>
                            <div className="relative w-full flex items-center rounded-3xl border border-gray-300 bg-gray-100 text-gray-800 shadow-md p-3">
                                <input
                                    type={show ? "text" : "password"}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="w-full bg-transparent outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 text-gray-600"
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    ))}

                <button onClick={onSubmit} className="bg-purple-500 w-64 h-10 flex justify-center items-center !rounded-3xl text-white font-semibold hover:bg-purple-400 transition">
                    Confirmar
                </button>
            </div>
        </div>
    );
};

export default ChangesPass;