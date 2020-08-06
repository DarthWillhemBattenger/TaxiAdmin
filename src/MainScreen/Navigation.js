import React from "react";
import s from "./style/Navigation.module.css";
import { NavigationTabs } from "./components/NavigationTabs";
import { Logo } from "../Components/common/Logo";

const dispatcherInfo = {
    name: "Иванов Иван",
    status: "Диспетчер"
};

const Navigation = () => {
  return (
    <div className={s.container}>
        <div className={s.dispatcherInformation}>
            <h3>{dispatcherInfo.name}</h3>
            <p>{dispatcherInfo.status}</p>
        </div>
        <NavigationTabs />
        <Logo className={s.logo}/>
    </div>
  )
};


export {
    Navigation
}