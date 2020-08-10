import React from 'react';
import s from './style/ScrollableElement.module.css';


const ScrollableElement = (props) => {
    if (props.className) {
        return (
            <div className={`${s.scrollableElement} ${props.className}`}>
                {props.children}
            </div>
        );
    }
    return (
        <div className={s.scrollableElement}>
            {props.children}
        </div>
    );
}

export {
    ScrollableElement
};