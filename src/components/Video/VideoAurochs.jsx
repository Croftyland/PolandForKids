import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause} = controls



export default class VideoAurochs extends Component {git
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player" style={{display:'none'}}>
                        <Player src="https://www.youtube.com/embed/1PDooBDr2oI" />
                    </div>
                    <div>
                        <PlayPause className="media-controls" style={{position: 'absolute', left: '54px', top: '146px'}} />
                    </div>
                </div>
            </Media>
        )
    }
}

