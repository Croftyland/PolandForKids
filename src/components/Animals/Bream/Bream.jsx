import React from 'react';
import breamL from '../../../images/BreamLive.jpg'
import ReactPlayer from 'react-player'

function Bream() {
    return (
        <main className="content">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=HVXZYpJ5vlk&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <img className="baby" src={breamL}/>
            <p className="mdc-typography--body">Potrafię ważyć aż do sześciu kilogramów. To więcej niż krzesło na którym
                siedzisz. Żyję około dwunastu lat. To całkiem długo jak na rybkę, prawda?</p>
        </main>
    );
}

export default Bream;
