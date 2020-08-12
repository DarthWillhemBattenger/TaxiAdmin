import React, { useState } from 'react';
import s from './style/SearchBar.module.css';
import {Card} from '../../Components/common/Card';
import {CheckBox} from '../../Components/common/CheckBox';
import {TextInput} from '../../Components/common/Inputs';
import {formatPhoneNumber} from '../../Help/Formatter';
import searchIcon from '../../Assets/icons/searchIcon.svg';
import { ButtonFilled } from '../../Components/common/Buttons';

const SearchBar = () => {
    const [financeFrom, setFinanceFrom] = useState("");
    const [financeTo, setFinanceTo] = useState("");
    const [ratingFrom, setRatingFrom] = useState("");
    const [ratingTo, setRatingTo] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <Card className={s.container}>
            <div className={s.searchIconPlace}>
                <object type="image/svg+xml" data={searchIcon}>
                    search icon
                </object>
            </div>
            <input type="text" placeholder="Поиск"/>
            <div className={s.buttonsContainer}>
                <button className={s.filtersButton}>Фильтры</button>
                <Card className={s.hoverMenu}>
                    <h5>По статусу</h5>
                    <CheckBox isiOSLikeCheckbox={false} className={s.checkbox} checkBoxId="hoverMenuCheckbox"/>
                    <h5>По финансам</h5>
                    <TextInput value={financeFrom} title="От" setter={setFinanceFrom}/>
                    <TextInput value={financeTo} title="До" setter={setFinanceTo}/>
                    <h5>По рейтингу</h5>
                    <TextInput value={ratingFrom} title="От" setter={setRatingFrom}/>
                    <TextInput value={ratingTo} title="До" setter={setRatingTo}/>
                    <h5 className={s.singleInputField}>По имени</h5>
                    <TextInput value={name} title="Имя" setter={setName}/>
                    <h5 className={s.singleInputField}>По номеру телефона</h5>
                    <TextInput value={phone} title="+7 (999) 876-54-32" setter={setPhone} formatter={e => formatPhoneNumber(e)}/>
                    <br/>
                    <ButtonFilled type="submit" title="Поиск" additionClassName={s.searchButton}/>
                </Card>
            </div>
        </Card>
    );
}

export {
    SearchBar
};