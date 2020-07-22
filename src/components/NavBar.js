import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return <nav >
        <div>
            <NavLink to='/main' > главная </NavLink>
        </div>
        <div>
            <NavLink to='/employees' > сотрудники </NavLink>
        </div>
    </nav>

}

export default NavBar;