import { useEffect, useRef } from 'react';
import './LayoutWrapper.css';

const LayoutWrapper = (props) => {
    const layoutWrapper = useRef()

    return (
        <div className='layout-wrapper z-[-1]' ref={layoutWrapper}>
            {props.children}
        </div>
    )
}

export default LayoutWrapper;