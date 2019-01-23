import React from 'react';
import browser from '../../../images/FirefoxB.png'

function Internet() {
    return (
        <main className="content">
            <img className="baby" src={browser}/>
            <p className="mdc-typography--body">Tak, otworzy się strona internetowa. Teraz będzie można oglądać bajki,
                grać, uczyć się i robić wiele innych rzeczy.</p>
        </main>
    );
}

export default Internet;
