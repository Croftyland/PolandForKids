import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TV from "./TV"
import Flag from "./Flag"
import Eagle from "./Eagle"

import { Link, Route, Switch,BrowserRouter } from "react-router-dom";

import tv from "../../../images/tv.jpg";
import flag from "../../../images/flag_splash_poland.jpg";
import eagle from "../../../images/eagle.png";



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
            case `/tv`:
                this.setActiveTab("1")
                break;
            case `/flag`:
                this.setActiveTab("2")
                break;
            case `/eagle`:
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
                            <Link to={`/tv`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    tag="div"

                                >
                                    <img className="rulerToggle" src={tv}/>
                                </NavLink>
                            </Link>

                        </NavItem>
                        <NavItem>
                            <Link to={`/flag`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                    tag="div"
                                >
                                    <img className="rulerToggle" src={flag}/>
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/eagle`}>

                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                    tag="div"
                                >
                                    <img className="eagleToggle" src={eagle}/>
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
                                            path='/tv'
                                            render={(props) => <TV {...props}  />}
                                        />
                                        <Route
                                            path='/flag'
                                            render={(props) => <Flag {...props}  />}
                                        />
                                        <Route
                                            path='/eagle'
                                            render={(props) => <Eagle {...props}  />}
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
