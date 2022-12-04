/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";
import { faHandsHoldingChild } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faSolarPanel } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classes from "../main-hero/mainHero.module.scss";
import CommentSlider from "../comments-slider/CommentSlider";
import SliderHomeData from "../HomeSlider/SliderHomeData";
import HomeCarousel from "../HomeSlider/HomeSlider";

const Hero = () => (
	<>
		<div className={classes.content}>
			<div className={classes.main}>
				<HomeCarousel slidHomeData={SliderHomeData} />
				<div className={classes.main__hero}>
					<h1 className={classes.hero__title}> learn about Our services </h1>
					<p className={classes.hero__body}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
						minima, odit et numquam fugit deserunt dicta excepturi aperiam
						quibusdam, cupiditate quam tempore consequuntur magnam.
					</p>
					<div className={classes.service}>
						<div className={classes.service__card}>
							<FontAwesomeIcon
								icon={faSyringe}
								className={classes.FontAwesomeIcon}
								size="2x"
							/>
							<h3 className={classes.service__card__title}>oils & medicen</h3>
							<p className={classes.service__card__body}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
								eum, Laudantium nisi harum voluptatem
							</p>
						</div>
						<div className={classes.service__card}>
							<FontAwesomeIcon
								className={classes.FontAwesomeIcon}
								icon={faSolarPanel}
								size="2x"
							/>
							<h3 className={classes.service__card__title}>green energy</h3>
							<p className={classes.service__card__body}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
								eum, Laudantium nisi harum voluptatem
							</p>
						</div>
						<div className={classes.service__card}>
							<FontAwesomeIcon
								icon={faHandsHoldingChild}
								className={classes.FontAwesomeIcon}
								size="2x"
							/>
							<h3 className={classes.service__card__title}>support</h3>
							<p className={classes.service__card__body}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
								eum, Laudantium nisi harum voluptatem
							</p>
						</div>
						<div className={classes.service__card}>
							<FontAwesomeIcon
								icon={faBriefcase}
								className={classes.FontAwesomeIcon}
								size="2x"
							/>
							<h3 className={classes.service__card__title}>support</h3>
							<p className={classes.service__card__body}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
								eum, Laudantium nisi harum voluptatem
							</p>
						</div>
					</div>
					<div className={classes.type}>
						<div className={classes.type__card}>
							<img
								className={classes.type__card__img}
								src="./assets/images/imgam.jpg"
								alt="women__image"
							/>
						</div>
						<div className={classes.type__card}>
							<h2 className={classes.type__card__title}>
								New to essential oils?
							</h2>
							<p className={classes.type__card__copy}>
								Essential oils are aromatic, concentrated plant extracts that
								are carefully obtained through steam distillation, cold pressing
								or resin tapping. We offer essential oils, blends and
								oil-infused products with the optimal levels of specific,
								naturally occurring essential oil constituents to maximize their
								potency.
							</p>
						</div>
					</div>
				</div>
				<div id="bannerSection" className={classes.card__container}>
					<div id="service" className={classes.card}>
						<img
							className={classes.card__img}
							src="./assets/images/images4.jpg"
							alt="image_card "
						/>
						<div className={classes.card__body}>
							<h3 className={classes.card__body__title}>purification</h3>
							<p className={classes.card__body__copy}>
								kick the worst odours to the curb
							</p>
						</div>
						<Link className={classes.card__btn__link__pure} to="/collection">
							<button className={classes.card__btn__pure}>learn more</button>
						</Link>
					</div>
					<div id="service" className={classes.card}>
						<img
							className={classes.card__img}
							src="./assets/images/images6.jpg"
							alt="image_card "
						/>
						<div className={classes.card__body}>
							<h3 className={classes.card__body__title}>lavender</h3>
							<p className={classes.card__body__copy}>find calm in a bottle</p>
						</div>
						<Link className={classes.card__btn__link__pure} to="/collection">
							<button className={classes.card__btn__pure}>learn more</button>
						</Link>
					</div>
					<div id="service" className={classes.card}>
						<img
							className={classes.card__img}
							src="./assets/images/images5.jpg"
							alt="image_card "
						/>
						<div className={classes.card__body}>
							<h3 className={classes.card__body__title}>lemon</h3>
							<p className={classes.card__body__copy}>
								bright brust of fresh-Squezed
							</p>
						</div>
						<Link className={classes.card__btn__link__pure} to="/collection">
							<button className={classes.card__btn__pure}>learn more</button>
						</Link>
					</div>
					<div id="service" className={classes.card}>
						<img
							className={classes.card__img}
							src="./assets/images/images7.jpg"
							alt="image_card "
						/>
						<div className={classes.card__body}>
							<h3 className={classes.card__body__title}>peppermint</h3>
							<p className={classes.card__body__copy}>
								a break cool-down when you need it most
							</p>
						</div>
						<Link className={classes.card__btn__link__pure} to="/collection">
							<button className={classes.card__btn__pure}>learn more</button>
						</Link>
					</div>
					<div id="service" className={classes.card}>
						<img
							className={classes.card__img}
							src="./assets/images/images11.jpg"
							alt="image_card"
						/>
						<div className={classes.card__body}>
							<h3 className={classes.card__body__title}>thieves</h3>
							<p className={classes.card__body__copy}>
								add a boost of warmth to your home with thieves
							</p>
						</div>
						<Link className={classes.card__btn__link__pure} to="/collection">
							<button className={classes.card__btn__pure}>learn more</button>
						</Link>
					</div>
					<div id="service" className={classes.card}>
						<img
							className={classes.card__img}
							src="./assets/images/images12.jpg"
							alt="image_card "
						/>
						<div className={classes.card__body}>
							<h3 className={classes.card__body__title}>tea-tree</h3>
							<p className={classes.card__body__copy}>
								a fast healing with cleanness
							</p>
						</div>
						<Link className={classes.card__btn__link__pure} to="/collection">
							<button className={classes.card__btn__pure}>learn more</button>
						</Link>
					</div>
				</div>
				<CommentSlider />
			</div>
		</div>
	</>
);
export default Hero;
