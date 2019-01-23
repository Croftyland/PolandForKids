import React from 'react';
import baby from '../../../images/baby.jpg'

function Auroch() {
    return (
        <main className="content">
            <img className="baby" src={baby}/>
            <p className="mdc-typography--body">Uroczy, zgadza się? Zastanów się teraz czy kogoś Ci tutaj nie
                przypominam. Jak myślisz? Powiedz na głos!</p>
        </main>
    );
}

export default Auroch;
