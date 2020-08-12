import React from 'react';
import s from './styles/OrdersPage.module.css';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../../Components/common/Card';
import { HorizontalSpacer } from '../../Components/common/inCard/HorizontalSpacer';
import { TripBlock } from '../components/TripBlock';
import { UniversalButton } from '../../Components/common/Buttons';
import { ScrollableElement } from '../../Components/common/inCard/ScrollableElement';
import { BottomGradient } from '../../Components/common/inCard/BottomGradient';
import { CloseButton } from '../../Components/common/inCard/CloseButton';

const longTrips = [
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
    },
    {
        id: "blgjkbldgjkahlghajkg1235",
        tripNumber: "23545",
        tripTime: 7212325,
        fromPoint: "Героев Хасана, 10",
        toPoint: "Пр-кт. Парковый, 90",
        tripCost: 520,
        rating: 4
    },
    {
        id: "blgjkbldgjkahlghajkg1236",
        tripNumber: "23545",
        tripTime: 13612325,
        fromPoint: "Белинского, 40",
        toPoint: "ш.Космонавтов 9",
        tripCost: 100,
        rating: 4
    },
    {
        id: "blgjkbldgjkahlghajkg1237",
        tripNumber: "23545",
        tripTime: 23612325,
        fromPoint: "Гайвинская, 1",
        toPoint: "Мира, 9",
        tripCost: 980,
        rating: 4
    },
    {
        id: "blgjkbldgjkahlghajkg1238",
        tripNumber: "23545",
        tripTime: 4612325,
        fromPoint: "Попова, 27",
        toPoint: "Старцева, 110",
        tripCost: 1680,
        rating: 4
    },
    {
        id: "blgjkbldgjkahlghajkg1239",
        tripNumber: "23545",
        tripTime: 5612325,
        fromPoint: "Попова, 27",
        toPoint: "Старцева, 110",
        tripCost: 240,
        rating: 4
    },
    {
        id: "blgjkbldgjkahlghajkg12310",
        tripNumber: "23545",
        tripTime: 9612325,
        fromPoint: "Попова, 27",
        toPoint: "Старцева, 110",
        tripCost: 515,
        rating: 4
    },
    {
        id: "blgjkbldgjkahlghajkg123",
        tripNumber: "23545",
        tripTime: 8612325,
        fromPoint: "Попова, 27",
        toPoint: "Старцева, 110",
        tripCost: 210,
        rating: 4
    }
];

const OrdersPage = () => {
    return (
        <div className={s.container}>
            <SearchBar />
            <div className={s.cardContainer}>
                <Card className={`${s.card} ${s.ordersContainer}`}>
                    <HorizontalSpacer className={s.cardHeadSpacer}>
                        <h3>Заказы</h3>
                    </HorizontalSpacer>
                    <ScrollableElement>
                        {longTrips.map((trip) => (
                            <TripBlock key={trip.id} tripNumber={trip.tripNumber} tripTime={trip.tripTime} fromPoint={trip.fromPoint} toPoint={trip.toPoint} tripCost={trip.tripCost} isTripRatingOutput={false} isTimeOutput={false} isBigPriceOutput={true} isNeedArrow={true}/>
                        ))}
                    </ScrollableElement>
                    <BottomGradient />
                </Card>
                <Card className={`${s.card} ${s.orderInfoCard}`}>
                    <CloseButton />
                    <HorizontalSpacer className={s.orderInfo}>
                        <h3>№{longTrips[0].tripNumber}</h3>
                        <div className={s.orderInfoContainer}>
                            <span>От: </span>
                            <p className={s.orderInfoText}>{longTrips[0].fromPoint}</p>
                        </div>
                        <div className={s.orderInfoContainer}>
                            <span>До: </span>
                            <p className={s.orderInfoText}>{longTrips[0].toPoint}</p>
                        </div>
                        <div className={s.orderInfoContainer}>
                            <span>Цена: </span>
                            <p className={`${s.orderInfoText} ${s.priceHighlight}`}>{longTrips[0].tripCost}₽</p>
                        </div>
                    </HorizontalSpacer>
                    <div className={s.buttonsContainer}>
                        <UniversalButton additionClassName={s.chatButton}>
                            Чат с заказчиком
                        </UniversalButton>
                        <UniversalButton additionClassName={s.deleteButton}>
                            Удалить
                        </UniversalButton>
                        <UniversalButton additionClassName={s.changeDriverButton}>
                            Изменить водителя
                        </UniversalButton>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export {
    OrdersPage
};