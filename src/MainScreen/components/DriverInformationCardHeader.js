import React, { useState } from 'react';
import s from './style/DriverInformationCardHeader.module.css';
import {HorizontalSpacer} from '../../Components/common/inCard/HorizontalSpacer';
import starIcon from '../../Assets/icons/star.svg';
import arrowIcon from '../../Assets/icons/arrowDown.svg';
import { ButtonFilled, UniversalButton } from '../../Components/common/Buttons';
import { Card } from '../../Components/common/Card';

const DriverInformationCardHeader = (props) => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <HorizontalSpacer className={s.cardHeadSpacer}>
            <div className={s.headerInfoGroup}>
                <img src={props.photoURL} alt={`${props.name} avatar`}/>
                <div className={s.mainInformation}>
                    <h3>{props.name}</h3>
                    <div className={s.phoneAndRating}>
                        <div className={s.phone}>{props.phone}</div>
                        <div className={s.rating}>
                            {props.rating}
                            <div className={s.starContainer}>
                                <object type="image/svg+xml" data={starIcon}>
                                    star icon
                                </object>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.buttonsGroup}>
                <ButtonFilled additionClassName={s.mainButton} isNeedShadow={false} title="Вывести средства"/>
                <UniversalButton additionClassName={`${s.secondButton} ${openMenu ? s.openMenu : ""}`} onClick={()=>{setOpenMenu(!openMenu)}} >
                    Другое
                    <object type="image/svg+xml" className={s.arrow} data={arrowIcon} onClick={()=>{setOpenMenu(!openMenu)}}>
                        arrow icon
                    </object>
                </UniversalButton>
                {openMenu &&
                    <Card className={s.contextMenu}>
                        <p>Отметить, как недобросовестное</p>
                        <p>Обратиться к администратору</p>
                        <p>Вернуть</p>
                        <p>Удалить</p>
                    </Card>
                }
            </div>
        </HorizontalSpacer>
    );
}

export {
    DriverInformationCardHeader
}