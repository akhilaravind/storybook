import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createYupSchema } from './../../utils';
import {
	HeaderElement,
	LabelElement,
	MessageElement,
	TooltipElement,
	DividerElement,
	ImageElement,
	InputTextElement,
	TextAreaElement,
	InputDateElement,
	InputTimeElement,
	InputRangeElement,
	DropdownElement,
	CheckboxElement,
	RadioElement,
	FileUpload,
	ButtonElement
} from './../FormElements';
import './index.scss';

class DynamicForm extends Component {
	constructor(props) {
		super(props);
		this.formikForm = React.createRef();
		this.state = {
			elements: props.elements,
			elementTypes: {
				HeaderElement,
				LabelElement,
				MessageElement,
				TooltipElement,
				DividerElement,
				ImageElement,
				InputTextElement,
				TextAreaElement,
				InputDateElement,
				InputTimeElement,
				InputRangeElement,
				DropdownElement,
				CheckboxElement,
				RadioElement,
				FileUpload,
				ButtonElement
			},
		};
	}

	UNSAFE_componentWillReceiveProps = (props) => {
		const { elements } = this.state;
		if (props.elements !== elements) {
			this.setState({ elements: props.elements }, () =>
				this.formikForm.setErrors({})
			);
		}
	};

	getInitialValues = (elements) => {
		let initialValues = {};
		elements.forEach((field) => {
			if (!initialValues[field.id]) {
				initialValues[field.id] = field.value || '';
			}
		});
		return initialValues;
	};

	getValidationSchema = (elements) => {
		let yepSchema = elements.reduce(createYupSchema, {});
		let validateSchema = Yup.object().shape(yepSchema);
		return validateSchema;
	};

	render() {
		const { elements } = this.state;
		// const onDateChange = (props, element, value) => {
		// 	let values = props.values;
		// 	for (const property in values) {
		// 		for (let i = 0; i < elements.length; i++) {
		// 			if (elements[i].id === element.id) {
		// 				elements[i].value = value;
		// 				values[property] = value;
		// 			}
		// 		}
		// 	}
		// };

		return (
			<div className='dynamic-form'>
				<Formik
					innerRef={(p) => (this.formikForm = p)}
					initialValues={this.getInitialValues(elements)}
					validationSchema={this.getValidationSchema(elements)}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							for (const property in values) {
								for (let i = 0; i < elements.length; i++) {
									if (elements[i].id === parseInt(property)) {
										elements[i].value = values[property];
									}
								}
							}

							setSubmitting(false);

							if (values) {
								let updatedElements = [];
								for (let i = 0; i < elements.length; i++) {
									updatedElements.push({
										id: elements[i].id,
										type: elements[i].type,
										name: elements[i].name,
										value: elements[i].value,
									});
								}

								console.log('values', values);
								console.log('elements', elements);
								console.log('updatedElements', updatedElements);
								alert('Form Submitted');
							}
						}, 500);
					}}
				>
					{(props) => (
						<Form onSubmit={props.handleSubmit}>
							{
								elements.map((element, index) => {
									switch (element.type) {
										case 'HEADER_ELEMENT':
											return <HeaderElement
												{...element}
												key={element.id + element.type + index}
												value={props.values[element.id]}
											/>;
										case 'LABEL_ELEMENT':
											return <LabelElement
												{...element}
												key={element.id + element.type + index}
												value={props.values[element.id]}
											/>;
										case 'MESSAGE_ELEMENT':
											return <MessageElement
												{...element}
												key={element.id + element.type + index}
												value={props.values[element.id]}
											/>;
										case 'TOOLTIP_ELEMENT':
											return <TooltipElement
												{...element}
												key={element.id + element.type + index}
												value={props.values[element.id]}
											/>;
										case 'DIVIDER_ELEMENT':
											return <DividerElement
												{...element}
												key={element.id + element.type + index}
												value={props.values[element.id]}
											/>;
										case 'IMAGE_ELEMENT':
											return <ImageElement
												{...element}
												key={element.id + element.type + index}
												value={props.values[element.id]}
											/>;
										case 'TEXTFIELD_ELEMENT':
											return (
												<InputTextElement
													{...element}
													key={element.id + element.type + index}
													value={props.values[element.id]}
													error={
														props.errors.hasOwnProperty(element.id) &&
														props.errors[element.id]
													}
													handleChange={props.handleChange}
												/>
											);
										case 'TEXTAREA_ELEMENT':
											return (
												<TextAreaElement
													{...element}
													key={element.id + element.type + index}
													value={props.values[element.id]}
													error={
														props.errors.hasOwnProperty(element.id) &&
														props.errors[element.id]
													}
													handleChange={props.handleChange}
												/>
											);
										case 'INPUTDATE_ELEMENT':
											return (
												<InputDateElement
													{...element}
													key={element.id + element.type + index}
													value={props.values[element.id]}
													error={
														props.errors.hasOwnProperty(element.id) &&
														props.errors[element.id]
													}
													handleChange={props.setFieldValue}
													handleBlur={props.handleBlur}
												/>
											);
										case 'INPUTTIME_ELEMENT':
											return (
												<InputTimeElement
													{...element}
													key={element.id + element.type + index}
													value={props.values[element.id]}
													error={
														props.errors.hasOwnProperty(element.id) &&
														props.errors[element.id]
													}
													handleChange={props.setFieldValue}
													handleBlur={props.handleBlur}
												/>
											);
										case 'INPUT_RANGE_ELEMENT':
											return (
												<InputRangeElement
													{...element}
													key={element.id + element.type + index}
													value={props.values[element.id]}
													error={
														props.errors.hasOwnProperty(element.id) &&
														props.errors[element.id]
													}
													handleChange={props.handleChange}
												/>
											);
										case 'DROPDOWN_ELEMENT':
											return (
												<DropdownElement
													{...element}
													key={element.id + element.type + index}
													value={props.values[element.id]}
													touched={props.touched[element.id]}
													error={
														props.errors.hasOwnProperty(element.id) &&
														props.errors[element.id]
													}
													handleChange={props.setFieldValue}
													handleBlur={props.handleBlur}
												/>
											);
										case 'CHECKBOX_ELEMENT':
											return (
												<CheckboxElement
													{...element}
													key={element.id + element.type + index}
													value={props.values[element.id]}
													error={
														props.errors.hasOwnProperty(element.id) &&
														props.errors[element.id]
													}
													handleChange={props.handleChange}
													handleBlur={props.handleBlur}
												/>
											);
										case 'RADIO_ELEMENT':
											return (
												<RadioElement
													{...element}
													key={element.id + element.type + index}
													value={props.values[element.id]}
													error={
														props.errors.hasOwnProperty(element.id) &&
														props.errors[element.id]
													}
													handleChange={props.handleChange}
													handleBlur={props.handleBlur}
												/>
											);
										case 'FILEUPLOAD_ELEMENT':
											return (
												<FileUpload
													{...element}
													key={element.id + element.type + index}
													value={props.values[element.id]}
													error={
														props.errors.hasOwnProperty(element.id) &&
														props.errors[element.id]
													}
													handleChange={props.setFieldValue}
													handleBlur={props.handleBlur}
												/>
											);
										default:
											return <ButtonElement
												{...element}
												key={element.id + element.type + index}
												value={props.values[element.id]}
											/>;
									}
								})
							}
							<div style={{ marginTop: '10px' }}>
								<Button
									type='submit'
									size='mini'
									color='blue'
									content='Submit'
									disabled={props.isSubmitting}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		);
	}
}

export default DynamicForm;
