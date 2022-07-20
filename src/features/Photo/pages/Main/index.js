import React from "react";
import Banner from "components/Banner";
import Images from "constants/images";

import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto, updatePhoto } from "features/Photo/photoSlice";

function MainPage() {

	const navigate = useNavigate();

	const dispatch = useDispatch();
	const photos = useSelector((state) => state.photos);
	const photosSorted = [...photos].sort((a, b) => (a.id < b.id) ? 1 : -1);


	const handlePhotoEditClick = (photo) => {
		console.log("Edit: ", photo);
		const editPhotoUrl = `/photos/${photo.id}`;
		navigate(editPhotoUrl);
	};

	const handlePhotoRemoveClick = (photo) => {
		console.log("Remove: ", photo);
		const removePhotoId = photo.id;
		const action = removePhoto(removePhotoId);
		dispatch(action);
	};

	return (
		<div className="photo-main">
			<Banner
				title="Your awesome photos 🤞"
				backgroundUrl={Images.PINK_BG}
			/>

			<Container className="text-center">
				<div className="py-5">
					<Link to="/photos/add">Add new photo</Link>
				</div>

				<PhotoList
					photoList={photosSorted}
					onPhotoEditClick={handlePhotoEditClick}
					onPhotoRemoveClick={handlePhotoRemoveClick}
				/>
			</Container>
		</div>
	);
}

export default MainPage;
