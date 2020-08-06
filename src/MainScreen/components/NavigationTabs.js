import React from "react";
import s from "./style/NavigationTab.module.css";
import { NavigationTab } from "./NavigationTab";

const navigationTabs = [
    {
        id: "hoadfbgjllnn926935786",
        name: "Таблицы и Аналитика",
        path: "/main/analytics",
        selected: false
    },
    {
        id: "hoadfbgjllnn9269357861",
        name: "События",
        path: "/main/events",
        selected: true
    },
    {
        id: "hoadfbgjllnn9269357862",
        name: "Водители",
        path: "/main/drivers",
        selected: false
    },
    {
        id: "hoadfbgjllnn9269357863",
        name: "Заказы",
        path: "/main/orders",
        selected: false
    },
    {
        id: "hoadfbgjllnn9269357864",
        name: "Поездки",
        path: "/main/trips",
        selected: false
    },
    {
        id: "hoadfbgjllnn9269357865",
        name: "Финансы и транзакции",
        path: "/main/finance",
        selected: false
    }
];
//name, selected, path

const NavigationTabs = () => {
    return (
        <div className={s.tabsContainer}>
            {navigationTabs.map((navigationTab) => (
                <NavigationTab key={navigationTab.id} name={navigationTab.name} selected={navigationTab.selected} path={navigationTab.path}/>
            ))}
        </div>
    )
};


export {
    NavigationTabs
}