/** @format */
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModels");

//@desc Register a new user
//@route/api/users
// @access puplic

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	//validation
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("please include all fields");
	}
	// Find if user alrady exists
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User alrady exist");
	}
	//Hash password

	const salt = await bcrypt.genSalt(10);
	const hashdPassword = await bcrypt.hash(password, salt);

	//create user
	const user = await User.create({
		name,
		email,
		password: hashdPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new console.error("Invalid user data");
	}
	// res.send("Register Route");
});
//@desc Register a new user
//@route/api/users/login
// @access puplic

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	// Check user and passwords match
	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid Credntials");
	}

	// res.send( "login Route" );
});

//@desc GET current  user
//@route/api/users/me
// @access private

const getMe = asyncHandler(async (req, res) => {
	const user = {
		id: req.user._id,
		email: req.user.email,
		name: req.user.name,
	};
	res.status(200).json(user);
});
//Generate token
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "60d",
	});
};

module.exports = {
	registerUser,
	loginUser,
	getMe,
};
