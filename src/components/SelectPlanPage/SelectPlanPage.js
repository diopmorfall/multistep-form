import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moduleStyles from './SelectPlanPage.module.css';

import { selectPlan, setRecurrence } from '../../actions/';

export default function SelectPlanPage() {
    const plansDetails = useSelector(state => state.plans);
    const dispatch = useDispatch();
    return (
        <section className={moduleStyles["plan-choice"]}>
            <h1>Select your plan</h1>
            <h3>You have the option of monthly or yearly billing.</h3>
            <div className={moduleStyles['plans-container']}>
                {plansDetails.plans.map(plan => (
                    <div
                        key={plan.title}
                        className={plan.isSelected ? `${moduleStyles["plan"]} ${moduleStyles["selected-plan"]}` : moduleStyles["plan"]}
                        onClick={() => dispatch(selectPlan(plan.title))}
                    >
                        <img src="" alt={plan.title} />
                        <h5 className={moduleStyles["plan-title"]}>{plan.title}</h5>
                        <span className={moduleStyles["plan-price"]}>
                            ${plansDetails.isYearlyPayment
                                ? `${plan.price.yearly}/yr`
                                : `${plan.price.monthly}/mo`
                            }
                        </span>
                        <p>{plansDetails.isYearlyPayment ? '2 months free' : ''}</p>
                    </div>
                ))}

            <div className={moduleStyles["recurrence-setter"]}>
                <span className={
                        !plansDetails.isYearlyPayment ?
                        moduleStyles["selected"] : moduleStyles["not-selected"]
                    }
                >Monthly</span>
                <div className={
                        plansDetails.isYearlyPayment ?
                            `${moduleStyles["toggle-container"]} ${moduleStyles["monthly"]} ` :
                            `${moduleStyles["toggle-container"]} ${moduleStyles["yearly"]} `
                    } 
                    onClick={() => dispatch(setRecurrence())}
                >
                    <div className={moduleStyles["toggle"]} id='toggle'></div>
                </div>
                <span className={
                        plansDetails.isYearlyPayment ?
                        moduleStyles["selected"] : moduleStyles["not-selected"]
                    }
                >Yearly</span>
            </div>
            </div>
        </section>
    );
}
