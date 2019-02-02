import React from 'react';
import compare from '../../../images/compare.jpg'
import ReactPlayer from 'react-player'

function Ruler() {
    return (
        <main className="content">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=tQhHQO4PcfA&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <img className="compare" src={compare}/>
            <p className="mdc-typography--body">To ja, a obok mnie człowiek, taki jak Twoja Pani w przedszkolu. Jestem dużo większy, prawda?</p>
        </main>
    );
}

export default Ruler;