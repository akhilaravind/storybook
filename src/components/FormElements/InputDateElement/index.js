// https://reactdatepicker.com/
import React, { useState, useRef } from 'react';
import { Grid, Popup, Form, Label, Button } from 'semantic-ui-react';
import * as moment from 'moment/moment';
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

const InputDateElement = (props) => {

	const [date, setDate] = useState(props.value !== '' ? new Date(props.value) : new Date());
	const [isFocus, onFocus] = useState(false);
	const refInput = useRef(null);

	const setFieldValue = (date) => {
		setDate(date);
		props.handleChange(props.id, date);
	}

	return (
		<Form.Field>
			{
				props.label &&
				<React.Fragment>
					<Label
						basic
						className={`input-date-element-label ${(isFocus === true || date !== '') && 'isFocus'}`}
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
							className={`input-date-element ${(isFocus === true || date !== '') && 'isFocus'}`}
							peekNextMonth
							showYearDropdown
							showMonthDropdown
							scrollableYearDropdown
							id={props.id}
							name={props.id}
							isClearable={props.isClearable}
							placeholderText={props.placeholder}
							// locale={props.locale}
							dateFormat={props.dateFormat}
							selected={date}
							minDate={moment((props.minDate && props.minDate !== null) ? new Date(props.minDate) : '1950/01/01', props.dateFormat)}
							maxDate={moment((props.maxDate && props.maxDate !== null) ? new Date(props.maxDate) : '2050/01/01', props.dateFormat)}
							// onChange={date => setDate(date)}
							onChange={date => setFieldValue(date)}
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

export default InputDateElement;