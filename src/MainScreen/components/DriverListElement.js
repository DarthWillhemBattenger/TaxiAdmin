import React from "react";
import s from "./style/DriverListElement.module.css";
import arrowIcon from "../../Assets/icons/arrow.svg";
import { HorizontalSpacer } from "../../Components/common/inCard/HorizontalSpacer";

/*
{
    id: "gkhjfgakshjfkahjsbfkashjdbfk123411",
    photoURL: "https://archilab.online/images/1/123.jpg",
    name: "Гашков Леонид Олегович"
}
*/

const DriverListElement = (props) => {

    return (
        <HorizontalSpacer className={s.container}>
            <div className={s.driverPhotoBlock}>
                <img src={props.photoURL} alt={`${props.name} avatar`}/>
            </div>
            <div className={s.nameBlock}>{props.name}</div>
            <div className={s.arrowBlock}>
                <object type="image/svg+xml" data={arrowIcon}>
                    arrow icon
                </object>
            </div>
        </HorizontalSpacer>
    );
}

export {
    DriverListElement
}