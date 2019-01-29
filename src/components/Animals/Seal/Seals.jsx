import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import seal from "../../../images/seal.png";
import SealsTab from "../Seal/SealsTab";

import ReactPlayer from 'react-player'


class Seals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <img src={seal} className="seal" alt="seal" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Witam</ModalHeader>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=pUg3FMyoq4E&feature=youtu.be'
                        style={{ display:'none' }}
                        width='0%'
                        height='0%'
                        playing/>
                    <ModalBody>
                        <div>
                            <br/>
                            <SealsTab/>
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

export default Seals;