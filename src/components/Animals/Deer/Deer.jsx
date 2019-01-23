import React from 'react';
import deerL from '../../../images/deerLive.jpg'

function Deer() {
    return (
        <main className="content">
            <img className="baby" src={deerL}/>
            <p className="mdc-typography--body">Mogę ważyć aż dwieście kilogramów! To więcej niż Ty i dziesięcioro
                Twoich kolegów razem wziętych! </p>
        </main>
    );
}

export default Deer;