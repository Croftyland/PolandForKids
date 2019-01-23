import React from 'react';
import bearL from '../../../images/bearLive.jpg'

function Bear() {
    return (
        <main className="content">
            <img className="baby" src={bearL}/>
            <p className="mdc-typography--body">Mogę żyć nawet pięćdziesiąt lat. Jestem wszystkożerny, to znaczy, że jem
                nasiona, grzyby, ślimaki, jajka, ryby, poluję na zwierzęta, a także lubię miód - tak jak Kubuś Puchatek.
                Znasz go?</p>
        </main>
    );
}

export default Bear;
