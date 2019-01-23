import React from 'react';
import Breams from '../Animals/Bream/Breams'
import Seals from "../Animals/Seal";
import Aurochs from "../Animals/Aurochs/Aurochs";
import Deers from "../Animals/Deer/Deers";
import Bears from "../Animals/Bear/Bears";
import Foxes from "../Animals/Fox/Foxes";
import Eagles from "../Animals/Eagle/Eagles";

import map from "../../images/map.jpg";

export default class Map extends React.Component {


    render() {
        return (

            <div className="Welcome">
                <header className="Welcome-header">
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