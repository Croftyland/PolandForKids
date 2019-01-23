import React from 'react';
import compare from '../../../images/compare.jpg'

function Ruler() {
    return (
        <main className="content">
            <img className="compare" src={compare}/>
            <p className="mdc-typography--body">To ja, a obok mnie człowiek, taki jak Twoja Pani w przedszkolu. Jestem dużo większy, prawda?</p>
        </main>
    );
}

export default Ruler;