import React from 'react';
import {Grid} from 'semantic-ui-react';
import logo from "../../polishLogo.jpg";


export default class Welcome extends React.Component {
    render() {
        return (
            <Grid>
                <div className="Main">
                    <header className="Main-header">
                        <p>
                            Mały Polak w sieci
                        </p>
                        <img src={logo} className="Main-logo" alt="logo"/>
                    </header>
                </div>
            </Grid>
        );
    }
}