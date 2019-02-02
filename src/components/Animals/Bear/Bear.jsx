import React from 'react';
import bearL from '../../../images/bearLive.jpg'
import ReactPlayer from 'react-player'

function Bear() {
    return (
        <main className="content">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=CK4O44a33T0&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <img className="baby" src={bearL}/>
            <p className="mdc-typography--body">Mogę żyć nawet pięćdziesiąt lat. Jestem wszystkożerny, to znaczy, że jem
                nasiona, grzyby, ślimaki, jajka, ryby, poluję na zwierzęta, a także lubię miód - tak jak Kubuś Puchatek.
                Znasz go?</p>
        </main>
    );
}

export default Bear;
