import React from 'react';
import deerL from '../../../images/deerLive.jpg'
import ReactPlayer from 'react-player'

function Deer() {
    return (
        <main className="content">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=uWoJD7kdw2Q&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <img className="baby" src={deerL}/>
            <p className="mdc-typography--body">Mogę ważyć aż dwieście kilogramów! To więcej niż Ty i dziesięcioro
                Twoich kolegów razem wziętych! </p>
        </main>
    );
}

export default Deer;