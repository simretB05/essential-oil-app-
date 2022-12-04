/** @format */

import React, { useState } from "react";
import classes from "../Header/header.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSignInAlt, FaSignOut, FaUser } from "react-icons/fa";
// import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	function menuToggleHandler(e) {
		e.preventDefault();
		setMenuOpen((p) => !p);
	}

	const menuCloseHandler = () => {
		setMenuOpen(false);
	};

	return (
		<header className={classes["header"]}>
			<div className={classes["header-toggle"]}>
				<button
					className={classes["header-toggle__btn"]}
					onClick={menuToggleHandler}
					aria-label="Open menu"
				>
					<div
						className={
							menuOpen
								? classes["header-toggle__btn-open"]
								: classes["header-toggle__btn-burger"]
						}
					></div>
				</button>
			</div>
			<NavLink className={classes["header__link"]} to="/">
				<h2 className={classes["header__logo"]}>essential oils</h2>
			</NavLink>
			<div className={classes["nav-card"]}>
				<ul className={classes["nav"]}>
					<li className={classes["nav-list"]}>
						<Link className={classes["nav-list__link"]} to="/collection">
							Collection
						</Link>
					</li>
					<li className={classes["nav-list"]}>
						<Link className={classes["nav-list__link"]} to="/about">
							About
						</Link>
					</li>
					<li className={classes["nav-list"]}>
						<Link className={classes["nav-list__link"]} to="/contact">
							Contact
						</Link>
					</li>
					<li className={classes["nav-list"]}>
						<Link className={classes["nav-list__link"]} to="/login">
							<FaSignInAlt /> Login
						</Link>
					</li>
					<li className={classes["nav-list"]}>
						<Link className={classes["nav-list__link"]} to="/register">
							<FaUser /> Register
						</Link>
					</li>
				</ul>
				<button className={classes.nav__cart} aria-label="Open menu">
					<p className={classes.nav__cart__text}>0</p>
					<img
						className={classes.nav__cart__img}
						src="../assets/icons/icon-cart.svg"
						alt="shopping cart"
					/>
				</button>
			</div>
		</header>
	);
}

export default Header;
