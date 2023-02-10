import React, { useState } from 'react';
import styles from './SelectPlanPage.module.css';
//* toggle between yearly and monthly plans updates prices

export default function SelectPlanPage() {
    return (
        <section className="plan-choice">
            <h1>Select your plan</h1>
            <h3>You have the option of monthly or yearly billing.</h3>
            <div className="plans">
                <div>
                    <img src="" />
                    Arcade
                    <p>$9/mo</p>
                </div>
                <div>
                    <img src="" />
                    Advanced
                    <p>$12/mo</p>
                </div>
                <div>
                    <img src="" />
                    Pro
                    <p>$15/mo</p>
                </div>
                <div className="toggle">
                    <span>Monthly</span>
                    <button></button>
                    <span>Yearly</span>
                </div>
            </div>
        </section>
    );
}
