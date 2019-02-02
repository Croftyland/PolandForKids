import React, {Component} from 'react'
import ReactPlayer from 'react-player'


export default class Video extends Component {
    render() {
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=plug6OIrxRM'
                    className='react-player'
                    playing
                    width='100%'
                    height='100%'
                />
            </div>

        )
    }
}
