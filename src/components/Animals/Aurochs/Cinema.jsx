import React from 'react';
import ReactPlayer from 'react-player'

function Cinema() {
    return (
        <ReactPlayer
            url='https://www.youtube.com/watch?v=Yfh5pq9Dp-E&fbclid=IwAR3ibdAZS9j6f2vkWXMd21BsvO92ALgIplquZYHf4Tkke82WJASM0TrfNuU&app=desktop'
            playing
            className="cinemaPlay"
            width='100%'
            height='474px;'
        />)
}

export default Cinema;
