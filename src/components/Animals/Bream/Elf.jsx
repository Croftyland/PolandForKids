import React from 'react';
import elfS from '../../../images/elfSinging.png'

function Elf() {
    return (
        <main className="content">
            <img className="baby" src={elfS}/>
            <p className="mdc-typography--body">Tak, to moja najlepsza sztuczka! Mimo, że jestem rybą potrafię zmieniać
                się w magiczne stworzenia. Puf! I jestem elfem.</p>
        </main>
    );
}

export default Elf;
