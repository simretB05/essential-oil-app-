/** @format */

import React from "react";
import classes from "../components/reviwes/review.module.scss";
import { v4 as uuidv4 } from "uuid";
function Rating({ value, text, color }) {
	return (
		<div>
			{[1, 2, 3, 4, 5].map((rate) => (
				<span key={uuidv4()}>
					<i
						style={{ color }}
						className={
							value + 1 === rate + 0.5
								? "fas fa-star-half-alt"
								: value >= rate
								? "fas fa-star"
								: "far fa-star"
						}
					></i>
				</span>
			))}
			{text}
		</div>
	);
}
Rating.defaultProps = {
	color: "#ce0c13",
};
export default Rating;
