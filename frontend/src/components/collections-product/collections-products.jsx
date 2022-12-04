/** @format */

import React from "react";
import { useState } from "react";
import classes from "../collections-product/collections-products.module.scss";
import Rating from "../rating";
// import CartContextData from "../store/cart-context";
// import formatCurrency from "format-currency";

function CollectionProducts({ product }) {
	// const { addItem } = useContext(CartContextData);

	// let opts = { format: "%v %c", code: "CAD" };

	return (
		<>
			{/* ref={inputRef} */}
			<div className={classes.products__discription}>
				<div id="pure" className={classes.pure}>
					<div className={classes.product__section}>
						<h3 className={classes.pure__title}>{product.name}</h3>
					</div>
				</div>
				<div className={classes.product__card}>
					<div className={classes.product__card__img}>
						<img
							className={classes.product__card__img__container}
							src={product.image}
							alt="product_image"
						/>
					</div>
					<div className={classes.product__card__container}>
						<div className={classes.product__card__rating}>
							<Rating
								value={product.rating}
								text={`${product.NumReviews} reviews`}
							/>
						</div>
						<table className={classes.product__card__table}>
							<tbody className={classes.product__card__body}>
								<tr className={classes.product__card__table__row}>
									<td className={classes.product__card__table__data}>
										<p>Item No.</p>
									</td>
									<td className={classes.product__card__table__data}>
										<p className={classes.product__card__table__itemNo}>
											{product.itemNumber}
										</p>
									</td>
								</tr>
								<tr>
									<td className={classes.product__card__table__data}>
										<p>Item</p>
									</td>
									<td className={classes.product__card__table__data}>
										<p className={classes.product__card__table__size}>
											{product.itemSize}
										</p>
									</td>
								</tr>
								<tr>
									<td className={classes.product__card__table__data}>
										<p>Retail</p>
									</td>
									<td className={classes.product__card__table__data}>
										<p className={classes.product__price}>
											{/* {formatCurrency(`${product.price}`, opts)} */}
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className={classes.counter__section}>
					<button
						// onClick={() => addItem(product)}
						className={classes.cart}
						data-product-id="1"
					>
						<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
								vfill="#6e4a9e"
								fill-rule="nonzero"
							/>
						</svg>
						Add to cart
					</button>
				</div>
				<p className={classes.product__card__copy}>
					{product.shortDiscription}.
				</p>
				<div className={classes.more__discription}>
					<details className={classes.main__details}>
						<summary className={classes.summary}> more discription</summary>
						<details className={classes.details}>
							<summary className={classes.summary}>About</summary>
							<div className={classes.summary__content}>
								<p className={classes.summary__body}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
									sapiente in tempore rerum quasi, quo maxime repellendus enim
									tempora fuga, optio ipsam veniam totam accusantium nostrum
									quibusdam vitae at hic.
								</p>
							</div>
						</details>
						<details className={classes.details}>
							<summary className={classes.summary}>Features</summary>
							<div className={classes.summary__content}>
								<p className={classes.summary__body}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
									sapiente in tempore rerum quasi, quo maxime repellendus enim
									tempora fuga, optio ipsam veniam totam accusantium nostrum
									quibusdam vitae at hic.
								</p>
							</div>
						</details>
						<details className={classes.details}>
							<summary className={classes.summary}>Direction</summary>
							<div className={classes.summary__content}>
								<p className={classes.summary__body}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
									sapiente in tempore rerum quasi, quo maxime repellendus enim
									tempora fuga, optio ipsam veniam totam accusantium nostrum
									quibusdam vitae at hic.
								</p>
							</div>
						</details>
						<details className={classes.details}>
							<summary className={classes.summary}>Suggested use</summary>
							<div className={classes.summary__content}>
								<p className={classes.summary__body}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
									sapiente in tempore rerum quasi, quo maxime repellendus enim
									tempora fuga, optio ipsam veniam totam accusantium nostrum
									quibusdam vitae at hic.
								</p>
							</div>
						</details>
					</details>
				</div>
			</div>
		</>
	);
}

export default CollectionProducts;
