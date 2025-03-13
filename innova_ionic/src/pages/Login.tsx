import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const Login: React.FC = () => {

    const [data, setData] = useState({});
    const history = useHistory();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const onSubmit = async () => {
        try {
    
            const response = await axios.post("https://innovabank.onrender.com/users/login", data);
            
            alert("inicio de sesion exitoso")
            
            const authToken = response.data.token;
            localStorage.setItem("authToken", authToken);
    
            history.push("/home", { token: authToken });
        } catch (err: any) {
            alert("tuvimos problemas")
        }
    };
    

    return (
        <>
            <div className='w-[100%] h-[100vh] flex flex-col place-items-center space-y-2 bg-violet-700'>
                <div className='m-3 px-4 flex w-[100%]'>
                    <a href="/"><i className='bx bxs-chevron-left text-4xl text-violet-950'></i></a>
                </div>
                <div className='mb-12 mt-4'>
                    <img src="../assets/logo.jpeg" alt="innovalogo" className='w-[190px] rounded-full' />
                </div>
                <form className='w-[100%] grid grid-cols-1 place-items-center my-6 gap-5'>
                    <input onChange={onChange} name="email" type="email" placeholder='Email' className='w-[80%] h-[50px] bg-white rounded-2xl text-black placeholder-gray-700 px-4' />
                    <input onChange={onChange} name="contraseña" type="password" placeholder='Password' className='w-[80%] h-[50px] bg-white rounded-2xl !text-black placeholder-gray-700 px-4' />
                    <button onClick={onSubmit} type="button" className="bg-violet-900 font-semibold w-[80%] h-[50px] !rounded-2xl text-white hover:bg-violet-600 transition-all duration-500">
                        Iniciar Sesion
                    </button>
                    <a href='/register' className='w-[80%]'>
                        <button type="submit" className="bg-violet-800 font-semibold w-[100%] h-[50px] !rounded-2xl text-white hover:bg-violet-600 transition-all duration-500">
                            ¿Olvidaste tu contraseña?
                        </button>
                    </a>
                    <div className='w-[80%] grid grid-cols-1 place-items-center'>
                        <p className='flex'>¿No tienes cuenta? <a href="/register"><p className='text-violet-400 px-1 hover:text-white transition-all duration-500'>Registrate</p></a></p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;