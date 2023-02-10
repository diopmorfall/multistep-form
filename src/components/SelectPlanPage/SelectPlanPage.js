import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moduleStyles from './SelectPlanPage.module.css';

import { selectPlan, setRecurrence } from '../../actions/';

export default function SelectPlanPage() {
    const plansDetails = useSelector(state => state.plans);
    const dispatch = useDispatch();
    return (
        <section className="plan-choice">
            <h1>Select your plan</h1>
            <h3>You have the option of monthly or yearly billing.</h3>
            <div className={moduleStyles['plans']}>
                {plansDetails.plans.map(plan => (
                    <div
                        key={plan.title}
                        className={moduleStyles['plan']}
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
