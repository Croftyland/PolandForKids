import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause} = controls



export default class VideoBream extends Component {
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player" style={{display:'none'}}>
                        <Player src="https://www.youtube.com/embed/ix1W_YV5cXM" />
                    </div>
                    <div>
                        <PlayPause className="media-controls" style={{position: 'absolute', left: '54px', top: '287px'}} />
                    </div>
                </div>
            </Media>
        )
    }
}

