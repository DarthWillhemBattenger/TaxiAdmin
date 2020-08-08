import React from "react";
import s from "./style/TripBlock.module.css";
import starIcon from '../../Assets/icons/star.svg';
import { HorizontalSpacer } from "../../Components/common/inCard/HorizontalSpacer";

/*
{
    id: "blgjkbldgjkahlghajkg123",
    tripNumber: "23545",
    tripTime: 8612325,
    fromPoint: "Попова, 27",
    toPoint: "Старцева, 110",
    tripCost: 210,
    rating: 4
}
*/


const TripBlock = (props) => {
    let dateTransform = Math.floor(props.tripTime/60000);

    return (
        <HorizontalSpacer className={s.container}>
            <div className={s.header}>
                <h4>№{props.tripNumber}</h4>
                {props.isTimeOutput ? (
                    <p className={s.tripTime}>{dateTransform} мин</p>
                ) : (
                    props.isBigPriceOutput ? (
                        <p className={s.bigPrice}>{props.tripCost} ₽</p>
                    ) : (
                        <p className={s.smallPrice}>{props.tripCost} ₽</p>
                    )
                )}
            </div>
            <p className={`${s.address} ${s.startPoint}`}><span>От: </span>{props.fromPoint}</p>
            <p className={s.address}><span>До: </span>{props.toPoint}</p>
            {props.isTripRatingOutput ? (
                <div className={s.ratingBlock}>
                    {props.rating}
                    <div className={s.starContainer}>
                        <object type="image/svg+xml" data={starIcon}>
                            star icon
                        </object>
                    </div>
                </div>
            ) : ""}
        </HorizontalSpacer>
    );
}

export {
    TripBlock
}