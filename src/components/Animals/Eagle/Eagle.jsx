import React from 'react';
import eagleW from '../../../images/golden-eagle-web.jpg'

function Eagle() {
    return (
        <main className="content">
            <img className="baby" src={eagleW}/>
            <p className="mdc-typography--body">Potrafię latać z prędkością stu sześćdziesięciu kilometrów na godzinę.
                To szybciej niż Twoje auto pędzi po autostradzie. Niesamowite, prawda?</p>
        </main>
    );
}

export default Eagle;
