import React from 'react';
import { Card } from '../../Components/common/Card';
import s from './style/CreateOrderBlock.module.css';
import { CloseButton } from '../../Components/common/inCard/CloseButton';
import { HorizontalSpacer } from '../../Components/common/inCard/HorizontalSpacer';

//Заменить в дальнейшем на ссылки с сервера
import car1 from '../../Assets/images/cars/octavia-pure-white 1-1.png';
import car2 from '../../Assets/images/cars/octavia-pure-black 1.png';
import car3 from '../../Assets/images/cars/METRISP_9147 1.png';
import car4 from '../../Assets/images/cars/pngwing 1.png';
import car5 from '../../Assets/images/cars/Courier Van 36_3D_p 1.png';
import { CheckBox } from '../../Components/common/CheckBox';

const carsVariants = [
    {
        id: "asbgjhasdkghjasdkgbasdkgbak624561",
        type: "comfort",
        header: "Эконом",
        imageURL: "https://....",
        img: car1,
        price: 300
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak624562",
        type: "comfort",
        header: "Комфорт",
        imageURL: "https://....",
        img: car1,
        price: 1100
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak624563",
        type: "comfort",
        header: "Комфорт +",
        imageURL: "https://....",
        img: car1,
        price: 1300
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak624564",
        type: "comfort",
        header: "Бизнес",
        imageURL: "https://....",
        img: car2,
        price: 2600
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak624565",
        type: "comfort",
        header: "Минивэн",
        imageURL: "https://....",
        img: car3,
        price: 1300
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak624566",
        type: "comfort",
        header: "Грузовой",
        imageURL: "https://....",
        img: car4,
        price: 1500
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak624567",
        type: "comfort",
        header: "Курьер",
        imageURL: "https://....",
        img: car5,
        price: 340
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak6245621",
        type: "comfort",
        header: "Комфорт",
        imageURL: "https://....",
        img: car1,
        price: 1100
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak6245632",
        type: "comfort",
        header: "Комфорт +",
        imageURL: "https://....",
        img: car1,
        price: 1300
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak6245643",
        type: "comfort",
        header: "Бизнес",
        imageURL: "https://....",
        img: car2,
        price: 2600
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak6245654",
        type: "comfort",
        header: "Минивэн",
        imageURL: "https://....",
        img: car3,
        price: 1300
    },
    {
        id: "asbgjhasdkghjasdkgbasdkgbak6245665",
        type: "comfort",
        header: "Грузовой",
        imageURL: "https://....",
        img: car4,
        price: 1500
    }
];

const CreateOrderBlock = (props) => {
    return (
        <Card className={s.container}>
            <CloseButton />
            <HorizontalSpacer>
                <h2>Создать заказ</h2>
            </HorizontalSpacer>
            <div className={s.tripPointsContainer}>
                <div className={s.wayPointsDecorationLine}></div>
                <div className={s.wayPointsList}>
                    <div className={s.wayPointsListElement}>
                        <p>начальный пункт</p>
                        <h3>На карте</h3>
                    </div>
                    <div className={s.wayPointsListElement}>
                        <p>конечный пункт</p>
                        <h3>На карте</h3>
                    </div>
                </div>
            </div>
            <div className={s.cardsHorizontalSliderHolder}>
                <div className={s.cardsHorizontalSlider}>
                    {carsVariants.map((variant)=>(
                        <Card className={s.cardVariant} key={variant.id}>
                            <h3>{variant.header}</h3>
                            <img src={variant.img} alt={`${variant.header} option`}/>
                            <p>{variant.price}₽</p>
                        </Card>
                    ))}
                </div>
            </div>
            <h3>Пожелания</h3>
            <div className={s.orderOptionsList}>
                <div className={s.orderOptionsListElement}>
                    <p>Безопасность ребенка</p>
                    <CheckBox className={s.iosCheckbox} isiOSLikeCheckbox={true} checkBoxId={"asbgjhasdkghjasdkgbasdkgbak"}/>
                </div>
                <div className={s.orderOptionsListElement}>
                    <p>Детское кресло</p>
                    <CheckBox className={s.iosCheckbox} isiOSLikeCheckbox={true} checkBoxId={"asbgjhasdkghjasdkgbasdkgbak1"}/>
                </div>
            </div>
            <h3>Комментарий</h3>
        </Card>
    )
}

export {
    CreateOrderBlock
}