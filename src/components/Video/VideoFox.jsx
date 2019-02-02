import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause} = controls



export default class VideoFox extends Component {
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player">
                        <Player src="https://www.youtube.com/watch?v=dCEVFSkvAV0&feature=youtu.be" />
                    </div>
                    <div>
                        <PlayPause className="media-controls" />
                    </div>
                </div>
            </Media>
        )
    }
}

