/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAddressCard,
	faAirFreshener,
} from "@fortawesome/free-solid-svg-icons";
import classes from "../about-page/aboutPage.module.scss";
const AboutHero = () => (
	<>
		<div className={classes.content}>
			<div className={classes.about}>
				<h3 className={classes.about__discription__title}>Our purppse</h3>

				<div className={classes.about__main}>
					<img
						src="./assets/images/100-Stunning-Purple-Flowers-1.jpeg"
						alt="curry_hair"
						className={classes.about__main__img}
					/>
				</div>
				<div className={classes.about__discription}>
					<p className={classes.about__discription__body}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Praesentium ad, numquam asperiores nisi, laudantium ab eligendi
						voluptates consectetur animi placeat fuga aut aliquid perspiciatis
						officiis sint consequatur dolorem quo magnam.
					</p>
					<div className={classes.about__card}>
						<div className={classes.about__mainCard}>
							<h3 className={classes.about__mainCard__title}>the Goal</h3>
							<p className={classes.about__mainCard__copy}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. In
								dicta ducimus facilis consequatur beatae, ad esse rerum amet vel
								officiis ab iusto aliquid laborum? Mollitia similique quos
								excepturi obcaecati deserunt.
							</p>
							<button className={classes.about__mainCard__btn}>
								learn more
							</button>
						</div>
						<div className={classes.about__mainCard}>
							<h3 className={classes.about__mainCard__title}>the hope</h3>
							<p className={classes.about__mainCard__copy}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. In
								dicta ducimus facilis consequatur beatae, ad esse rerum amet vel
								officiis ab iusto aliquid laborum? Mollitia similique quos
								excepturi obcaecati deserunt.
							</p>
							<button className={classes.about__mainCard__btn}>
								learn more
							</button>
						</div>
						<div className={classes.about__mainCard}>
							<h3 className={classes.about__mainCard__title}>the vison </h3>
							<p className={classes.about__mainCard__copy}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. In
								dicta ducimus facilis consequatur beatae, ad esse rerum amet vel
								officiis ab iusto aliquid laborum? Mollitia similique quos
								excepturi obcaecati deserunt.
							</p>
							<button className={classes.about__mainCard__btn}>
								learn more
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default AboutHero;
