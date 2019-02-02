import React from 'react';
import baby from '../../../images/baby.jpg'
import ReactPlayer from 'react-player'

function Auroch() {
    return (
        <main className="content">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=ckhTWy9tKGQ&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <img className="baby" src={baby}/>
            <p className="mdc-typography--body">Uroczy, zgadza się? Zastanów się teraz czy kogoś Ci tutaj nie
                przypominam. Jak myślisz? Powiedz na głos!</p>
        </main>
    );
}

export default Auroch;
