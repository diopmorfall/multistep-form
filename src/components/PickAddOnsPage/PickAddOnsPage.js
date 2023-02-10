import React, { useState } from 'react';
import styles from './PickAddOnsPage.module.css';

export default function PickAddOnsPage(props) {
    return (
        <section className="add-ons">
            <h1>Pick add-ons</h1>
            <h3>Add-ons help enhange yout gaming experience</h3>
            <div className="options">
                <div>
                    <input type="checkbox" name="" id="" />
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                    <span>{props.price}</span>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                    <span>{props.price}</span>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                    <span>{props.price}</span>
                </div>
            </div>
        </section>
    );
}
