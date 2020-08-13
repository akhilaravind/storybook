import React, { useState, useRef } from 'react';
import { Grid, Form, Input, Popup, Button } from 'semantic-ui-react';
import ErrorMessage from './../../ErrorMessage';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	label?: string,
// 	placeholder?: string,
// 	icon: string,
// 	iconPosition?: string, // left, right
// 	labelPosition?: string, // left, right
// 	helpText?: object,
// 	value: string,
// 	disabled?: boolean,
// 	minLength?: number,
// 	maxLength?: number,
// 	mandatory?: boolean,
// 	size?: string, // mini, small, large, big, huge, massive
// 	style?: string,
// 	error: string,
// 	handleChange: () => void,
// 	handleBlur: () => any
// }

const InputTextElement = (props) => {

	const [isFocus, onFocus] = useState(false);
	const textInput = useRef(null);

	return (
		<React.Fragment>
			<Form.Field className='custom-form'>
				{
					props.label &&
					<span
						className={`input-text-element-label ${(isFocus === true || props.value !== '') && 'isFocus'}`}
						onClick={() => textInput.current.focus()}
					>
						{props.label} {props.unit &&<small>({props.unit})</small> }
					</span>
				}
				<Grid>
					<Grid.Row>
						<Grid.Column width={(props.helpText && props.helpText.content) ? 15 : 16}>
							<Input
								fluid
								ref={textInput}
								className={`input-text-element ${(isFocus === true || props.value !== '') && 'isFocus'}`}
								name={props.id}
								value={props.value}
								placeholder={(isFocus === true) ? props.placeholder : null}
								disabled={props.disabled}
								size={props.size}
								style={props.style}
								maxLength={props.maxLength}
								onChange={props.handleChange}
								onFocus={() => onFocus(true)}
								onBlur={() => onFocus(false)}
								// icon={props.icon}
								// iconPosition={props.iconPosition}
								// minLength={props.minLength}
								// maxLength={props.maxLength}
								// required={props.mandatory}
							/>
						</Grid.Column>
						<Grid.Column width={1}>
							{
								props.helpText && props.helpText.content &&
								<Popup
									inverted
									size='small'
									position='top center'
									content={props.helpText.content}
									trigger={<Button icon={props.helpText.icon} size='tiny' circular />}
								/>
							}
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<ErrorMessage error={props.error} />
			</Form.Field>
		</React.Fragment>
	)
}

export default InputTextElement;