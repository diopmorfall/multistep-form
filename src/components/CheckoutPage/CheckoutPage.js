import React from 'react';
import moduleStyles from './CheckoutPage.module.css';
import thankYouIcon from '../../assets/images/icon-thank-you.svg';

export default function CheckoutPage() {
    return (
        <div className={moduleStyles['checkout-container']}>
            <section className={moduleStyles['checkout']}>
                <img src={thankYouIcon} alt="ok" />
                <h1>Thank you!</h1>
                <p className={moduleStyles["greetings"]}>
                    Thanks for confirming your subscription!
                    <br />
                    We hope you have fun using our platform. If you ever need support,
                    please feel free to email us at support@loremgaming.com
                </p>
            </section>
            <div className={moduleStyles["attribution"]}>
                Challenge from <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Built by <a href="https://github.com/diopmorfall/">Mor Fall Diop</a>.
            </div>
        </div>
    );
}
