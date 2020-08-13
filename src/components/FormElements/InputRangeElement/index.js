import React from 'react';
import { Grid, Form, Label, Popup, Button } from 'semantic-ui-react';
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
// 	mandatory?: boolean,
// 	size?: string, // mini, small, large, big, huge, massive
// 	style?: string,
// 	error: string,
// 	handleChange: () => void
// }

const InputRangeElement = (props) => {

	const setFieldValue = (value) => {
		props.handleChange(value);
	}

	const setValue = (value) => {
		for (let i = 0; i < props.options.length; i++) {
			if (i + 1 === value) {
				return props.options[i].value;
			}
		}
	}

	const setStyle = (index) => {
		let width = 100 / 4;
		let textAlign = index === 0 ? 'left' : (index === props.options.length - 1 ? 'right' : 'center');
		return { 'width': width + '%', textAlign: textAlign };
	}

	return (
		<React.Fragment>
			<Form.Field>
				{
					props.label &&
					<Label
						basic
						className='input-range-element-label'
					>
						{props.label}
					</Label>
				}
				<Grid>
					<Grid.Row>
						<Grid.Column width={(props.helpText && props.helpText.content) ? 15 : 16}>
							<datalist id="tickmarks">
								{
									props.options.map((option, index) => {
										return <option value={option.value} label={option.value} key={index} style={setStyle(index)} />
									})
								}
							</datalist>
							<input
								list="tickmarks"
								type="range"
								min="1"
								max="6"
								value={props.value}
								id={props.id}
								name={props.id}
								className='input-range-element'
								onChange={value => setFieldValue(value)}
							/>
							<p>Value: {setValue(props.value)}</p>
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

export default InputRangeElement;