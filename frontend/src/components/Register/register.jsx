/** @format */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOut, FaUser } from "react-icons/fa";
import classes from "../Register/register.module.scss";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, reset } from "../../features/auth/authSlice";

function HomeRegister() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, isLoading, isSuccess, message, isError } = useSelector(
		(state) => state.auth
	);
	useEffect(() => {
		if (isError) {
			toast.error(message);
		}
		//redirect when loagged in
		if (isSuccess || user) {
			navigate("/");
		}
		dispatch(reset());
	}, [isError, isSuccess, user, message, navigate, dispatch]);
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	// submit function

	const OnSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error("passwords do not match");
		} else {
			const userData = {
				name,
				email,
				password,
			};
			dispatch(registerUser(userData));
		}
	};

	return (
		<div className={classes.content}>
			<div className={classes.section}>
				<section className={classes.main}>
					<h1 className={classes["main-title"]}>
						<FaUser /> Register
					</h1>
					<p className={classes["main-text"]}>
						Please create an account to login and access your profile
						information!
					</p>
				</section>
				<section className={classes["form"]}>
					<form onSubmit={OnSubmit}>
						<div className={classes["form-group"]}>
							<input
								type="text"
								id="name"
								name="name"
								value={name}
								placeholder="Enter your name"
								required
								onChange={onChange}
								// onBlur={validateEmailHandler}
							/>
						</div>
						<div className={classes["form-group"]}>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter your email"
								required
								onChange={onChange}
								// onBlur={validatePasswordHandler}
							/>
						</div>
						<div className={classes["form-group"]}>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								value={password}
								placeholder="Enter your Password"
								required
								onChange={onChange}
								// onBlur={validateEmailHandler}
							/>
						</div>
						<div className={classes["form-group"]}>
							<input
								type="password"
								className="form-control"
								id="password2"
								name="password2"
								value={password2}
								placeholder="Confirm your Password"
								required
								onChange={onChange}
								// onBlur={validateEmailHandler}
							/>
						</div>
						<div className={classes["form-group"]}>
							<button
								type="submit"
								id="submitData"
								className={classes.form__input__submit__btn}
							>
								Create Account
							</button>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
}

export default HomeRegister;
