import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import bear from "../../../images/bear.png";
import BearTabs from "../Bear/BearTab";

import ReactPlayer from 'react-player'

class Bears extends React.Component {
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
                <img src={bear} className="bear" alt="bear" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Witam</ModalHeader>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=8hdv_na-_Ig&feature=youtu.be'
                        style={{ display:'none' }}
                        width='0%'
                        height='0%'
                        playing/>
                    <ModalBody>
                        <div>
                            <br/>
                            <BearTabs/>
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

export default Bears;