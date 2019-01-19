import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';


import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";

import aurochs from "../../../images/aurochs.png";

import AurochTabs from "./AurochTabs";
import Auroch from "./Auroch";
import Ruler from "./Ruler";
import Cinema from "./Cinema";


class Aurochs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            show: true
        };

        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({
            modal: !this.state.modal,
            fadeIn: !this.state.fadeIn
        });
    }

    render() {
        return (
            <div>
                <img src={aurochs} className="aurochs" alt="aurochs" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <div>
                            <br/>
                            <AurochTabs/>
                            <Router>

                                <Switch>

                                        <Route path="/auroch" component={Auroch}/>
                                        <Route path="/ruler" component={Ruler}/>
                                        <Route path="/cinema" component={Cinema}/>

                                </Switch>

                            </Router>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>
                            Wyjść</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Aurochs;


