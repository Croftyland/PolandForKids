import React, {Component} from 'react'
import ReactPlayer from 'react-player'


export default class VideoDeer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            playing: false
        }
    }
    render () {
        return (
            <div>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=Gv-URJicdjo&feature=youtu.be'
                    playing={this.state.playing}
                    style={{display:'none'}}
                    onPlay={() => this.setState({ playing: true })}
                    onPause={() => this.setState({ playing: false })}
                />
                <button type="button"  className="media-controls" style={{position: 'absolute', left: '54px', top: '432px'}} onClick={() => this.setState({ playing: true })}>Play</button>
            </div>
        )
    }
}