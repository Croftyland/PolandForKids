import React from 'react';
import Breams from '../Animals/Bream/Breams'
import VideoBream from "../Video/VideoBream"
import Seals from "../Animals/Seal/Seals";
import VideoSeal from "../Video/VideoSeal"
import Aurochs from "../Animals/Aurochs/Aurochs";
import VideoAurochs from "../Video/VideoAurochs"
import Deers from "../Animals/Deer/Deers";
import VideoDeer from "../Video/VideoDeer"
import Bears from "../Animals/Bear/Bears";
import VideoBear from "../Video/VideoBear"
import Foxes from "../Animals/Fox/Foxes";
import VideoFox from "../Video/VideoFox"
import Eagles from "../Animals/Eagle/Eagles";
import VideoEagle from "../Video/VideoEagle"

import map from "../../images/map.jpg";

export default class Map extends React.Component {


    render() {
        return (

            <div className="Welcome">
                <header className="Welcome-header">
                    <img src={map} className="map" alt="map"/>
                    <Breams/>
                    <VideoBream/>
                    <Seals/>
                    <VideoSeal/>
                    <Aurochs/>
                    <VideoAurochs/>
                    <Deers/>
                    <VideoDeer/>
                    <Bears/>
                    <VideoBear/>
                    <Foxes/>
                    <VideoFox/>
                    <Eagles/>
                    <VideoEagle/>
                </header>
            </div>
        );

    }
}