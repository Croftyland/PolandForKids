import React from 'react'
import logo from '../polishLogo.jpg';


class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <header className="App-header">
                    <p>
                        Mały Polak w sieci
                    </p>
                    <img src={logo} className="App-logo" alt="logo" />

                    <button type="button" className="btn btn-outline-danger btn-lg">
                        Zacznij swoją podróż
                    </button>
                </header>
            </div>
        );
    }
}