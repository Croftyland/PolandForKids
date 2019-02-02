import React from 'react';
import eagleW from '../../../images/golden-eagle-web.jpg'
import ReactPlayer from 'react-player'

function Eagle() {
    return (
        <main className="content">
            <img className="baby" src={eagleW}/>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=5q8NB4_rTOI&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <p className="mdc-typography--body">Potrafię latać z prędkością stu sześćdziesięciu kilometrów na godzinę.
                To szybciej niż Twoje auto pędzi po autostradzie. Niesamowite, prawda?</p>
        </main>
    );
}

export default Eagle;
