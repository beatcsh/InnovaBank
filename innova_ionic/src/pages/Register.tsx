const Register: React.FC = () => {
    return (
        <>
            <div className='w-[100%] h-[100vh] flex flex-col place-items-center space-y-2 bg-violet-700'>
                <div className='m-3 px-4 flex w-[100%]'>
                    <a href="/"><i className='bx bxs-chevron-left text-4xl text-violet-950'></i></a>
                </div>
                <p className='font-bold text-2xl mb-4'>Registro</p>
                <form className='w-[100%] grid grid-cols-1 place-items-center my-6 gap-5'>
                    <input type="text" placeholder='Nombre' className='w-[80%] h-[45px] bg-white rounded-2xl text-black placeholder-gray-700 px-4' />
                    <input type="text" placeholder='Apellido' className='w-[80%] h-[45px] bg-white rounded-2xl text-black placeholder-gray-700 px-4' />
                    <p className='text-white text-xs font-semibold'>Fecha de nacimiento:</p>
                    <input
                        type="date"
                        className="appearance-none w-[80%] h-[45px] text-black rounded-2xl px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600"
                        value="2025-02-26"
                    />

                    <input type="email" placeholder='Email' className='w-[80%] h-[45px] bg-white rounded-2xl text-black placeholder-gray-700 px-4' />
                    <input type="Password" placeholder='Password' className='w-[80%] h-[45px] bg-white rounded-2xl text-black placeholder-gray-700 px-4' />
                    <input type="Password" placeholder='Confirm password' className='w-[80%] h-[45px] bg-white rounded-2xl text-black placeholder-gray-700 px-4' />
                    <div className='w-[80%] flex gap-2 place-items-center'>
                        <input type="checkbox" name="" id="" /><p className='text-sm'>Acepto terminos y condiciones</p>
                    </div>
                    <button type="submit" className="bg-violet-900 font-semibold w-[80%] h-[45px] !rounded-2xl text-white hover:bg-violet-600 transition-all duration-500">
                        Registrarse
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;