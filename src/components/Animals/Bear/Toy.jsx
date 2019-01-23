import React from 'react';
import teddy from '../../../images/TeddyBear.jpg'

function Toy() {
    return (
        <main className="content">
            <img className="baby" src={teddy}/>
            <p className="mdc-typography--body">Taaak, mowa tu o misiu przytulance! Masz może podobną?</p>
        </main>
    );
}

export default Toy;
