import React from 'react';

import {
    Nav, NavItem,
    NavLink as TabNavLink,

} from 'reactstrap';


import { BrowserRouter as NavLink } from "react-router-dom";

import ruler from "../../../images/ruler.jpg";
 import aurochs from "../../../images/aurochs.png";

function AurochTab() {
    return (
        <div className="mt-5">
            <Nav tabs>
                <NavItem >
                    <TabNavLink>
                        <NavLink
                            to={`/ruler`}

                        >
                            <img className="rulerToggle" src={ruler}/>
                        </NavLink>

                    </TabNavLink>
                </NavItem>
                <NavItem >
                    <TabNavLink>
                        <NavLink
                            to={`/auroch`}

                        >
                            <img className="aurochsToggle" src={aurochs}/>
                        </NavLink>

                    </TabNavLink>
                </NavItem>
                <NavItem >
                    <TabNavLink >
                        <NavLink
                            to={`/movie`}

                        >
                            <img className="movieToggle" src={aurochs}/>
                        </NavLink>

                    </TabNavLink>
                </NavItem>
            </Nav>

        </div>
    );
}

export default AurochTab;

