import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from 'yup';
import './PhotoForm.scss'

/*
Khi  làm một custom control, thì cần để ý tới 4 thứ: name, value, onChange và onBlur.
	- name: key duy nhất trong form để  biết nó là control nào.
	- value: để biết giá trị hiện tại của  control.
	- onChange: để handle khi có thay đổi giá trị của control.
	- onBlur: để biết là control đó bị touched chưa, nếu touched rồi mà value invalid thì show validation error. Còn mặc định mới vào nó ko touched, nếu dù nó bị validation error, nhưng ko có show.
*/

PhotoForm.propTypes = {
	onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
	onSubmit: null,
};

function PhotoForm(props) {
	const { initialValues, isAddMode } = props;

	const validationSchema = Yup.object().shape({
		title: Yup.string().required('This field is required.'),

		categoryId: Yup.number().required('This field is required.').nullable(),

		// photo: Yup.string().required('This field is required.')
		photo: Yup.string().when('categoryId', {
			// Nếu category chọn item đầu tiên thì sẽ required field photo
			is: 1,
			then: Yup.string().required('This field is required.'),
			otherwise: Yup.string().notRequired(),
		 })

	})

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={props.onSubmit}
		>
			{(formikProps) => {
				// do something here
				const { values, errors, touched, isSubmitting } = formikProps;

				return (
					<Form>
						<FastField 
							name="title"
							component={InputField}

							label="Title"
							placeholder="Eg: Wow nature ..."
						/>

						<FastField 
							name="categoryId"
							component={SelectField}

							label="Category"
							placeholder="What's your photo category?"
							options={PHOTO_CATEGORY_OPTIONS}
						/>

						<FastField
							name="photo"
							component={RandomPhotoField}

							label="Photo"
						/>

						<FormGroup>
							<Button type="submit" color={isAddMode ? 'primary' : 'success'}>
								{isSubmitting && <Spinner animation="border" size="sm" />}
								{isAddMode ? 'Add to album' : 'Update your photo'}
								
							</Button>
						</FormGroup>
					</Form>
				);
			}}
		</Formik>
	);
}

export default PhotoForm;
