import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Swim from "./Swim"
import Elf from "./Elf"
import Bream from "./Bream"

import TabBream1 from '../../Video/TabBream1'
import TabBream2 from '../../Video/TabBream2'
import TabBream3 from '../../Video/TabBream3'

import { Link, Route, Switch,BrowserRouter } from "react-router-dom";

import swim from "../../../images/swimmers.jpg";
import elf from "../../../images/elf.png";
import bream from "../../../images/bream.png";



export default class BreamsTab extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: ''
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    setActiveTab = (tab) => {
        this.setState({
            activeTab: tab
        });
    }

    componentDidMount() {
        const { location } = this.props
        switch (location) {
            case `/swim`:
                this.setActiveTab("1")
                break;
            case `/elf`:
                this.setActiveTab("2")
                break;
            case `/bream`:
                this.setActiveTab("3")
                break;

        }
    }
    render() {
        const { activeTab } = this.state
        return (
            <BrowserRouter>
                <div className="mt-5">
                    <TabBream1/>
                    <TabBream2/>
                    <TabBream3/>
                    <Nav tabs>
                        <NavItem>
                            <Link to={`/swim`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    tag="div"

                                >
                                    <img className="rulerToggle" src={swim}/>
                                </NavLink>
                            </Link>

                        </NavItem>
                        <NavItem>
                            <Link to={`/elf`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                    tag="div"
                                >
                                    <img className="rulerToggle" src={elf}/>
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/bream`}>

                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                    tag="div"
                                >
                                    <img className="breamToggle" src={bream}/>
                                </NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        {/* <Switch> */}
                        <TabPane tabId={activeTab}>
                            <Row>
                                <Col sm="12">
                                    <Switch>
                                        <Route
                                            path='/swim'
                                            render={(props) => <Swim{...props}  />}
                                        />
                                        <Route
                                            path='/elf'
                                            render={(props) => <Elf {...props}  />}
                                        />
                                        <Route
                                            path='/bream'
                                            render={(props) => <Bream {...props}  />}
                                        />
                                    </Switch>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>

                </div>
            </BrowserRouter>
        );
    }
}
