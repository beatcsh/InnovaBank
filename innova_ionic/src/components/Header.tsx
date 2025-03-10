const Header: React.FC = () => {
    return (
        <nav className='w-[100%] py-3 px-5 flex place-items-center justify-between shadow-sm'>
            <a href="/home"><i className='bx bx-chevron-left text-4xl !text-black'></i></a>
            <a href="/info-user"><img src='../assets/logo.jpeg' alt='avatar' className='w-[50px] rounded-full' /></a>
        </nav>
    );
};

export default Header;