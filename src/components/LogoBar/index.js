import './LogoBar.css';

const LogoBar = () => {
    return (
        <div className='flex-col items-center justify-center ml-[20px] p-[0] fixed z-[1] left-0 hidden
        lg:w-fit lg:h-[100vh] lg:flex'>
            <div className='logoLine mb-[20px]'></div>
            <div className='logo'>
                JD
            </div>
            <div className='logoLine mt-[20px]'></div>
        </div>
    )
}

export default LogoBar;