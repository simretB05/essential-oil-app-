/** @format */

const express = require("express");
const router = express.Router();
const {
	registerUser,
	loginUser,
	getMe,
} = require("../controllers/userControll");
const { protect } = require("../middleware/authMiddleware");

//look in to this
// router.post("/", (req, res) => {
// 	res.send("Register Route");
// });
// router.post("/login", (req, res) => {
// 	res.send("Login Route");
// });
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
