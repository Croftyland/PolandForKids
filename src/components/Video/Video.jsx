import React  from 'react';
import { Player } from 'video-react';


export default class Video extends React.Component{
    render() {
        return (
            <Player
                playsInline
                poster="/assets/poster.png"
                src="https://www.youtube.com/embed/Ro51SuLyh8A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            />
        );
    }
};
