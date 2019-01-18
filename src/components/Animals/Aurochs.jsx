import React from 'react';
import Box from './Box'
import {Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Nav, NavItem,
    NavLink as TabNavLink,} from 'reactstrap';

import { NavLink } from "react-router-dom";

import aurochs from "../../images/aurochs.png";
import ruler   from "../../images/ruler.jpg"


class Aurochs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            show: true
        };

        this.toggle = this.toggle.bind(this);
        this.toggleDiv1 = this.toggleDiv1.bind(this)
        this.toggleDiv2 = this.toggleDiv2.bind(this)
        this.toggleDiv3 = this.toggleDiv3.bind(this)
    }


    toggleDiv1 = () => {
        const {show} = this.state;
        this.setState({show: !show})
    }
    toggleDiv2 = () => {
        const {show} = this.state;
        this.setState({show: !show})
    }
    toggleDiv3 = () => {
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
                            <div className="mt-5">
                                <Nav tabs>
                                    <NavItem >
                                        <TabNavLink tag="div">
                                            <NavLink
                                                to={`/ruler`}
                                                className="movie-tab rulerToggle"
                                            >
                                                src={ruler}
                                            </NavLink>

                                        </TabNavLink>
                                    </NavItem>
                                    <NavItem >
                                        <TabNavLink tag="div">
                                            <NavLink
                                                to={`/aurochs`}
                                                className="movie-tab aurochsToggle"
                                            >
                                                src={aurochs}
                                            </NavLink>

                                        </TabNavLink>
                                    </NavItem>
                                    <NavItem >
                                        <TabNavLink tag="div">
                                            <NavLink
                                                to={`/movie`}
                                                className="movie-tab movieToggle"
                                            >
                                                src={aurochs}
                                            </NavLink>

                                        </TabNavLink>
                                    </NavItem>
                                </Nav>

                            </div>
                            {/*<button onClick={ this.toggleDiv1 }><img className="rulerToggle" src={ruler}/></button>*/}
                            {/*<button onClick={ this.toggleDiv2 }><img className="aurochsToggle" src={aurochs}/></button>*/}
                            {/*<button onClick={ this.toggleDiv3 }><img className="movieToggle" src={aurochs}/></button>*/}
                            {/*<br /><br />*/}
                            {/*{ this.state.show && <Box /> }*/}
                            {/*{ this.state.show && <Box /> }*/}
                            {/*{ this.state.show && <Box /> }*/}
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