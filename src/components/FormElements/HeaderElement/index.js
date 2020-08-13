import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	label: string,
// 	subHeader: string,
// 	icon: string, // user, plug
// 	size: string, // tiny, small, medium, large, huge
// 	color: string, // red, green, blue
// 	disabled: boolean,
// 	style: string
// }

const HeaderElement = (props) => (
	<Form.Field>
		{
			props.icon === '' ?
				<Header
					as='h2'
					size={props.size}
					color={props.color}
					disabled={props.disabled}
					style={props.style}
					content={props.label}
					subheader={props.subHeader}
				/>
				:
				<Header
					as='h2'
					size={props.size}
					color={props.color}
					disabled={props.disabled}
					style={props.style}
					icon={props.icon}
					content={props.label}
					subheader={props.subHeader}
				/>
		}
	</Form.Field>
)

export default HeaderElement;