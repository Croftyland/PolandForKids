import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause} = controls



export default class VideoDeer extends Component {
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player">
                        <Player src="https://www.youtube.com/watch?v=8Mf8K5WrqJ8&feature=youtu.be" />
                    </div>
                    <div>
                        <PlayPause className="media-controls" />
                    </div>
                </div>
            </Media>
        )
    }
}

