import React from 'react';
import s from './style/DriverInformationCard.module.css';
import {Card} from '../../Components/common/Card';
import {HorizontalSpacer} from '../../Components/common/inCard/HorizontalSpacer';
import arrowIcon from '../../Assets/icons/arrowDown.svg';
import starIcon from '../../Assets/icons/star.svg';
//import { Link } from 'react-router-dom';
import { ButtonFilled, UniversalButton } from '../../Components/common/Buttons';
import { TripBlock } from './TripBlock';
import { FinancesListElement } from './FinancesListElement';

/*
<object type="image/svg+xml" data={arrowIcon}>
    arrow icon
</object>
*/

const driver = {
    id: "blgjkbldgjkahlghajkg1237895",
    name: "Иванов Иван Иванович",
    photoURL: "https://archilab.online/images/1/123.jpg",
    phone: "+7 (999) 464-23-23",
    rating: 4.8,
    trips: [
        {
            id: "blgjkbldgjkahlghajkg1231",
            tripNumber: "23545",
            tripTime: 3612325,
            fromPoint: "Попова, 27",
            toPoint: "Старцева, 110",
            tripCost: 680,
            rating: 4
        },
        {
            id: "blgjkbldgjkahlghajkg1232",
            tripNumber: "23545",
            tripTime: 2212325,
            fromPoint: "Ленина, 30",
            toPoint: "Луначарского, 5",
            tripCost: 1680,
            rating: 4
        },
        {
            id: "blgjkbldgjkahlghajkg1233",
            tripNumber: "23545",
            tripTime: 1512325,
            fromPoint: "Белинского, 22",
            toPoint: "Старцева, 10",
            tripCost: 200,
            rating: 4
        },
        {
            id: "blgjkbldgjkahlghajkg1234",
            tripNumber: "23545",
            tripTime: 612325,
            fromPoint: "Куйбышева, 65",
            toPoint: "Луначарского, 30",
            tripCost: 300,
            rating: 4
        }
    ],
    finance: {
        income: 35160,
        transactions: [
            {
                id: "blgjkbldgjkahlghajkg12310978",
                date: 1596842817774,
                description: "Вывод средств",
                cost: "10350"
            },
            {
                id: "blgjkbldgjkahlghajkg123109781",
                date: 1596842817774,
                description: "Вывод средств",
                cost: "5790"
            },
            {
                id: "blgjkbldgjkahlghajkg123109782",
                date: 1596842817774,
                description: "Вывод средств",
                cost: "350"
            },
        ]
    }
}

//<TripBlock key={trip.id} tripNumber={trip.tripNumber} tripTime={trip.tripTime} fromPoint={trip.fromPoint} toPoint={trip.toPoint} isTripRatingOutput={false} isTimeOutput={true}/>

const DriverInformationCard = (props) => {
    return (
        <Card className={`${s.container} ${props.cardStyle}`}>
            <HorizontalSpacer className={s.cardHeadSpacer}>
                <div className={s.headerInfoGroup}>
                    <img src={driver.photoURL} alt={`${driver.name} avatar`}/>
                    <div className={s.mainInformation}>
                        <h3>{driver.name}</h3>
                        <div className={s.phoneAndRating}>
                            <div className={s.phone}>{driver.phone}</div>
                            <div className={s.rating}>
                                {driver.rating}
                                <div className={s.starContainer}>
                                    <object type="image/svg+xml" data={starIcon}>
                                        star icon
                                    </object>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.headerButtonsGroup}>
                    <ButtonFilled additionClassName={s.mainButton} isNeedShadow={false} title="Вывести средства"/>
                    <UniversalButton additionClassName={s.secondButton}>
                        Другое
                        <object type="image/svg+xml" className={s.arrow} data={arrowIcon}>
                            arrow icon
                        </object>
                    </UniversalButton>
                </div>
            </HorizontalSpacer>
            <div className={s.scrollableElement}>
                <h3 className={s.sectionHeader}>Все поездки</h3>
                {driver.trips.map((trip) => (
                    <TripBlock key={trip.id} tripNumber={trip.tripNumber} fromPoint={trip.fromPoint} toPoint={trip.toPoint} tripCost={trip.tripCost} rating={trip.rating} isTripRatingOutput={true} isTimeOutput={false} isBigPriceOutput={true}/>
                ))}
                <div className={s.showMoreButton}>
                    Показать ещё
                </div>
                <h3 className={s.sectionHeader}>Финансы</h3>
                <HorizontalSpacer >
                    <div className={s.financeListElement}>
                        <div className={s.financeText}>Заработано:</div>
                        <div className={s.financeMoney}>{driver.finance.income} ₽</div>
                    </div>
                </HorizontalSpacer>
                <h3 className={s.sectionHeader}>Транзакции</h3>
                <HorizontalSpacer >
                    {driver.finance.transactions.map((transaction) => (
                        <FinancesListElement key={transaction.id} date={transaction.date} description={transaction.description} cost={transaction.cost}/>
                    ))}
                </HorizontalSpacer>
            </div>
            <div className={s.bottomGradient}></div>
        </Card>
    );
}

export {
    DriverInformationCard
};