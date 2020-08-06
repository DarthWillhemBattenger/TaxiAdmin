import React from "react";
import {Link} from "react-router-dom";
import s from "./style/NavigationTab.module.css";

const NavigationTab = ({name, selected, path}) => {
  
  if (!selected) {
      return (
        <Link to={path}>
            <div className={s.navigationTab}>
                <p className={s.tabText}>{name}</p>
            </div>
        </Link>
      );
  }
  else {
    return (
        <Link to={path}>
            <div className={`${s.navigationTab} ${s.selectedTab}`}>
                <p className={s.tabText}>{name}</p>
            </div>
        </Link>
    );
  }
};


export {
    NavigationTab
}