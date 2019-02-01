import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause} = controls



export default class App extends Component {
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player">
                        <Player src="http://www.youtube.com/embed/h3YVKTxTOgU" />
                    </div>
                    <div>
                        <PlayPause className="media-controls" />
                    </div>
                </div>
            </Media>
        )
    }
}

