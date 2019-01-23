import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Forest from "./Forest"
import Internet from "./Internet"
import Melody from "./Melody"

import { Link, Route, Switch,BrowserRouter } from "react-router-dom";

import forest from "../../../images/forest.jpg";
import internet from "../../../images/logo.png";
import melody from "../../../images/melody.jpg";



export default class EagleTabs extends React.Component {
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
            case `/melody`:
                this.setActiveTab("1")
                break;
            case `/forest`:
                this.setActiveTab("2")
                break;
            case `/internet`:
                this.setActiveTab("3")
                break;

        }
    }
    render() {
        const { activeTab } = this.state
        return (
            <BrowserRouter>
                <div className="mt-5">
                    <Nav tabs>
                        <NavItem>
                            <Link to={`/melody`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    tag="div"

                                >
                                    <img className="rulerToggle" src={melody}/>
                                </NavLink>
                            </Link>

                        </NavItem>
                        <NavItem>
                            <Link to={`/forest`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                    tag="div"
                                >
                                    <img className="rulerToggle" src={forest}/>
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/internet`}>

                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                    tag="div"
                                >
                                    <img className="eagleToggle" src={internet}/>
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
                                            path='/melody'
                                            render={(props) => <Melody {...props}  />}
                                        />
                                        <Route
                                            path='/forest'
                                            render={(props) => <Forest {...props}  />}
                                        />
                                        <Route
                                            path='/internet'
                                            render={(props) => <Internet {...props}  />}
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
