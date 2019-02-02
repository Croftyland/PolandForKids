import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Ruler from "./Ruler"
import Cinema from "./Cinema"
import Auroch from "./Auroch"

import TabAuroch1 from '../../Video/TabAuroch1'
import TabAuroch2 from '../../Video/TabAuroch2'
import TabAuroch3 from '../../Video/TabAuroch3'

import { Link, Route, Switch,BrowserRouter } from "react-router-dom";

import ruler from "../../../images/ruler.jpg";
import aurochs from "../../../images/aurochs.png";
import cinema from "../../../images/cinema.jpg";



export default class AurochTab extends React.Component {
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
            case `/ruler`:
                this.setActiveTab("1")
                break;
            case `/auroch`:
                this.setActiveTab("2")
                break;
            case `/movie`:
                this.setActiveTab("3")
                break;

        }
    }
    render() {
        const { activeTab } = this.state
        return (
            <BrowserRouter>
            <div className="mt-5">
                <TabAuroch1/>
                <TabAuroch2/>
                <TabAuroch3/>
                <Nav tabs>
                    <NavItem>
                        <Link to={`/ruler`}>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                                tag="div"

                            >
                                <img className="rulerToggle" src={ruler}/>
                            </NavLink>
                        </Link>

                    </NavItem>
                    <NavItem>
                        <Link to={`/auroch`}>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                                tag="div"
                            >
                                <img className="rulerToggle" src={aurochs}/>
                            </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to={`/movie`}>

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
                                        path='/ruler'
                                        render={(props) => <Ruler {...props}  />}
                                    />
                                    <Route
                                        path='/auroch'
                                        render={(props) => <Auroch {...props}  />}
                                    />
                                    <Route
                                        path='/movie'
                                        render={(props) => <Cinema {...props}  />}
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



// import React from 'react';
//
// import {
//     Nav, NavItem,
//     NavLink
//
// } from 'reactstrap';
//
// import {  Link, BrowserRouter } from "react-router-dom";
//
// import ruler from "../../../images/ruler.jpg";
//  import aurochs from "../../../images/aurochs.png";
//
// function AurochTab() {
//     return (
//         <BrowserRouter>
//         <div className="mt-5">
//             <Nav tabs>
//                 <NavItem >
//                     <NavLink>
//                         <Link
//                             to={`/ruler`}
//
//                         >
//                             <img className="rulerToggle" src={ruler}/>
//                         </Link>
//
//                     </NavLink>
//                 </NavItem>
//                 <NavItem >
//                     <NavLink>
//                         <Link
//                             to={`/auroch`}
//
//                         >
//                             <img className="aurochsToggle" src={aurochs}/>
//                         </Link>
//
//                     </NavLink>
//                 </NavItem>
//                 <NavItem >
//                     <NavLink >
//                         <Link
//                             to={`/movie`}
//
//                         >
//                             <img className="movieToggle" src={aurochs}/>
//                         </Link>
//
//                     </NavLink>
//                 </NavItem>
//             </Nav>
//
//         </div>
//         </BrowserRouter>
//     );
// }
//
// export default AurochTab;
//
