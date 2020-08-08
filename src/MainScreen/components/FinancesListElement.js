import React from "react";
import s from "./style/FinancesListElement.module.css";
import { HorizontalSpacer } from "../../Components/common/inCard/HorizontalSpacer";

const FinancesListElement = (props) => {
    let dateTransform = new Date(props.date);

    return (
        <HorizontalSpacer>
            <div className={s.financeListElement}>
                <div className={s.financeText}>{dateTransform.toLocaleDateString()} - {props.description}</div>
                <div className={s.financeMoney}>{props.cost}₽</div>
            </div>
        </HorizontalSpacer>
    );
}

export {
    FinancesListElement
}