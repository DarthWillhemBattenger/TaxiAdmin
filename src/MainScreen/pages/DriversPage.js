import React from 'react';
import s from './styles/DriversPage.module.css';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../../Components/common/Card';
import { HorizontalSpacer } from '../../Components/common/inCard/HorizontalSpacer';
import { DriverListElement } from '../components/DriverListElement';
import { DriverInformationCard } from '../components/DriverInformationCard';
import { ScrollableElement } from '../../Components/common/inCard/ScrollableElement';
import { BottomGradient } from '../../Components/common/inCard/BottomGradient';

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

const DriversPage = () => {
    return (
        <div className={s.container}>
            <SearchBar />
            <div className={s.cardContainer}>
                <Card className={s.card}>
                    <HorizontalSpacer className={s.cardHeadSpacer}>
                        <h3>Все водители</h3>
                    </HorizontalSpacer>
                    <ScrollableElement>
                        {drivers.map( (driver) => (
                                <DriverListElement key={driver.id} photoURL={driver.photoURL} name={driver.name} />
                            ))}
                    </ScrollableElement>
                    <BottomGradient />
                </Card>
                <DriverInformationCard cardStyle={s.card}/>
            </div>
        </div>
    );
}

export {
    DriversPage
};