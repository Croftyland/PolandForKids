import React from 'react';
import ReactPlayer from 'react-player'

function TV() {
    return (
        <ReactPlayer
            url='https://www.youtube.com/watch?v=uaI7ON9cAAw&fbclid=IwAR3KuwOEzuFiPrwTu_PtaaE0UjPWCmkweh7pKkuP_zsDQQ9HPhWSsSeYdXE&app=desktop'
            playing
            className="cinemaPlay"
            width='100%'
            height='474px;'
        />)
}

export default TV;