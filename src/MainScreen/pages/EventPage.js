import React from 'react';
import s from './styles/EventPage.module.css';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../../Components/common/Card';
import { HorizontalSpacer } from '../../Components/common/inCard/HorizontalSpacer';
import { CommentBlock } from '../components/CommentBlock';
import { TripBlock } from '../components/TripBlock';

const badComments = [
    {
        id: "lljkhljl873aadg8674q35t960",
        name: "Allison Price",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t961",
        name: "Brianna James",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t962",
        name: "Sarah Mitchell",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t963",
        name: "Madison Flores",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t964",
        name: "Brandon Roberts",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t965",
        name: "Isabella Ward",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t966",
        name: "Lily Harris",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t967",
        name: "Allison Price",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t968",
        name: "Brianna James",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t969",
        name: "Sarah Mitchell",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t9610",
        name: "Madison Flores",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t9611",
        name: "Brandon Roberts",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t9612",
        name: "Isabella Ward",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
    {
        id: "lljkhljl873aadg8674q35t9613",
        name: "Lily Harris",
        comment: "Nec, enim a quam ac. Sapien, faucibus est, varius lacus enim dignissim odio gravida bibendum.",
        date: 1596842817774
    },
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

const EventPage = () => {
    return (
        <div className={s.container}>
            <SearchBar />
            <div className={s.cardContainer}>
                <Card className={s.card}>
                    <HorizontalSpacer className={s.cardHeadSpacer}>
                        <h3>Плохие Комментарии</h3>
                    </HorizontalSpacer>
                    <div className={s.scrollableElement}>
                        {badComments.map( (comment) => (
                            <CommentBlock key={comment.id} name={comment.name} date={comment.date} comment={comment.comment} />
                        ))}
                    </div>
                    <div className={s.bottomGradient}></div>
                </Card>
                <Card className={s.card}>
                    <HorizontalSpacer className={s.cardHeadSpacer}>
                        <h3>Длительные поездки</h3>
                    </HorizontalSpacer>
                    <div className={s.scrollableElement}>
                        {longTrips.map((trip) => (
                            <TripBlock key={trip.id} tripNumber={trip.tripNumber} tripTime={trip.tripTime} fromPoint={trip.fromPoint} toPoint={trip.toPoint} isTripRatingOutput={false} isTimeOutput={true}/>
                        ))}
                    </div>
                    <div className={s.bottomGradient}></div>
                </Card>
                <Card className={s.card}>
                    <HorizontalSpacer className={s.cardHeadSpacer}>
                        <h3>Пропущенные заказы</h3>
                    </HorizontalSpacer>
                    <div className={s.scrollableElement}>
                        {longTrips.map((trip) => (
                            <TripBlock key={trip.id} tripNumber={trip.tripNumber} tripTime={trip.tripTime} fromPoint={trip.fromPoint} toPoint={trip.toPoint} tripCost={trip.tripCost} isTripRatingOutput={false} isTimeOutput={false} isBigPriceOutput={false}/>
                        ))}
                    </div>
                    <div className={s.bottomGradient}></div>
                </Card>
            </div>
        </div>
    );
}

export {
    EventPage
};