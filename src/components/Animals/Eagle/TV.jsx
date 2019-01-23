import React from 'react';
import ReactPlayer from 'react-player'

function TV() {
    return (
        <ReactPlayer
            url='https://www.youtube.com/watch?v=xOKG87u4avA&fbclid=IwAR3LBkBy5k-vv2XkoW6hmfX842YY5X99Q1ZVDGiPd6PRu_06cJfRQTQfB8g&app=desktop'
            playing
            className="cinemaPlay"
            width='100%'
            height='474px;'
        />)
}

export default TV;
