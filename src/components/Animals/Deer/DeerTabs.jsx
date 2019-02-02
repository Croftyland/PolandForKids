import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Deer from "./Deer"
import Cartoon from "./Cartoon"
import Tape from "./Tape"

import { Link, Route, Switch,BrowserRouter } from "react-router-dom";

import deer from "../../../images/deer.png";
import book from "../../../images/books.jpg";
import cinema from "../../../images/cinema.jpg";

import TabDeer1 from '../../Video/TabDeer1'
import TabDeer2 from '../../Video/TabDeer2'
import TabDeer3 from '../../Video/TabDeer3'

export default class DeerTabs extends React.Component {
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
            case `/deer`:
                this.setActiveTab("1")
                break;
            case `/cartoon`:
                this.setActiveTab("2")
                break;
            case `/tape`:
                this.setActiveTab("3")
                break;

        }
    }
    render() {
        const { activeTab } = this.state
        return (
            <BrowserRouter>
                <div className="mt-5">
                    <TabDeer1/>
                    <TabDeer2/>
                    <TabDeer3/>
                    <Nav tabs>
                        <NavItem>
                            <Link to={`/deer`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    tag="div"

                                >
                                    <img className="rulerToggle" src={deer}/>
                                </NavLink>
                            </Link>

                        </NavItem>
                        <NavItem>
                            <Link to={`/cartoon`}>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                    tag="div"
                                >
                                    <img className="rulerToggle" src={book}/>
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={`/tape`}>

                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                    tag="div"
                                >
                                    <img className="cinemaToggle" src={cinema}/>
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
                                            path='/deer'
                                            render={(props) => <Deer {...props}  />}
                                        />
                                        <Route
                                            path='/cartoon'
                                            render={(props) => <Cartoon {...props}  />}
                                        />
                                        <Route
                                            path='/tape'
                                            render={(props) => <Tape {...props}  />}
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
