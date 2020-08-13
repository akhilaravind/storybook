import React from 'react';
import { Label } from 'semantic-ui-react';
import ErrorMessage from './../../ErrorMessage';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	label: string,
// 	placeholder: string,
// 	icon: string,
// 	iconPosition?: string, // left, right
// 	labelPosition?: string, // left, right
// 	helpText?: object,
// 	value: string,
// 	disabled: boolean,
// 	options: Array<Object>,
// 	mandatory: boolean,
// 	style: string,
// 	error: string,
// 	handleChange: () => void,
// 	onBlur: () => void
// }

const RadioElement = (props) => (
	<div>
		<Label basic className='radio-element-label'>{props.label}</Label><br />
		{
			props.options.map((option, index) => {
				return <React.Fragment key={index}>
					<input
						type="radio"
						id={option.id}
						name={props.id}
						value={option.value}
						disabled={props.disabled}
						checked={props.value === option.value}
						onChange={props.handleChange}
						onBlur={props.onBlur}
					/>
					<Label basic className='radio-element-option-label'>{option.text}</Label>
				</React.Fragment>
			})
		}
		<ErrorMessage error={props.error} />
	</div>
)

export default RadioElement;