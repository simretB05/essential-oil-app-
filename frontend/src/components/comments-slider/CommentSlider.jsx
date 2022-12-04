import React from 'react'
import classes from "../comments-slider/comments-slider.module.scss"
import { Link } from 'react-router-dom';
import ReviewSliderData from './SliderData';

function CommentSlider() {
  const reviewdata = ReviewSliderData  
  

  return (
    <div className={classes.testimonials__main}>
    <h3 className={classes.testimonials__main__title}>Testimonials</h3>
      <div className={classes.testimonials}>
      <div className={classes.testimonials__nav}>
    <button className={classes.testimonials__nav__btn}>
            <img className={classes.testimonials__nav__L} src="./assets/icons/icon-previous.svg" alt=" persons_image" />
    </button>
          <button className={classes.testimonials__nav__btn}>
            <img className={classes.testimonials__nav__R} src="./assets/icons/icon-next.svg" alt="persons_image" />
    </button>
        </div>
        <div className={classes.testimonials__section}>

      {reviewdata.map((review) => (
 
        <div className={classes.testimonials__card}>

            <div className={classes.testimonials__card__holder}>
            <img className={classes.testimonials__card__holder__img} src={review.img} alt="pesrson_image" />
            <h3 className={classes.testimonials__card__holder__name}>{review.name}</h3>
            <p className={classes.testimonials__card__holder__copy}>{ review.reviews}</p>
            </div>
        </div>
            ))}
         
</div>

   
</div > 
<Link to="/collection">
        <button className={classes.testimonials__main__btn}> Review Our Products Here!</button>
    </Link>
</div>
  )
}

export default CommentSlider