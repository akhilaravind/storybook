import React from 'react';
import { Accordion } from 'semantic-ui-react';
import './index.scss';

const CustomAccordion = (props) => {
	const { type, index, panels } = props;
	const renderContent = () => {
		switch (type) {
			case 'fluid':
				return <Accordion defaultActiveIndex={index} panels={panels} styled fluid />
			case 'exclusive':
				return <Accordion defaultActiveIndex={index} panels={panels} exclusive={false} fluid />
			case 'nested':
				return <Accordion defaultActiveIndex={index} panels={panels} />
			case 'form-fields':
				return <Accordion defaultActiveIndex={index} panels={panels} />
			default:
				return <Accordion defaultActiveIndex={index} panels={panels} />
		}
	}
	return (
		<React.Fragment>
			{renderContent()}
		</React.Fragment>
	)
};

export default CustomAccordion;