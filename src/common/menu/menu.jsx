import React from 'react'
import "./menu.scss"
import { NavLink } from 'react-router-dom';

export const Menu = () => {
    return (
        <nav className="navigation">
            <div className="navigation__block">
                <NavLink to="/profile" className="navigation__a">Profile</NavLink>
                <NavLink to="/dialog" className="navigation__a">Dialog</NavLink>
                <NavLink to="/news" className="navigation__a">News</NavLink>
                <NavLink to="/music" className="navigation__a">Music</NavLink>
                <NavLink to="/setting" className="navigation__a">Setting</NavLink>
            </div>
        </nav>
    )
};