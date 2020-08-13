// https://mac-s-g.github.io/react-json-view/demo/dist/
import React from 'react';
import ReactJson from 'react-json-view';
import './index.scss'

const PrettifyJson = (props) => {
	return <ReactJson
		src={props.json}
		theme={props.theme}
		name={props.name}
	/>
};

export default PrettifyJson;