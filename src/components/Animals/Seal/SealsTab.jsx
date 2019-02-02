import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Video from "./Video"
import Boat from "./Boat"
import Seal from "./Seal"

import { Link, Route, Switch,BrowserRouter } from "react-router-dom";

import seals from "../../../images/seals.jpg";
import boat from "../../../images/yaght.jpg";
import seal from "../../../images/seal.png";

import TabSeal1 from '../../Video/TabSeal1'
import TabSeal2 from '../../Video/TabSeal2'
import TabSeal3 from '../../Video/TabSeal3'

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
            case `/video`:
                this.setActiveTab("1")
                break;
            case `/boat`:
                this.setActiveTab("2")
                break;
            case `/seal`:
                this.setActiveTab("3")
                break;

        }
    }
    render() {
        const { activeTab } = this.state
        return (
            <BrowserRouter>
                <div className="mt-5">
                    <TabSeal1/>
                    <TabSeal2/>
                    <TabSeal3/>
                    <Nav tabs>
                        <NavItem>
                            <Link to={`/video`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    tag="div"

                                >
                                    <img className="rulerToggle" src={seals}/>
                                </NavLink>
                            </Link>

                        </NavItem>
                        <NavItem>
                            <Link to={`/boat`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                    tag="div"
                                >
                                    <img className="rulerToggle" src={boat}/>
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/seal`}>

                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                    tag="div"
                                >
                                    <img className="eagleToggle" src={seal}/>
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
                                            path='/video'
                                            render={(props) => <Video {...props}  />}
                                        />
                                        <Route
                                            path='/boat'
                                            render={(props) => <Boat {...props}  />}
                                        />
                                        <Route
                                            path='/seal'
                                            render={(props) => <Seal {...props}  />}
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
