import React from 'react';
import mapB from '../../../images/mapBig.jpg'
import ReactPlayer from 'react-player'

function Boat() {
    return (
        <main className="content">
            <img className="baby" src={mapB}/>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=z_DadJbwejY'
                width='0%'
                height='0%'
                playing/>
            <p className="mdc-typography--body">Zamieszkuję zarówno wybrzeża Atlantyku, jak i Pacyfiku. Możesz mnie
                znaleźć w Portugalii, Kanadzie czy Chinach. Pewnie wiesz o tym, że mieszkam także w Twoim kraju. Możesz
                się na mnie natknąć, również w wodach Bałtyku.</p>
        </main>
    );
}

export default Boat;
