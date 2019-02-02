import React from 'react';
import sealL from '../../../images/sealL.jpg'
import ReactPlayer from 'react-player'

function Boat() {
    return (
        <main className="content">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=pUg3FMyoq4E&feature=youtu.be'
                width='0%'
                height='0%'
                playing/>
            <img className="baby" src={sealL}/>
        </main>
    );
}

export default Boat;
