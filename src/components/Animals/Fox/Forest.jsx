import React from 'react';
import foxL from '../../../images/foxLive.jpeg'

function Forest() {
    return (
        <main className="content">
            <img className="baby" src={foxL}/>
            <p className="mdc-typography--body">Lubię miejsca pokryte gęstą roślinnością, tam najlepiej kopie się nory.
                Mam piękne i ciepłe futro, jestem bardzo zwinna i szybka. Kliknij tutaj aby zobaczyć jak naprawdę
                wyglądam.</p>
        </main>
    );
}

export default Forest;
