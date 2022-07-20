import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import productApi from "./api/productApi";
import SignIn from "features/Auth/pages/SignIn";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
	// const [productList, setProductList] = useState([]);

	// useEffect(() => {
	// 	const fetchProductList = async () => {
	// 		try {
	// 			const params = {
	// 				_page: 1,
	// 				_limit: 50,
	// 			};
	// 			const response = await productApi.getAll(params);

	// 			setProductList(response.data);

	// 		} catch (error) {
	// 			console.log("Failed to fetch product list: ", error);
	// 		}
	// 	};

	// 	fetchProductList();
	// }, []);

	return (
		<div className="photo-app">
			<Suspense fallback={<div className="loading"></div>}>
				<Router>
					<Header />

					<Routes>
						<Route path="/" element={<Photo />} />
						<Route path="/photos/*" element={<Photo />} />
						<Route path="/sign-in" element={<SignIn />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
