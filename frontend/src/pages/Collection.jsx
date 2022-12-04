/** @format */

import React from "react";
import CollectionHero from "../components/collection/collection-hero";
import Carousel from "../components/slider/Slider";
import SliderData from "../components/slider/SliderData";

function collection() {
	return (
		<>
			<section>
				<Carousel slidData={SliderData} />
				<CollectionHero />
			</section>
		</>
	);
}

export default collection;
