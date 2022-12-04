import React from 'react';
// import {Link} from 'react-router-dom';
import classes from '../contact-hero/contact-hero.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
;



const ContactHero = () => (

    <>
        <div className={classes.content}>
            <div className={classes.form__container}>
                <h1 className={classes.form__container__title}>Contact Us</h1>
                <p className={classes.form__container__copy}>we are here for any of your question,suggestion or request  you have about our company and products!</p>
                <div className={classes.form__container__mainContent}>
                    <form className={classes.form}>
                        <div className={classes.form__input__box}>
                            <input className={classes.form__input__text} type="text" required placeholder="Your name"/>
                            </div>
                        <div className={classes.form__input__box}>
                            <input className={classes.form__input__text}  type="text" required placeholder="E-mail"/>
                            </div>
                        <div className={classes.form__message__box}>
                            <textarea className={classes.form__input__textArea} placeholder=" Your Message" name="textarea" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className={classes.form__input__box}>
                            <input className={classes.form__submit__btn} type="submit" value="Send Message"/>
                        </div>
                    </form>
                    <div className={classes.address}>
                        <h3 className={classes.address__title}>Let's Connect</h3>
                        <ul className={classes.address__list}>
                            <li className={classes.address__list__item}>
                                <div className={classes.address__list__item__icon}>
                                    <FontAwesomeIcon icon={faLocationArrow} />
                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>Address</p>
                                    <p className={classes.address__list__item__title}>2022 Yes-u-can street, calagry, Alberta</p>      
                                </div>
                            </li>
                            <li className={classes.address__list__item}>
                                <div className={classes.address__list__item__icon}>
                                        <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>Phone number</p>
                                    <p className={classes.address__list__item__title}>+111-111-1111</p>       
                                </div>
                            </li>
                            <li className={classes.address__list__item}>        
                                <div className={classes.address__list__item__icon}>
                                    <FontAwesomeIcon icon={faEnvelope} />

                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>E-mails</p>
                                    <p className={classes.address__list__item__title}>happysimret@gmail.com</p>       
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.locations}>
                    <h3 className={classes.location__title}>Find Us Near You</h3>
                    <div className={classes.location__card}>
                        <img className={classes.location__card__img} src="../assets/images/north-america-canada-alberta-map.jpg" alt="north america location"/>
                    </div>
                </div>
            </div>
        </div>
    </>

);
export default ContactHero;