import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import fox from "../../../images/fox.png";
import FoxesTabs from "../Fox/FoxTabs";
import ReactPlayer from 'react-player'

class Foxes extends React.Component {
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
                <img src={fox} className="fox" alt="fox" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Witam</ModalHeader>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=Kg4i0oYbOB0&feature=youtu.be'
                        style={{ display:'none' }}
                        width='0%'
                        height='0%'
                        playing/>
                    <ModalBody>
                        <div>
                            <br/>
                            <FoxesTabs/>
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

export default Foxes;