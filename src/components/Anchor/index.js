import React from 'react';
import './index.scss';

const Anchor = (props) => {
	return <a href={props.href} target='_blank' rel="noopener noreferrer">{props.text}</a>
}

export default Anchor;
