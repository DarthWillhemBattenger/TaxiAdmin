import React from "react";

import s from "./style/Buttons.module.css";
import {Link} from "react-router-dom";


const ButtonVoid = ({action = () => {}, title = "", isLink = false, linkPath = "", type="button", additionClassName="", ...props}) => {
  if(isLink) {
    return (
      <Link to={linkPath}
            onClick={action}
            className={`${additionClassName} ${s.Button} ${s.ButtonVoid}`}
            {...props}
      >
        {title}
      </Link>
    )
  }
  return (
    <button onClick={action} className={`${additionClassName} ${s.Button} ${s.ButtonVoid}`} {...props}>
      {title}
    </button>
  )
};



const ButtonFilled = ({action = () => {}, title = "", isLink = false, linkPath = "", type="button", additionClassName="", isNeedShadow=true, ...props}) => {
  if(isLink) {
    return (
      <Link to={linkPath}
            onClick={action}
            className={`${additionClassName} ${s.Button} ${s.ButtonFilled} ${isNeedShadow ? s.yellowShadow : ""}`}
            {...props}
      >
        {title}
      </Link>
    )
  }
  return  (
    <button type={type} onClick={action} className={`${additionClassName} ${s.Button} ${s.ButtonFilled} ${isNeedShadow ? s.yellowShadow : ""}`} {...props}>
      {title}
    </button>
  )
};



const UniversalButton = (props) => {
  if(props.linkPath) {
    return (
      <Link to={props.linkPath}
            onClick={props.onClickAction}
            className={`${props.additionClassName} ${s.Button}`}
      >
        {props.children}
      </Link>
    )
  }
  return  (
    <button type={props.type} onClick={props.onClickAction} className={`${props.additionClassName} ${s.Button}`}>
      {props.children}
    </button>
  )
};

export {
  ButtonVoid,
  ButtonFilled,
  UniversalButton
}
