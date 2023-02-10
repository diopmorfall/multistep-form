import React from 'react';
import moduleStyles from './CheckoutPage.module.css';

export default function CheckoutPage() {
    return (
        <section className={moduleStyles['checkout']}>
            <img src="" alt="ok" />
            <h2>Thank you!</h2>
            <p>
                Thanks for confirming your subscription!
                <br />
                We hope you have fun using our platform. If you ever need support,
                please feel free to email us at support@loremgaming.com
            </p>
        </section>
    );
}
