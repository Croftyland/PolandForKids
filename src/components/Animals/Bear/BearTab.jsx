import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Toy from "./Toy"
import Tel from "./Tel"
import Bear from "./Bear"

import TabBear1 from '../../Video/TabBear1'
import TabBear2 from '../../Video/TabBear2'
import TabBear3 from '../../Video/TabBear3'

import { Link, Route, Switch,BrowserRouter } from "react-router-dom";

import toy from "../../../images/toysShelf.jpg";
import tel from "../../../images/tv.jpg";
import bear from "../../../images/bear.png";



export default class BearTabs extends React.Component {
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
            case `/toy`:
                this.setActiveTab("1")
                break;
            case `/tel`:
                this.setActiveTab("2")
                break;
            case `/bear`:
                this.setActiveTab("3")
                break;

        }
    }
    render() {
        const { activeTab } = this.state
        return (
            <BrowserRouter>
                <div className="mt-5">
                    <TabBear1/>
                    <TabBear2/>
                    <TabBear3/>
                    <Nav tabs>
                        <NavItem>
                            <Link to={`/toy`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    tag="div"

                                >
                                    <img className="rulerToggle" src={toy}/>
                                </NavLink>
                            </Link>

                        </NavItem>
                        <NavItem>
                            <Link to={`/tel`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                    tag="div"
                                >
                                    <img className="rulerToggle" src={tel}/>
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/bear`}>

                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                    tag="div"
                                >
                                    <img className="eagleToggle" src={bear}/>
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
                                            path='/toy'
                                            render={(props) => <Toy {...props}  />}
                                        />
                                        <Route
                                            path='/tel'
                                            render={(props) => <Tel {...props}  />}
                                        />
                                        <Route
                                            path='/bear'
                                            render={(props) => <Bear {...props}  />}
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
