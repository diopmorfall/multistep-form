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
        <section className={moduleStyles["finish-up"]}>
            <h1>Finishing up</h1>
            <h3>Double-check everything looks ok before confirming</h3>
            <div className={moduleStyles["purchases"]}>
                <div className={moduleStyles["purchases-header"]}>
                    <div>
                        <h5>{selectedPlan.title} ({isYearlyPayment ? 'Yearly' : 'Monthly'})</h5>
                        <span
                            className={moduleStyles['change-purchases']}
                            onClick={() => dispatch(goToSelectPlanPage())}
                        >Change</span>
                    </div>
                        <span className={moduleStyles["plan-amount"]}>
                            ${isYearlyPayment
                                ? `+${selectedPlan.price.yearly}/yr`
                                : `+${selectedPlan.price.monthly}/mo`}
                        </span>
                </div>
                {selectedAddOns && (
                    <div className={moduleStyles["purchased-add-ons"]}>
                        {selectedAddOns.map(addOn => (
                            <div key={addOn.name} className={moduleStyles["purchased-add-on"]}>
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
            <div className={moduleStyles["total-container"]}>
                <span>Total (per {isYearlyPayment ? 'year' : 'month'})</span>
                <span>${getTotal()}</span>
            </div>
        </section>
    );
}
