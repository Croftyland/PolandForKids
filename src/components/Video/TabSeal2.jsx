import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause} = controls



export default class TabSeal2 extends Component {
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player" style={{display:'none'}}>
                        <Player src="https://www.youtube.com/watch?v=v4TdnzPLvsI&feature=youtu.be" />
                    </div>
                    <div>
                        <PlayPause className="media-controls" style={{position: 'absolute',left: '261px',top: '30px'}} />
                    </div>
                </div>
            </Media>
        )
    }
}