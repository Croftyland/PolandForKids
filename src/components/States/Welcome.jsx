import React from 'react';
import {Grid} from 'semantic-ui-react';
import logo from "../../Photo/polishLogo.jpg";


export default class Welcome extends React.Component {
    render() {
        return (
            <Grid>
                <div className="Welcome">
                    <header className="Welcome-header">
                        <p>
                            Mały Polak w sieci
                        </p>
                        <img src={logo} className="Welcome-logo" alt="logo"/>
                    </header>
                </div>
            </Grid>
        );
    }
}