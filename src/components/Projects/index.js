import { useRef, useState, useEffect } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";

import './Projects.css'
import { elementOnScreen } from "../../store/elementOnScreen";
import { useDispatch } from "react-redux";

const Projects = () => {
    const projectsRef = useRef();
    const [scrolling, setScrolling] = useState(true);

    const dispatch = useDispatch();

    window.addEventListener('scroll', () => {
        setScrolling(!scrolling)
    })

    window.removeEventListener('scroll', () => {
        setScrolling(!scrolling)
    })

    useEffect(() => {
        if ((Math.abs(projectsRef.current.getBoundingClientRect().top)) < (window.screen.height / 2)) {
            dispatch(elementOnScreen('projects'));
        }
    }, [scrolling])

    return (
        <>
            <div ref={projectsRef} className='displayContainer' id='projects'>
                <div className='startline'>
                    <div className='reversedLine'></div>
                    <div className='circle'></div>
                    <div className='line'></div>
                </div>
                <div className='h-full flex flex-col items-cente justify-evenly'>
                    <div className='project flex flex-row justify-start items-center'>
                        <a className='logoContainer hover:cursor-pointer' target='_blank' href="https://cloudnine.onrender.com/">
                            <div className=' flex flex-col items-center '>
                                <div>CloudNine Clothing MarketPplace</div>
                            </div>
                        </a>
                        <div className='flex flex-col pl-[50px] min-w-[250px]'>
                            <div>Site for users to buy and sell clothing.</div>
                            <div><a href='https://stripe.com/' target='_blank' className='text-yellow hover:underline'>Stripe</a> implementation to process purchases.</div>
                            <div>Frontend built upon React and Redux.</div>
                            <div>Backend built on Express storing data in Postgres and AWS S3.</div>
                            <a className='text-yellow hover:underline' href='https://cloudnine.onrender.com/' target='_blank'>Live Site</a>
                        </div>
                    </div>
                    <div className='project flex flex-row justify-start items-center'>
                        <a className='logoContainer hover:cursor-pointer' target='_blank' href="https://almostnetflix.onrender.com/">
                            <div className='nfLogoContainer flex flex-col items-center rounded-lg p-[10px]'>
                                <div><i>Almost</i></div>
                                <div className='netflixLogo'></div>
                            </div>
                        </a>
                        <div className='flex flex-col pl-[50px] min-w-[250px]'>
                            <div><i>A visual clone of the video streaming platform that we all love.</i></div>
                            <div>Built upon <b>React</b>, managing state through Redux, and connected to the TMDB API</div>
                            <a className='text-yellow hover:underline' href='https://almostnetflix.onrender.com/' target='_blank'>Live Site</a>
                        </div>
                    </div>
                    <div className='project flex flex-row justify-start items-center'>
                        <a className='logoContainer hover:cursor-pointer' target='_blank' href="https://product-page-atnt.onrender.com">
                            <div className='flex flex-col items-center justify-center h-[50px] overflow-hidden'>
                                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/ec669396767619.63bdc2e1bee2a.jpg' alt='therabodyLogo'/>
                            </div>
                        </a>
                        <div className='flex flex-col pl-[50px] min-w-[250px]'>
                            <div>Visual page for products made by <a href='https://www.therabody.com/' target="_blank" className='text-yellow hover:underline'>Therabody</a>.</div>
                            <div>Assets pulled from the Therabody page and Behance.</div>
                            <div>Built on <i>React</i> with future plans of implementing a shopping cart.</div>
                            <a className='text-yellow hover:underline' href='https://product-page-atnt.onrender.com' target='_blank'>Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div ref={projectsRef} className='displayContainer'>
                <div className='startline'>
                    <div className='reversedLine'></div>
                    <div className='circle'></div>
                    <div className='line'></div>
                </div>

                <div className='project bg-white'>
                    <i>Almost</i> Netflix
                </div>
            </div> */}
        </>
    )
}

export default Projects;