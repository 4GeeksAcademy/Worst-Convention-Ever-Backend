import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import stormtroopers from "../../img/stormtroopers.jpg";
import conlogo from "../../img/conlogo.png";
import CountdownTimer from "../component/countdownTimer";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
		actions.fetchGetAllComicVendors()
	}, [])

	return (

		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}

		<div className="wrapper" style={{ textAlign: "center" }}>
			<div className="row">
				<div className="col-5">

					<CountdownTimer />
				</div>
				<div className="col-7">
					<img src={conlogo} className="homeImage" alt="banner" />
				</div>


			</div>

			<div>
				<img src={stormtroopers} className="homeImage" alt="banner" />
				<button className="btn btn-light mx-3">
					<Link to="/guest-form"></Link>
					Purchase Tickets!
				</button>
				<button className="btn btn-light mx-3">
					<Link to="/transportation"></Link>
					Plan Your Trip!</button>
				<button className="btn btn-light mx-3">
					<Link to="/guest-form"></Link>
					Join the Mailing List!</button>
			</div>
			<div className="blurb-container my-3">
				About the Convention blurb lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
				accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
				duiLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
				eleifend gravida, nulla nunc varius lectus, nec rutrum justo duiLorem ipsum dolor sit.

			</div>


		</div>
	);
};
