import React from 'react';
import ReactPlayer from 'react-player'

function Swim() {
    return (
        <ReactPlayer
            url='https://www.youtube.com/watch?v=xskODLPuXVI&fbclid=IwAR18migPR05Jwt2MUOu8c6aUakrtO5lroeq88pEnxLHXRQH4aKfgyyZJ_vk&app=desktop'
            playing
            className="cinemaPlay"
            width='100%'
            height='474px;'
        />)
}

export default Swim;