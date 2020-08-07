import React from 'react';
import s from './style/SearchBar.module.css';
import {Card} from '../../Components/common/Card';
import searchIcon from '../../Assets/icons/searchIcon.svg';

const SearchBar = () => {
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
            </div>
        </Card>
    );
}

export {
    SearchBar
};