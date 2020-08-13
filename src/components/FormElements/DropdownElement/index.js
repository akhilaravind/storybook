import React, { useState, useRef } from 'react';
import { Grid, Popup, Button, Dropdown, Label } from 'semantic-ui-react';
import ErrorMessage from './../../ErrorMessage';
import './index.scss';

// type propTypes = {
// 	id: string,
// 	name: string,
// 	label: string,
// 	placeholder: string,
// 	icon: string,
// 	iconPosition?: string, // left, right
// 	labelPosition?: string, // left, right
// 	helpText?: object,
// 	value: string,
// 	disabled: boolean,
// 	selection: boolean,
// 	search: boolean,
// 	multiple: boolean,
// 	fluid: boolean,
// 	options: Array<Object>,
// 	mandatory: boolean,
// 	style: string,
// 	error: string,
// 	handleChange: () => any,
// 	handleBlur: () => any
// }

const DropdownElement = (props) => {

	const [isFocus] = useState(false);
	const dropdownRef = useRef(null);

	return (
		<React.Fragment>
			<Label
				basic
				className={`dropdown-element-label ${(isFocus === true || props.value !== null) && 'isFocus'}`}
				onClick={() => dropdownRef.current.focus()}
			>
				{props.label}
			</Label>
			<Grid>
				<Grid.Row>
					<Grid.Column width={(props.helpText && props.helpText.content) ? 15 : 16}>
						<Dropdown
							ref={dropdownRef}
							className={`dropdown-element ${(isFocus === true || props.value !== null) && 'isFocus'}`}
							id={props.id}
							name={props.id}
							value={props.value}
							placeholder={props.placeholder}
							selection={props.selection}
							search={props.search}
							multiple={props.multiple}
							fluid={props.fluid}
							options={props.options}
							onChange={(_, { value }) => props.handleChange(props.id, value)}
							onBlur={props.handleBlur}
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
		</React.Fragment>
	)
}

export default DropdownElement;