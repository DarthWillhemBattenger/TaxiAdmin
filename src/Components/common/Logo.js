import React from "react";
import s from './style/Logo.module.css';

const Logo = ({className}) => {
    return (
        <p className={`${s.Title} ${className}`}>Диспетчер <span className={s.TitleSpan}>такси</span></p>
    )
  };
  
  export {Logo};