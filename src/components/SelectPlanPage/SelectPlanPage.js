import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './SelectPlanPage.module.css';

import { selectPlan, setRecurrence } from '../../actions/';
//* toggle between yearly and monthly plans updates prices

export default function SelectPlanPage() {
    const plansDetails = useSelector((state) => state.plans);
    const formData = useSelector((state) => state.form);
    console.log(formData);
    const dispatch = useDispatch();
    return (
        <section className="plan-choice">
            <h1>Select your plan</h1>
            <h3>You have the option of monthly or yearly billing.</h3>
            <div className={style['plans']}>
                {plansDetails.plans.map(plan => (
                    <div
                        key={plan.title}
                        className={style['plan']}
                        style={plan.isSelected ? { border: '2px solid purple' } : {}}
                        onClick={() => dispatch(selectPlan(plan.title))}
                    >
                        <img src="" alt={plan.title} />
                        {plan.title}
                        <p>
                            ${plansDetails.isYearlyPayment
                                ? `${plan.price.yearly}/yr`
                                : `${plan.price.monthly}/mo`
                            }
                        </p>
                        <p>{plansDetails.isYearlyPayment ? '2 months free' : ''}</p>
                    </div>
                ))}

                <div className="toggle">
                    <span>Monthly</span>
                    <button onClick={() => dispatch(setRecurrence())}>toggle</button>
                    <span>Yearly</span>
                </div>
            </div>
        </section>
    );
}
