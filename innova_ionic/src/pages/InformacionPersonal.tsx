import React, { useState, useEffect } from 'react';
import { Pencil } from "lucide-react";
import Header from '../components/Header';
import { useHistory, useLocation } from 'react-router';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

interface LocationStorage {
    token?: string;
}

interface decodedToken {
    _id: string;
    exp: number;
    iat: number;
}

interface User {
    nombre: string;
    apePa: string;
    apeMa: string;
    curp: string;
    rfc: string;
    email: string;
    telefono: string;
    direccion: {
        cp: number;
        calle: string;
        numero: number;
        colonia: string;
        estado: string;
        localidad: string;
    };
}

const InfoPersonal: React.FC = () => {

    const history = useHistory();
    const location = useLocation<LocationStorage>();
    const token = location.state?.token || localStorage.getItem("authToken");
    console.log(token)

    const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({
        nombre: false,
        email: false,
        telefono: false,
    });

    const [userData, setUserData] = useState<User>({
        nombre: "",
        apePa: "",
        apeMa: "",
        curp: "",
        rfc: "",
        email: "",
        telefono: "",
        direccion: {
            cp: 0,
            calle: "",
            numero: 0,
            colonia: "",
            estado: "",
            localidad: "",
        },
    });

    useEffect(() => {
        const fetchUserData = async () => {
            if (token) {
                try {
                    const decodedToken: decodedToken = jwtDecode(token);
                    const id_usuario = decodedToken._id;
                    console.log("id obtenido: " + id_usuario + " de tipo " + typeof (id_usuario));
                    const user_info = await axios.get("http://localhost:4000/users/one", {
                        params: { _id: id_usuario },
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUserData(user_info.data)
                    console.log(userData)
                } catch (error) {
                    console.error("Error al obtener datos:", error);
                }
            }
        };
        fetchUserData();
    }, []);

    const onSubmit = async () => {
        if (token) {
            try {
                const decodedToken: decodedToken = jwtDecode(token);
                const id_usuario = decodedToken._id;
                await axios.put("http://localhost:4000/users/edit", userData, {
                    params: { _id: id_usuario },
                    headers: { Authorization: `Bearer ${token}` }
                });
                alert("Edicion exitosa");
                setEditMode({
                    nombre: false,
                    email: false,
                    telefono: false,
                })
                history.push("/info-user");
            } catch (err) {
                console.log(err)
                alert("Error al editar");
            }
        }
    };

    const handleChange = (field: keyof User, value: string) => {
        setUserData((prev) => ({
            ...prev,
            [field]: value,
        }));
        console.log(userData)
    };

    console.log(userData)

    return (
        <div className="bg-white h-screen overflow-y-auto flex flex-col items-center p-4">
            <Header />
            <div className="flex flex-col items-center">
                <div className="avatar mt-12 mb-4">
                    <img className="w-40 h-40 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Foto de perfil" />
                </div>
                <p className="font-bold text-lg mb-6">Información Personal</p>

                {/* Nombre */}
                <div className="mb-4 w-64">
                    <label className="block mb-1 text-gray-700">Nombre</label>
                    <div className="w-full flex justify-between items-center rounded-3xl border border-gray-300 bg-gray-100 text-gray-800 shadow-md p-3">
                        {editMode.nombre && editMode.nombre ? (
                            <input
                                className="w-full bg-transparent outline-none"
                                type="text"
                                value={userData.nombre}
                                onChange={(e) => handleChange("nombre", e.target.value)}
                            />
                        ) : (
                            <p className="w-full">{userData.nombre || "Cargando..."}</p>
                        )}
                        <button
                            onClick={() => setEditMode((prev) => ({ ...prev, nombre: true }))}
                            className="ml-auto text-purple-500"
                        >
                            <Pencil className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4 w-64">
                    <label className="block mb-1 text-gray-700">Email</label>
                    <div className="w-full flex justify-between items-center rounded-3xl border border-gray-300 bg-gray-100 text-gray-800 shadow-md p-3">
                        {editMode.email ? (
                            <input
                                className="w-full bg-transparent outline-none"
                                type="email"
                                value={userData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                        ) : (
                            <p className="w-full">{userData.email || "Cargando..."}</p>
                        )}
                        <button
                            onClick={() => setEditMode((prev) => ({ ...prev, email: true }))}
                            className="ml-auto text-purple-500"
                        >
                            <Pencil className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Teléfono */}
                <div className="mb-4 w-64">
                    <label className="block mb-1 text-gray-700">Teléfono</label>
                    <div className="w-full flex justify-between items-center rounded-3xl border border-gray-300 bg-gray-100 text-gray-800 shadow-md p-3">
                        {editMode.telefono ? (
                            <input
                                className="w-full bg-transparent outline-none"
                                type="text"
                                value={userData.telefono}
                                onChange={(e) => handleChange("telefono", e.target.value)}
                            />
                        ) : (
                            <p className="w-full">{userData.telefono || "Cargando..."}</p>
                        )}
                        <button
                            onClick={() => setEditMode((prev) => ({ ...prev, telefono: true }))}
                            className="ml-auto text-purple-500"
                        >
                            <Pencil className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <a href="/cambio-contra" className="mt-6 text-purple-500 font-semibold hover:!underline">Cambiar contraseña</a>

                <button
                    onClick={() => onSubmit()}
                    className="bg-purple-500 w-50 h-10 p-2 flex justify-center items-center !rounded-3xl hover:bg-purple-300 transition mt-4"
                >
                    Guardar Cambios
                </button>
            </div>
        </div>
    );
};

export default InfoPersonal;
