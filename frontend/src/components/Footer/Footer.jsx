/** @format */

import React from "react";
// import {Link} from 'react-router-dom';
import classes from "../Footer/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faTwitter,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
	<footer className={classes.footer}>
		<div className={classes.footer__card}>
			<p className={classes.footer__card__title}> Be essential!</p>
			<form className={classes.form}>
				<div className={classes.form__input}>
					<input
						type="password"
						className={classes.form__control}
						id="inputPassword2"
						placeholder="Email address"
					/>
				</div>
				<div className={classes.form__submit}>
					<button type="submit" className={classes.form__btn}>
						subscribe
					</button>
				</div>
			</form>
		</div>
		<div className={classes.footer__info}>
			<div className={classes.footer__services}>
				<ul className={classes.footer__services__list}>
					<li className={classes.footer__services__list__item}>
						Customer care
					</li>
					<li className={classes.footer__services__list__item}>
						Terms & Conditions
					</li>
					<li className={classes.footer__services__list__item}>My Account</li>
				</ul>
			</div>
			<div className={classes.footer__iconLinks}>
				<ul className={classes.footer__iconLinks__list}>
					<li className={classes.footer__iconLinks__list__item}>
						<FontAwesomeIcon
							className={classes.footer__iconLinks__list__facebookIcon}
							icon={faFacebook}
						/>
					</li>
					<li className={classes.footer__iconLinks__list__item}>
						<FontAwesomeIcon
							className={classes.footer__iconLinks__list__twitter}
							icon={faTwitter}
						/>
					</li>
					<li className={classes.footer__iconLinks__list__item}>
						<FontAwesomeIcon
							className={classes.footer__iconLinks__list__instagramIcon}
							icon={faInstagram}
						/>
					</li>
				</ul>
			</div>
		</div>
		<div className={classes.footer__copyRight}>
			<p className={classes.footer__copyRight__text}>
				© Simret Design 2022 | Photography, design and website construction by
				simret Design 2022
			</p>
		</div>
	</footer>
);

export default Footer;
