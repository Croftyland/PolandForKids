import React from 'react';
import ReactPlayer from 'react-player'

function Tape() {
    return (
        <ReactPlayer
            url='https://www.youtube.com/watch?v=aLl3PCAm-ls&fbclid=IwAR3hHE1O0lGGnZx-PZR7S8uE2z9N2aSLveO55ETQzecvoF-FgezJDt4uYzM&app=desktop'
            playing
            className="cinemaPlay"
            width='100%'
            height='474px;'
        />)
}

export default Tape;