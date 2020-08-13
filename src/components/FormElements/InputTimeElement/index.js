import React, { useState, useRef } from 'react';
import { Grid, Popup, Form, Label, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import ErrorMessage from './../../ErrorMessage';
import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

// type propTypes = {
// 	id: number,
// 	name: string,
// 	label: string,
// 	icon: string, // user, plug
// 	isClearable: boolean,
// 	disabled: boolean,
// 	placeholder: string,
// 	locale: string,
// 	dateFormat: string,
// 	minDate: string,
// 	maxDate: string,
// 	style: string,
// 	onClick: () => void,
// 	handleChange: () => void,
// 	handleBlur: () => void
// }

const InputTimeElement = (props) => {

	const [time, setTime] = useState(props.value !== '' ? new Date(props.value) : new Date());
	const [isFocus, onFocus] = useState(false);
	const refInput = useRef(null);

	const setFieldValue = (time) => {
		setTime(time);
		props.handleChange(props.id, time);
	}

	return (
		<Form.Field>
			{
				props.label &&
				<React.Fragment>
					<Label
						basic
						className={`input-time-element-label ${(isFocus === true || time !== '') && 'isFocus'}`}
						onClick={() => refInput.current.setFocus()}
					>
						{props.label}
					</Label>
				</React.Fragment>
			}
			<Grid>
				<Grid.Row>
					<Grid.Column width={(props.helpText && props.helpText.content) ? 15 : 16}>
						<DatePicker
							ref={refInput}
							className={`input-time-element ${(isFocus === true || time !== '') && 'isFocus'}`}
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={15}
							timeCaption="Time"
							id={props.id}
							name={props.id}
							isClearable={props.isClearable}
							placeholderText={props.placeholder}
							dateFormat={props.dateFormat}
							selected={time}
							onChange={time => setFieldValue(time)}
							onFocus={() => onFocus(true)}
							onBlur={() => onFocus(false)}
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
	)
}

export default InputTimeElement;