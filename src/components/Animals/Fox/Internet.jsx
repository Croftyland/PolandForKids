import React from 'react';
import browser from '../../../images/FirefoxB.png'
import ReactPlayer from 'react-player'

function Internet() {
    return (
        <main className="content">
            <img className="baby" src={browser}/>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=-y2nL2DmW5Y&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <p className="mdc-typography--body">Tak, otworzy się strona internetowa. Teraz będzie można oglądać bajki,
                grać, uczyć się i robić wiele innych rzeczy.</p>
        </main>
    );
}

export default Internet;
