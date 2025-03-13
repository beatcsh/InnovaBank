import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

interface IDireccion {
    cp: number;
    calle: string;
    numero: number;
    colonia: string;
    estado: string;
    localidad: string;
}

interface IUser {
    nombre: string;
    apePa: string;
    apeMa: string;
    curp: string;
    rfc: string;
    email: string;
    contraseña: string;
    direccion: IDireccion;
}

const Register: React.FC = () => {

    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [data, setData] = useState<IUser>({
        nombre: "",
        apePa: "",
        apeMa: "",
        curp: "",
        rfc: "",
        email: "",
        contraseña: "",
        direccion: {
            cp: 0,
            calle: "",
            numero: 0,
            colonia: "",
            estado: "",
            localidad: ""
        }
    });

    const history = useHistory();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;

        if (name.startsWith("direccion.")) {
            const field = name.split(".")[1] as keyof IDireccion;
            setData(prev => ({
                ...prev,
                direccion: {
                    ...prev.direccion,
                    [field]: field === "cp" || field === "numero" ? Number(value) : value
                }
            }));
        } else {
            setData(prev => ({ ...prev, [name]: value }));
        }
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (data.contraseña !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        console.log(data)

        try {
            await axios.post("https://innovabank.onrender.com/users/register", data);
            alert("Registro exitoso");
            history.push("/login");
        } catch (err) {
            console.log(err)
            alert("Error al registrar");
        }
    }

    return (
        <>
            <div className='w-[100%] h-screen overflow-y-auto flex flex-col place-items-center space-y-2 bg-violet-700 pb-10'>
                <div className='m-3 px-4 flex w-[100%]'>
                    <a href="/"><i className='bx bxs-chevron-left text-4xl text-violet-950'></i></a>
                </div>
                <p className='font-bold text-2xl mb-4'>Registro</p>
                <form className='w-[100%] grid grid-cols-1 place-items-center my-6 gap-5'>
                    <input onChange={onChange} value={data.nombre} name="nombre" type="text" placeholder='Nombre' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <input onChange={onChange} value={data.apePa} name="apePa" type="text" placeholder='Apellido Paterno' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <input onChange={onChange} value={data.apeMa} name="apeMa" type="text" placeholder='Apellido Materno' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <input onChange={onChange} value={data.curp} name="curp" type="text" placeholder='CURP' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <input onChange={onChange} value={data.rfc} name="rfc" type="text" placeholder='RFC' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <input onChange={onChange} value={data.email} name="email" type="email" placeholder='Email' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <input onChange={onChange} value={data.contraseña} name="contraseña" type="password" placeholder='Password' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <input name="confirmPassword" type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm password' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <p className='font-bold text-xl my-2'>Direccion</p>
                    <input onChange={onChange} value={data.direccion.calle} name="direccion.calle" type="text" placeholder='Calle' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <div className="w-[80%] grid place-items-center grid-cols-2">
                        <input onChange={onChange} value={data.direccion.cp} name="direccion.cp" type="number" placeholder='Código Postal' className='w-[95%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                        <input onChange={onChange} value={data.direccion.numero} name="direccion.numero" type="number" placeholder='Número' className='w-[95%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    </div>
                    <input onChange={onChange} value={data.direccion.colonia} name="direccion.colonia" type="text" placeholder='Colonia' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <input onChange={onChange} value={data.direccion.estado} name="direccion.estado" type="text" placeholder='Estado' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <input onChange={onChange} value={data.direccion.localidad} name="direccion.localidad" type="text" placeholder='Localidad' className='w-[80%] h-[45px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <div className='w-[80%] flex gap-2 place-items-center'>
                        <input type="checkbox" name="" id="" /><p className='text-sm'>Acepto terminos y condiciones</p>
                    </div>
                    <button onClick={onSubmit} type="button" className="bg-violet-900 font-semibold w-[80%] h-[45px] !rounded-2xl text-white hover:bg-violet-600 transition-all duration-500">
                        Registrarse
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;