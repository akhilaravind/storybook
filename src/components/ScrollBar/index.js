import React from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './index.scss';

const CustomScrollBar = (props) => {
	return <ScrollBar>{props.childComponent}</ScrollBar>
}

export default CustomScrollBar;