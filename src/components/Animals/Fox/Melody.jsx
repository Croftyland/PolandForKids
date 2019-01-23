import React from 'react';
import ReactPlayer from 'react-player'

function Melody() {
    return (
        <ReactPlayer
            url='https://www.youtube.com/watch?v=ct_4if6byN4'
            playing
            className="cinemaPlay"
            width='100%'
            height='474px;'
        />)
}

export default Melody;