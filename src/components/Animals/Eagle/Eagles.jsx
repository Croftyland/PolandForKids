import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import eagle from "../../../images/eagle.png";
import EagleTabs from "../Eagle/EagleTabs";
import ReactPlayer from 'react-player'

class Eagles extends React.Component {
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
                <img src={eagle} className="eagle" alt="eagle" onClick={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=y2DP928_U5g&feature=youtu.be'
                        style={{ display:'none' }}
                        width='0%'
                        height='0%'
                        playing/>
                    <ModalHeader toggle={this.toggle}>Witam</ModalHeader>
                    <ModalBody>
                        <div>
                            <br/>
                            <EagleTabs/>
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

export default Eagles;