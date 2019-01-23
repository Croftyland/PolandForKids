import React from 'react';
import ReactPlayer from 'react-player'

function Video() {
    return (
        <ReactPlayer
            url='https://www.youtube.com/watch?v=CfxNBdbDUz0&fbclid=IwAR0d6cyXDYGPsZmCzxOn3hwzRiiQW8V5dHr5YGixLTxMTDJUrk3qUDRSfso&app=desktop'
            playing
            className="cinemaPlay"
            width='100%'
            height='474px;'
        />)
}

export default Video;