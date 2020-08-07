import React from 'react';
import s from './styles/EventPage.module.css';
import { SearchBar } from '../components/SearchBar';

const EventPage = () => {
    return (
        <div className={s.container}>
            <SearchBar />
            <div>
                <p>Card container</p>
                <div className="card">card1</div>
                <div className="card">card2</div>
                <div className="card">card3</div>
            </div>
        </div>
    );
}

export {
    EventPage
};