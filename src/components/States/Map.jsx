import React from 'react';
import Breams from '../Animals/Bream/Breams'
import Seals from "../Animals/Seal/Seals";
import Aurochs from "../Animals/Aurochs/Aurochs";
import Deers from "../Animals/Deer/Deers";
import Bears from "../Animals/Bear/Bears";
import Foxes from "../Animals/Fox/Foxes";
import Eagles from "../Animals/Eagle/Eagles";
import ReactPlayer from 'react-player'

import map from "../../images/map.jpg";

export default class Map extends React.Component {


    render() {
        return (

            <div className="Welcome">
                <header className="Welcome-header">
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=x__eToraZ6s&feature=youtu.be'
                        style={{ display:'none' }}
                        width='0%'
                        height='0%'
                        playing/>
                    <img src={map} className="map" alt="map"/>
                    <Breams/>
                    <Seals/>
                    <Aurochs/>
                    <Deers/>
                    <Bears/>
                    <Foxes/>
                    <Eagles/>
                </header>
            </div>
        );

    }
}