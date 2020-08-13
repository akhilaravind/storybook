import React from 'react';
import { Form, Popup, Button } from 'semantic-ui-react';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	label: string,
// 	icon: string, // user, plug
// 	color: string, // red, green, blue
// 	style: string
// }

const TooltipElement = (props) => (
	<Form.Field>
		<Popup
			inverted
			content={props.label}
			trigger={<Button icon={props.icon} />}
		/>
	</Form.Field>
)

export default TooltipElement;