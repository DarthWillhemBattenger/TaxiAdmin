import React from 'react';
import s from './styles/DriversPage.module.css';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../../Components/common/Card';
import { HorizontalSpacer } from '../../Components/common/inCard/HorizontalSpacer';
import { TripBlock } from '../components/TripBlock';
import { DriverListElement } from '../components/DriverListElement';
import { DriverInformationCard } from '../components/DriverInformationCard';

const drivers = [
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk12341",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Иванов Иван Иванович"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk12342",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Гагарин Дмитрий Александрович"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk12343",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Гашков Леонид Олегович"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk12344",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Петрова Ольга Дмитриевна"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk12345",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Шишкин Никита Андреевич"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk12346",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Попов Захар Георгиевич"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk12347",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Харьков Роман Дмитриевич"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk12348",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Харьков Роман Дмитриевич"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk12349",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Иванов Иван Иванович"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk123410",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Гагарин Дмитрий Александрович"
    },
    {
        id: "gkhjfgakshjfkahjsbfkashjdbfk123411",
        photoURL: "https://archilab.online/images/1/123.jpg",
        name: "Гашков Леонид Олегович"
    }
];

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

const DriversPage = () => {
    return (
        <div className={s.container}>
            <SearchBar />
            <div className={s.cardContainer}>
                <Card className={s.card}>
                    <HorizontalSpacer className={s.cardHeadSpacer}>
                        <h3>Все водители</h3>
                    </HorizontalSpacer>
                    <div className={s.scrollableElement}>
                        {drivers.map( (driver) => (
                            <DriverListElement key={driver.id} photoURL={driver.photoURL} name={driver.name} />
                        ))}
                    </div>
                    <div className={s.bottomGradient}></div>
                </Card>
                <DriverInformationCard cardStyle={s.card}/>
                {/*<Card className={s.card}>
                    <HorizontalSpacer className={s.cardHeadSpacer}>
                        <h3>Длительные поездки</h3>
                    </HorizontalSpacer>
                    <div className={s.scrollableElement}>
                        {longTrips.map((trip) => (
                            <TripBlock key={trip.id} tripNumber={trip.tripNumber} tripTime={trip.tripTime} fromPoint={trip.fromPoint} toPoint={trip.toPoint} isTripRatingOutput={false} isTimeOutput={true}/>
                        ))}
                    </div>
                    <div className={s.bottomGradient}></div>
                </Card>*/}
            </div>
        </div>
    );
}

export {
    DriversPage
};