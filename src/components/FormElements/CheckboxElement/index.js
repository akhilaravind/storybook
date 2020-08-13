import React from 'react';
import { Form, Checkbox, Label } from 'semantic-ui-react';
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
// 	isToggle: boolean,
// 	disabled: boolean,
// 	options: Array<Object>,
// 	mandatory: boolean,
// 	style: string,
// 	error: string,
// 	handleChange: () => void,
// 	onBlur: () => void
// }

const CheckboxElement = (props) => (
	<Form.Field>
		{
			props.label &&
			<React.Fragment>
				<Label basic className='checkbox-element-label'>{props.label}</Label>
				<br />
			</React.Fragment>
		}
		{
			props.isToggle ?
				<Checkbox toggle />
				:
				<React.Fragment>
					{
						props.options.map((option, index) => {
							return <React.Fragment key={index}>
								<input
									className='checkbox-element'
									type="checkbox"
									id={option.id}
									name={props.id}
									value={option.value}
									disabled={props.disabled}
									checked={props.value.includes(option.value)}
									style={props.style}
									onChange={props.handleChange}
									onBlur={props.onBlur}
								/>
								<Label basic className='checkbox-element-option-label'>{option.text}</Label>
							</React.Fragment>
						})
					}
				</React.Fragment>
		}
		<ErrorMessage error={props.error} />
	</Form.Field>
)

export default CheckboxElement;