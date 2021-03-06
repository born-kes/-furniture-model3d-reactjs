import React, {useState} from "react";
import FigureBox from "../FigureBox/FigureBox";
import './Model3d.css';

const Model3d = () => {
    const [element] = useState([
        { id:1, className: 'sidewall left' },
        { id:2, className: 'sidewall right' },
        { id:3, className: 'capture top' },
        { id:4, className: 'capture bottom' },
        { id:5, className: 'shelves' }
    ]);
    const [dimensions] = useState({
        x: '700',
        y: '716',
        z: '500',
    });
    const model3d = {
        transform: 'rotateX(-20deg) rotateY(-20deg)',
        transition: 'all 1s ease-in-out',
        '--furniture--x': `${dimensions.x}px`,
        '--furniture--y': `${dimensions.y}px`,
        '--furniture--z': `${dimensions.z}px`
    };

    return (
        <div  id="model3d" title="scene3d" style={model3d} >
            <div className={'model3d-content furniture'}>
                {
                    element.map(({id, className})=><FigureBox key={id} className={className} />)
                }
            </div>
        </div>
    );
}

export default Model3d;