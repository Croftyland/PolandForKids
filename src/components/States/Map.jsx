import React from 'react';
import {Grid} from 'semantic-ui-react';
import map from "../../Photo/map.jpg";
import bream from "../../Photo/bream.png"
import seal from "../../Photo/seal.png"
import aurochs from "../../Photo/aurochs.png"
import deer from "../../Photo/deer.png"
import bear from "../../Photo/bear.png"
import fox from "../../Photo/fox.png"
import eagle from "../../Photo/eagle.png"


export default class Map extends React.Component {
    render() {
        return (
            <Grid>
                <div className="Welcome">
                    <header className="Welcome-header">
                        <img src={map} className="map" alt="map"/>
                        <img src={bream} className="bream" alt="bream"/>
                        <img src={seal} className="seal" alt="seal"/>
                        <img src={aurochs} className="aurochs" alt="aurochs"/>
                        <img src={deer} className="deer" alt="deer"/>
                        <img src={bear} className="bear" alt="bear"/>
                        <img src={fox} className="fox" alt="fox"/>
                        <img src={eagle} className="eagle" alt="eagle"/>
                    </header>
                </div>
            </Grid>
        );
    }
    }