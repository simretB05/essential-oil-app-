/** @format */

import React, { useRef, useState } from "react";
import classes from "../slider/slider.module.scss";
import prevBtn from "../icons/icon-previous.svg";
import nextBtn from "../icons/icon-next.svg";

function Carousel({ slidData }) {
	const carousel = useRef();
	const [count, setCount] = useState(0);

	const incrementCarousel = (delta) => {
		if (!carousel.current) return;

		const width = carousel.current.offsetWidth;

		if (count + delta > slidData.length - 1) {
			setCount(0);
			carousel.current.scrollTo(0, 0);
			return;
		} else if (count + delta < 0) {
			setCount(slidData.length - 1);
			carousel.current.scrollTo(width * slidData.length - 1, 0);
			return;
		}
		carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);
		setCount((c) => c + delta);
	};
	return (
		<div className={classes.container}>
			<div className={classes.container__btn}>
				<button
					className={classes.container__prev}
					onClick={() => incrementCarousel(-1)}
				>
					<img src={prevBtn} alt="prev button" />
				</button>
				<button
					className={classes.container__next}
					onClick={() => incrementCarousel(1)}
				>
					<img src={nextBtn} alt="next button" />
				</button>
			</div>
			<div className={classes.container__carousel} ref={carousel}>
				{slidData.map((slide, idx) => (
					<div
						className={classes.container__carousel__item}
						key={`${idx}-${slide.id}`}
					>
						<img
							className={classes.container__carousel__img}
							src={slide.img}
							alt="images"
						/>
						<p className={classes.container__carousel__title}>{slide.title}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Carousel;
