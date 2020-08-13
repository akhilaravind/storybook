import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	label: string,
// 	value: string,
// 	icon: string,
// 	size: string, // mini, tiny, small, medium, large, big, huge, massive
// 	color: string,
// 	style: string
// }

const LabelElement = (props) => (
	<Form.Field>
		<Label
			as='a'
			href={props.value}
			className='label-element'
			basic
			content={props.label}
			icon={props.icon}
			size={props.size}
			color={props.color}
			style={props.style}
		/>
	</Form.Field>
)

export default LabelElement;