import React from 'react';
import bambi from '../../../images/Bambi.jpg'

function Cartoon() {
    return (
        <main className="content">
            <img className="baby" src={bambi}/>
            <p className="mdc-typography--body">Znasz bajkę o Bambim? Jest trochę stara ale może o niej słyszałeś?
                Opowiada o przygodach małego jelonka o imieniu Bambi. Oto jak wyglądał.</p>
        </main>
    );
}

export default Cartoon;