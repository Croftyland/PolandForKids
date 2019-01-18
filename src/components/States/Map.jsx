import React from 'react';
import Bream from '../Animals/Bream'
import Seal from "../Animals/Seal";
import Aurochs from "../Animals/Aurochs";
import Deer from "../Animals/Deer";
import Bear from "../Animals/Bear";
import Fox from "../Animals/Fox";
import Eagle from "../Animals/Eagle";

import map from "../../images/map.jpg";

export default class Map extends React.Component {


    render() {
        return (

            <div className="Welcome">
                <header className="Welcome-header">
                    <img src={map} className="map" alt="map"/>
                    <Bream/>
                    <Seal/>
                    <Aurochs/>
                    <Deer/>
                    <Bear/>
                    <Fox/>
                    <Eagle/>
                </header>
            </div>
        );

    }
}