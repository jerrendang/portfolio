import './Navbar.css'

import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
    const onScreenElement = useSelector(state => state.elementOnScreen.element);

    return (
        <div className='w-fit h-[100vh] flex flex-row items-center justify-center m-[0] p-[0] fixed z-[1] right-0
        lg:w-fit lg:h-[100vh]'>
            <div className='flex flex-col justify-between items-end text-[1em] tracking-[3px] pr-[10px]
            h-[30%]'>
                <div className='navItem h-fit flex flex-row items-center'>
                    <a className={` background `} href='#home'>Me.</a>
                    <div className='navItemContainer'>
                        <div className={`${onScreenElement === 'home' ? 'w-[100%]' : 'w-0'} navItemForeground`}><a href='#home'>Me.</a></div>
                    </div>
                </div>
                <div className='navItem h-fit flex flex-row items-center'>
                    <a className={` background `} href='#projects'>Projects.</a>
                    <div className='navItemContainer'>
                        <div className={`${onScreenElement === 'projects' ? 'w-[100%]' : 'w-0'} navItemForeground`}><a href='#projects'>Projects.</a></div>
                    </div>
                </div>
                <div className='navItem h-fit flex flex-row items-center'>
                    <a className={` background `} href='#skills'>Skills.</a>
                    <div className='navItemContainer'>
                        <div className={`${onScreenElement === 'skills' ? 'w-[100%]' : 'w-0'} navItemForeground`}><a href='#skills'>Skills.</a></div>
                    </div>
                </div>
                <div className='navItem h-fit flex flex-row items-center'>
                    <a className={` background `} href='#home'>Contact.</a>
                    <div className='navItemContainer'>
                        <div className={`${onScreenElement === 'contact' ? 'w-[100%]' : 'w-0'} navItemForeground`}><a href='#contact'>Contact.</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;