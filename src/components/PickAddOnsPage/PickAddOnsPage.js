import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moduleStyles from './PickAddOnsPage.module.css';

import { selectAddOn, removeAddOn } from '../../actions';


export default function PickAddOnsPage() {
    const addOns = useSelector(state => state.addOns);
    const isYearlyPayment = useSelector(state => state.plans.isYearlyPayment);
    const dispatch = useDispatch();

    return (
        <section className={moduleStyles["add-ons"]}>
            <h1>Pick add-ons</h1>
            <h3>Add-ons help enhance your gaming experience</h3>
            <div className={moduleStyles["add-ons-container"]}>
                {addOns.map(addOn => (
                    <div
                        key={addOn.name}
                        className={addOn.isSelected ?
                            `${moduleStyles["add-on"]} ${moduleStyles["selected-add-on"]}`
                            : moduleStyles["add-on"]
                        }
                        onClick={() =>  addOn.isSelected
                            ? dispatch(removeAddOn(addOn.name))
                            : dispatch(selectAddOn(addOn.name))
                        }
                    >
                        <input type="checkbox" name="" id="" checked={addOn.isSelected} />
                        <div className={moduleStyles["add-on-details"]}>
                            <h5 className={moduleStyles["add-on-name"]}>{addOn.name}</h5>
                            <p className={moduleStyles["add-on-desc"]}>{addOn.description}</p>
                        </div>
                        <span className={moduleStyles["add-on-price"]}>
                            {isYearlyPayment
                                ? `+${addOn.price.yearly}/yr`
                                : `+${addOn.price.monthly}/mo`}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
