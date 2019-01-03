import React from 'react';
import Box from './Box'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import aurochs from "../../images/aurochs.png";


class Aurochs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            show: true
        };

        this.toggle = this.toggle.bind(this);
        this.toggleDiv = this.toggleDiv.bind(this)
    }


    toggleDiv = () => {
        const {show} = this.state;
        this.setState({show: !show})
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
                            <br />
                            <button onClick={ this.toggleDiv }><img src={aurochs}/></button>
                            <br /><br />
                            { this.state.show && <Box /> }
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