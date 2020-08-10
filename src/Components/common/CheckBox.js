import React from 'react';
import s from './style/CheckBox.module.css';

const CheckBox = (props) => {
	return (
        <div className={props.className}>
            <input type="checkbox" id={props.checkBoxId}/>
            <label className={s.checkBox} htmlFor={props.checkBoxId}/>
        </div>
    );
};

export { CheckBox };