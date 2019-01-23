import React from 'react';
import breamL from '../../../images/BreamLive.jpg'

function Bream() {
    return (
        <main className="content">
            <img className="baby" src={breamL}/>
            <p className="mdc-typography--body">Potrafię ważyć aż do sześciu kilogramów. To więcej niż krzesło na którym
                siedzisz. Żyję około dwunastu lat. To całkiem długo jak na rybkę, prawda?</p>
        </main>
    );
}

export default Bream;
