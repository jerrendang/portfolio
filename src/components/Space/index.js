import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from 'maath/random/dist/maath-random.esm';
import { Points, PointMaterial, Preload } from '@react-three/drei'

import './Space.css'

const Stars = (props) => {
    const pointsRef = useRef();

    const sphere = random.inSphere(new Float32Array(5001), { radius: 1.2 })

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            pointsRef.current.rotation.y += 0.001
        })
    })

    useFrame(() => {
        pointsRef.current.rotation.x += .001
    })

    return (
        <group rotation={[0,0,Math.PI / 4]}>
            <Points
                ref={pointsRef}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial 
                    transparent
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const Space = () => {
    return (
        <div className='spaceWrapper'>
            <Canvas camera={{ position: [0,0,1]}}>
                <fog attach='fog' near={1} far={10}/>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all/>
            </Canvas>
        </div>
    )
}

export default Space;