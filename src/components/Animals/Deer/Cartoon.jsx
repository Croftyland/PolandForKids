import React from 'react';
import bambi from '../../../images/Bambi.jpg';
import ReactPlayer from 'react-player'

function Cartoon() {
    return (
        <main className="content">
            <img className="baby" src={bambi}/>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=FH7K0UEBhsI&feature=youtu.be'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <p className="mdc-typography--body">Znasz bajkę o Bambim? Jest trochę stara ale może o niej słyszałeś?
                Opowiada o przygodach małego jelonka o imieniu Bambi. Oto jak wyglądał.</p>
        </main>
    );
}

export default Cartoon;