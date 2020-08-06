import React from 'react';
// eslint-disable-next-line
import s from './styles/EventPage.module.css';

const EventPage = () => {
    return (
        <div>
            <div>Search</div>
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