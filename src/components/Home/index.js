import './Home.css';
import { useIsVisible } from '../../hooks/useIsVisible';
import { elementOnScreen } from '../../store/elementOnScreen';

import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    const homeRef = useRef();
    const [scrolling, setScrolling] = useState(true);

    const dispatch = useDispatch();

    window.addEventListener('scroll', () => {
        setScrolling(!scrolling)
    })

    window.removeEventListener('scroll', () => {
        setScrolling(!scrolling)
    })

    useEffect(() => {
        if ((Math.abs(homeRef.current.getBoundingClientRect().top)) < (window.screen.height / 2)){
            dispatch(elementOnScreen('home'));
        }
    }, [scrolling])

    // const isVisible = useIsVisible(homeRef, 0);

    return (
        <div ref={homeRef} className='homeContainer relative' id='home'>
            <div className='startLine'>
                <div className='circle'></div>
                <div className='line'></div>
            </div>
            <div className='messageWrapper text-white'>
                <div className='intro text-[2em] min-w-[300px]'>
                    Hi, I'm <a href='https://linkedin.com/in/jerrendang' target='_blank' className='name'><mark className='name text-blue bg-yellow pb-[0px] rounded'>Jerren.</mark></a>
                </div>
                <div className='message font-[1.5em] leading-[2em] w-fit hidden
                sm:hidden md:block lg:block'>
                    Welcome to my digital playground! <br />
                    I'm passionate about navigating the ever-evolving landscape of modern web development, <br />
                    where every project is a canvas. <br />
                    Join me on this exciting journey as I craft immersive digital experiences. <br />
                    {/* Let's turn ideas into interactive realities and explore the endless possibilities of the web together.<br /> */}
                </div>
            </div>
            <a href='#projects' className='scrollIndicator absolute bottom-[10vh] justify-self-center border-[2px] border-[rgba(255,255,255,.7)] border-solid rounded-full h-[60px] w-[30px]'>
                <div className='scrollCircle absolute h-[20px] w-[20px] rounded-full bg-yellow top-[3px] left-[3px]'>

                </div>
            </a>
        </div>
    )
}

export default Home;

// const sphereRef = useRef();

// const background = '#ffffff'

// const sphereColor = '#ffffff'

// const Sphere = () => {
//     return (
//         <mesh
//             visible
//             position={[0, 0, 0]}
//             ref={sphereRef}
//             className='sphere'
//         >
//             <sphereGeometry args={[1, 50, 50]} />
//             <MeshDistortMaterial speed={2} metalness={0.9} color={sphereColor} roughness={0.4} factor={10}/>
//         </mesh>
//     )
// }