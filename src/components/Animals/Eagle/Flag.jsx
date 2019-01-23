import React from 'react';
import flagEagle from '../../../images/flagEagle.png'

function Flag() {
    return (
        <main className="content">
            <img className="baby" src={flagEagle}/>
            <p className="mdc-typography--body">Orzeł pojawia się w wielu miejscach. Czy przypomina Ci się może jakiś z
                takich przedmiotów, na których możesz mnie zobaczyć? Użyj flagi Polski jako wskazówki. Kliknij tutaj aby
                przekonać się czy masz rację!</p>
        </main>
    );
}

export default Flag;
