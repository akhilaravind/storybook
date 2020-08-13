import React from 'react';
import { Divider } from 'semantic-ui-react';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	label: string, // and, or
// 	dividerType: string, // vertical, horizontal, fitted, hidden, section, clearing
// 	style: string
// }

const DividerElement = (props) => (
	<React.Fragment>
		{
			props.label === '' ?
			<Divider />
			:
			<Divider>{props.label}</Divider>
		}
	</React.Fragment>
)

export default DividerElement;