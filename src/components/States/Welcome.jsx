import React from 'react';

import logo from "../../images/polishLogo.jpg";


export default class Welcome extends React.Component {
    render() {
        return (

                <div className="Welcome">
                    <header className="Welcome-header">
                        <p>
                            Mały Polak w sieci
                        </p>
                        <img src={logo} className="Welcome-logo" alt="logo"/>
                    </header>
                </div>

        );
    }
}