import React, {Component} from 'react'
import ReactPlayer from 'react-player'


export default class VideoAurochs3 extends Component {
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
                    url='https://www.youtube.com/watch?v=1PDooBDr2oI'
                    playing={this.state.playing}
                    style={{display:'none'}}
                    onPlay={() => this.setState({ playing: true })}
                    onPause={() => this.setState({ playing: false })}
                />
                <button className="media-controls" type="button"  style={{position: 'absolute', left: '54px', top: '135px'}}  onClick={() => this.setState({ playing: true })}>Play</button>
            </div>
        )
    }
}