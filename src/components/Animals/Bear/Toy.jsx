import React from 'react';
import teddy from '../../../images/TeddyBear.jpg'
import ReactPlayer from "./Bears";
import ReactPlayer from 'react-player'

function Toy() {
    return (
        <main className="content">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=XYOc_ff40As&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <img className="baby" src={teddy}/>
            <p className="mdc-typography--body">Taaak, mowa tu o misiu przytulance! Masz może podobną?</p>
        </main>
    );
}

export default Toy;
