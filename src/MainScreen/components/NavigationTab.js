import React from "react";
import {NavLink as Link} from "react-router-dom";
import s from "./style/NavigationTab.module.css";

const NavigationTab = ({name, path}) => {
    return (
        <Link to={path} activeClassName={s.selectedTab} className={s.navigationTab}>
            <p className={s.tabText}>{name}</p>
        </Link>
    );
};


export {
    NavigationTab
}