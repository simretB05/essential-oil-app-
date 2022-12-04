/** @format */

import React from "react";
import classes from "../collection/collection.module.scss";
// import Review from "../reviwes/review";
import CollectionProducts from "../collections-product/collections-products";
import data from "../data/data";

function CollectionHero() {
	const { products } = data;

	return (
		<>
			<div className={classes.products}>
				<h1 className={classes.products__title}>Products</h1>
			</div>
			<div>
				{products.map((product) => {
					return (
						<CollectionProducts
							product={product}
							//  ratingNum={product.NumReviews}
							//  ratingValue={product.rating}
							key={product.id}
							//  shortDiscription={product.shortDiscription}
							//  image={product.image}
							//  itemSize={product.itemSize}
							//  name={product.name}
							//  price={formatCurrency(`${product.price}`, opts)}
							//  itemNumber={product.itemNumber}
						/>
					);
				})}
			</div>

			{/* <Review productValue={products} /> */}
		</>
	);
}

export default CollectionHero;
