import React, { useState, useRef } from 'react';
import { Grid, Popup, Form, TextArea, Button } from 'semantic-ui-react';
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
// 	minLength: number,
// 	maxLength: number,
// 	mandatory: boolean,
// 	size: number, // number of rows 2, 3, 4 etc
// 	style: string,
// 	error: string,
// 	handleChange: () => void,
// 	handleBlur: () => any
// }

const TextAreaElement = (props) => {

	const [isFocus, onFocus] = useState(false);
	const textInput = useRef(null);

	return (
		<Form.Field>
			{
				props.label &&
				<span
					className={`textarea-element-label ${(isFocus === true || props.value !== '') && 'isFocus'}`}
					onClick={() => textInput.current.focus()}
				>
					{props.label}
				</span>
			}
			<Grid>
				<Grid.Row>
					<Grid.Column width={(props.helpText && props.helpText.content) ? 15 : 16}>
						<TextArea
							ref={textInput}
							className={`textarea-element ${(isFocus === true || props.value !== '') && 'isFocus'}`}
							name={props.id}
							placeholder={(isFocus === true) ? props.placeholder : null}
							value={props.value}
							disabled={props.disabled}
							rows={props.size}
							style={props.style}
							onChange={props.handleChange}
							onFocus={() => onFocus(true)}
							onBlur={() => onFocus(false)}
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
		</Form.Field >
	)
}

export default TextAreaElement;