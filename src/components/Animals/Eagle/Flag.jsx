import React from 'react';
import flagEagle from '../../../images/flagEagle.png'
import ReactPlayer from 'react-player'

function Flag() {
    return (
        <main className="content">
            <img className="baby" src={flagEagle}/>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=TOuIRZrGnHo'
                style={{ display:'none' }}
                width='0%'
                height='0%'
                playing/>
            <p className="mdc-typography--body">Taak, jestem symbolem Polski i występuje na jej godle.</p>
        </main>
    );
}

export default Flag;
