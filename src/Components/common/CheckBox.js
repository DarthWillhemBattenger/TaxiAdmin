import React from 'react';
import s from './style/CheckBox.module.css';

const CheckBox = (props) => {
    if (props.isiOSLikeCheckbox) {
        return (
            <div className={props.className}>
                <input type="checkbox" id={props.checkBoxId}/>
                <label className={s.iOSLikeCheckBox} htmlFor={props.checkBoxId}/>
            </div>
        );
    }
	return (
        <div className={props.className}>
            <input type="checkbox" id={props.checkBoxId}/>
            <label className={s.checkBox} htmlFor={props.checkBoxId}/>
        </div>
    );
};

export { CheckBox };