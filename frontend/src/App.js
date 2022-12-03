/** @format */
import React from "react";
import SharedLayouts from "./pages/sharedLayouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Routes>
						<Route path="/" element={<SharedLayouts />}>
							<Route path="/" exact element={<Home />} />
							<Route path="collection/" exact element={<Collection />} />
							<Route path="/about" exact element={<About />} />
							<Route path="/contact" exact element={<Contact />} />
							<Route path="/login" exact element={<Login />} />
							<Route path="/register" exact element={<Register />} />
						</Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
