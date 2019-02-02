import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';


import aurochs from "../../../images/aurochs.png";

import AurochTabs from "./AurochTabs";


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
                    <ModalHeader toggle={this.toggle}>Witam</ModalHeader>

                    <ModalBody>
                        <div>
                            <br/>
                            <AurochTabs/>
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


