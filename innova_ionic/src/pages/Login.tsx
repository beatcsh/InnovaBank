const Login: React.FC = () => {
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
                    <input type="email" placeholder='Email' className='w-[80%] h-[50px] bg-white rounded-2xl text-black placeholder-gray-700 px-4' />
                    <input type="Password" placeholder='Password' className='w-[80%] h-[50px] bg-white rounded-2xl text-black placeholder-gray-700 px-4' />
                    <button type="submit" className="bg-violet-900 font-semibold w-[80%] h-[50px] !rounded-2xl text-white hover:bg-violet-600 transition-all duration-500">
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