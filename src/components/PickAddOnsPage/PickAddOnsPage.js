import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moduleStyles from './PickAddOnsPage.module.css';

import { selectAddOn, removeAddOn } from '../../actions';


export default function PickAddOnsPage(props) {
    const addOns = useSelector(state => state.addOns);
    const isYearlyPayment = useSelector(state => state.plans.isYearlyPayment);
    const dispatch = useDispatch();

    return (
        <section className="add-ons">
            <h1>Pick add-ons</h1>
            <h3>Add-ons help enhance yout gaming experience</h3>
            <div className="options">
                {addOns.map(addOn => (
                    <div
                        key={addOn.name}
                        className={moduleStyles['plan']}
                        style={addOn.isSelected ? { border: '2px solid purple' } : {}}
                        onClick={() =>  addOn.isSelected
                            ? dispatch(removeAddOn(addOn.name))
                            : dispatch(selectAddOn(addOn.name))
                        }
                    >
                        <input type="checkbox" name="" id="" checked={addOn.isSelected} />
                        <h5>{addOn.name}</h5>
                        <p>{addOn.description}</p>
                        <span>
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
