import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause} = controls



export default class VideoFox extends Component {
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player" style={{display:'none'}}>
                        <Player src="https://www.youtube.com/embed/dCEVFSkvAV0" />
                    </div>
                    <div>
                        <PlayPause className="media-controls" style={{position: 'absolute', left: '54px', top: '579px'}} />
                    </div>
                </div>
            </Media>
        )
    }
}

