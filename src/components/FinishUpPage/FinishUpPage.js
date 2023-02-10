import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moduleStyles from './FinishUpPage.module.css';

import { goToSelectPlanPage } from '../../actions';

export default function FinishUpPage() {
    const dispatch = useDispatch();
    const selectedPlan = useSelector(state =>
        state.plans.plans.find(plan => plan.isSelected === true)
    );
    const isYearlyPayment = useSelector(state => state.plans.isYearlyPayment);
    const selectedAddOns = useSelector(state =>
        state.addOns.filter(addOn => addOn.isSelected === true)
    );

    console.log(selectedAddOns);

    function getTotal() {
        let addOnsAmount = 0;
        if (isYearlyPayment) {
            selectedAddOns.map(addOn => (addOnsAmount += addOn.price.yearly));
            return selectedPlan.price.yearly + addOnsAmount;
        } else {
            selectedAddOns.map((addOn) => (addOnsAmount += addOn.price.monthly));
            return selectedPlan.price.monthly + addOnsAmount;
        }
    }

    return (
        <section className="finish-up">
            <h1>Finishing up</h1>
            <p>Double-check everything looks ok before confirming</p>
            <div className="purchases">
                <div className="purchases-header">
                <h4>{selectedPlan.title}</h4>
                <span>
                    ${isYearlyPayment
                        ? `+${selectedPlan.price.yearly}/yr`
                        : `+${selectedPlan.price.monthly}/mo`}
                </span>
                <p
                    className={moduleStyles['change']}
                    onClick={() => dispatch(goToSelectPlanPage())}
                >Change</p>
                </div>
                {selectedAddOns && (
                    <div className="selected-add-ons">
                        {selectedAddOns.map(addOn => (
                            <div>
                                <span>{addOn.name}</span>
                                <span>
                                ${isYearlyPayment
                                    ? `+${addOn.price.yearly}/yr`
                                    : `+${addOn.price.monthly}/mo`}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <span>Total (per {isYearlyPayment ? 'year' : 'month'})</span>
                <span className="total">${getTotal()}</span>
            </div>
        </section>
    );
}
