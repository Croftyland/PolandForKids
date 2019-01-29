import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import deer from "../../../images/deer.png";
import DeerTabs from "../Deer/DeerTabs";
import ReactPlayer from 'react-player'

class Deers extends React.Component {
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
                <img src={deer} className="deer" alt="deer" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=tx4QHEBYsO8&feature=youtu.be'
                        style={{ display:'none' }}
                        width='0%'
                        height='0%'
                        playing/>
                    <ModalHeader toggle={this.toggle}>Witam</ModalHeader>
                    <ModalBody>
                        <div>
                            <br/>
                            <DeerTabs/>
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

export default Deers;