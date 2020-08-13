import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	label: string,
// 	content: string,
// 	icon: string, // user, plug
// 	size: string, // mini, tiny, small, large, big, huge, massive
// 	color: string, // red, green, blue
// 	style: string
// }

const MessageElement = (props) => (
	<Form.Field>
		{
			props.icon === '' ?
				<Message
					size={props.size}
					color={props.color}
					style={props.style}
					header={props.label}
					content={props.content}
				/>
				:
				<Message
					size={props.size}
					color={props.color}
					style={props.style}
					icon={props.icon}
					header={props.label}
					content={props.content}
				/>

		}
	</Form.Field>
)

export default MessageElement;