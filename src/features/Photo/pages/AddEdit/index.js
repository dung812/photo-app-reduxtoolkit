import React from "react";
import Banner from "components/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import "./AddEdit.scss";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";


function AddEditPage() {
	let navigate = useNavigate();
	const { photoId } = useParams();

	const lengthListPhoto = useSelector(state => state.photos.length)

	const editedPhoto = useSelector((state) =>
		state.photos.find((photo) => photo.id === +photoId)
	);
	const dispatch = useDispatch();

	const isAddMode = !photoId;

	const initialValues = isAddMode
		? {
				title: "",
				categoryId: null,
				photo: "",
		  }
		: editedPhoto;

	const handleSubmit = (values) => {

		// Fake loading when call api after submit event
		return new Promise((resolve) => {
			console.log("Form Submit: ", values);
			setTimeout(() => {
				if (isAddMode) {
					// Case add
					const newPhoto = {
						id: lengthListPhoto + 1,
						...values,
					}
					const action = addPhoto(newPhoto);
					dispatch(action);
				} else {
					// Case edit
					const action = updatePhoto(values);
					dispatch(action);
				}

				navigate("/photos");
				resolve(true);
			}, 2000);
		});

	};

	// const { photoId } = useParams();
	return (
		<div className="photo-edit">
			<Banner
				title="Pick your amazing photo 🤣"
				backgroundUrl={Images.ORANGE_BG}
			/>
			<div className="photo-edit__form">
				<PhotoForm 
					isAddMode={isAddMode}
					initialValues={initialValues} 
					onSubmit={handleSubmit} 
				/>
			</div>
		</div>
	);
}

export default AddEditPage;
