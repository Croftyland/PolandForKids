import React from 'react';
import elfS from '../../../images/elfSinging.png'
import ReactPlayer from 'react-player'

function Elf() {
    return (
        <main className="content">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=PPRQb_Ot9Vw&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <img className="baby" src={elfS}/>
            <p className="mdc-typography--body">Tak, to moja najlepsza sztuczka! Mimo, że jestem rybą potrafię zmieniać
                się w magiczne stworzenia. Puf! I jestem elfem.</p>
        </main>
    );
}

export default Elf;
