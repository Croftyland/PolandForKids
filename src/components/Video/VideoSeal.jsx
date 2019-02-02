import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause} = controls



export default class VideoSeal extends Component {
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player">
                        <Player src="https://www.youtube.com/watch?v=Gv-URJicdjo&feature=youtu.be" />
                    </div>
                    <div>
                        <PlayPause className="media-controls" />
                    </div>
                </div>
            </Media>
        )
    }
}