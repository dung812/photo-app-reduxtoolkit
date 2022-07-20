import React from "react";
import PropTypes from "prop-types";
import { Button, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from 'formik';

InputField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
};
InputField.defaultProps = {
	type: "text",
	label: "",
	placeholder: "",
	disabled: false,
};

function InputField(props) {

	const {
		field, form,
		type, label, placeholder, disabled,
	} = props

	const { name, value, onChange, onBlur } = field;

	const { errors, touched } = form;
	const showError =  errors[name] && touched[name];

	return (
		<FormGroup>
			{label && <Label for={name}>{label}</Label>}
			<Input 
				id={name}
				// name={name} 
				// value={value}
				// onChange={onChange}
				// onBlur = {onBlur}
				{...field}

				type={type}
				disabled={disabled}
				placeholder={placeholder}
				invalid={showError}
			/>

			{/* {showError && <p>{errors[name]}</p> } ra tag p ko có sẵn css */}
			{/* {showError && <FormFeedback>{errors[name]}</FormFeedback> } dùng thẻ bootstrap */}
			<ErrorMessage name={name} component={FormFeedback} />

		</FormGroup>
	);
}

export default InputField;
