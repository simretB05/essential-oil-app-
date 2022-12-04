/** @format */
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import classes from "../Register/register.module.scss";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { LoginUser } from "../../features/auth/authSlice";
function HomeLogin() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const dispatch = useDispatch();
	const { user, isLoading, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	// submit function

	const OnSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email,
			password,
		};
		dispatch(LoginUser(userData));
	};

	return (
		<div className={classes.content}>
			<div className={classes.section}>
				<section className={classes.main}>
					<h1 className={classes["main-title"]}>
						<FaSignInAlt /> Login
					</h1>
					<p className={classes["main-text"]}>
						Please Login and access your profile information and your Cart Items
						!
					</p>
				</section>
				<section className={classes["form"]}>
					<form onSubmit={OnSubmit}>
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

export default HomeLogin;
