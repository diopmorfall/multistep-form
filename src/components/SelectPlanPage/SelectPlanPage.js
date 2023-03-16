import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moduleStyles from './SelectPlanPage.module.css';
import arcadeIcon from '../../assets/images/icon-arcade.svg'
import advancedIcon from '../../assets/images/icon-advanced.svg'
import proIcon from '../../assets/images/icon-pro.svg'
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
                        <img src={plan.title === "arcade" ? arcadeIcon : plan.title === "advanced" ? advancedIcon : proIcon}
                            alt={plan.title}
                        />
                        <div className={moduleStyles['plan-details']}>
                            <h5 className={moduleStyles["plan-title"]}>{plan.title}</h5>
                            <span className={moduleStyles["plan-price"]}>
                                ${plansDetails.isYearlyPayment
                                    ? `${plan.price.yearly}/yr`
                                    : `${plan.price.monthly}/mo`
                                }
                            </span>
                            <p>{plansDetails.isYearlyPayment ? '2 months free' : ''}</p>
                        </div>
                    </div>
                ))}

                <div className={
                    plansDetails.isYearlyPayment ?
                    moduleStyles["recurrence-setter"] :
                    `${moduleStyles["recurrence-setter"]} ${moduleStyles["recurrence-setter-positioning"]}`
                }>
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
