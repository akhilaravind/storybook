import React from 'react';
import { Button } from 'semantic-ui-react';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	label: string,
// 	icon: string, // user, plug
// 	iconPosition: string, // left, right
// 	size: string, // mini, tiny, small, medium, large, big, huge, massive
// 	color: string, // red, green, blue
// 	circular: boolean,
// 	disabled: boolean,
// 	style: string,
// 	onClick: () => void
// }

const ButtonElement = (props) => (
	<React.Fragment>
		{
			props.icon === '' ?
				<Button
					className='button-element'
					size={props.size}
					color={props.color}
					circular={props.circular}
					disabled={props.disabled}
					style={props.style}
					labelPosition={props.iconPosition}
					content={props.label}
				/>
				:
				<Button
					className='button-element'
					size={props.size}
					color={props.color}
					circular={props.circular}
					disabled={props.disabled}
					style={props.style}
					icon={props.icon}
					labelPosition={props.iconPosition}
					content={props.label}
				/>
		}
	</React.Fragment>
)

export default ButtonElement;