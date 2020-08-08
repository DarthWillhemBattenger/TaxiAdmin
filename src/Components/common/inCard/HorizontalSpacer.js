import React from 'react';
import s from './style/HorizontalSpacer.module.css';

const HorizontalSpacer = (props) => {
	return <div className={`${s.spacer} ${props.className}`}>{props.children}</div>;
};

export { HorizontalSpacer };
