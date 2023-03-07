import React, { useState } from 'react';
import moduleStyles from './PersonalFormPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonalInfo } from '../../actions';

export default function PersonalFormPage() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(useSelector(state => state.form));
    const [areInputsInvalid, setAreInputsInvalid] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    function checkFields(e) {
        const target = e.target;
        target.value.length === 0
            ? setAreInputsInvalid(prev => ({ ...prev, [target.name]: true }))
            : setAreInputsInvalid(prev => ({ ...prev, [target.name]: false }));

        if (target.name === 'email') {
            target.value.match(/^\S+@\S+$/i)
                ? setAreInputsInvalid(prev => ({ ...prev, [target.name]: false }))
                : setAreInputsInvalid(prev => ({ ...prev, [target.name]: true }));
        }

        if (Object.keys(areInputsInvalid).every(value => value === false)) {
            dispatch(setPersonalInfo(formData));
        }
    }

    return (
        <section className={moduleStyles['form-page']}>
            <h1>Personal info</h1>
            <h3>Please provide your name, email address, and phone number.</h3>
            <form>
                <div className={moduleStyles["input-container"]}>
                    <label htmlFor="name">Name</label>
                    {areInputsInvalid.name && <small>This field is required</small>}
                    <input
                        type="text" name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={e => checkFields(e)}
                        placeholder="e.g. Stephen King"
                    />
                </div>
                <div className={moduleStyles["input-container"]}>
                    <label htmlFor="email"> Email address</label>
                    {areInputsInvalid.email && <small>Insert a valid email address</small>}
                    <input
                        type="email" name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={e => checkFields(e)}
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </div>
                <div className={moduleStyles["input-container"]}>
                    <label htmlFor="phoneNumber"> Phone number</label>
                    {areInputsInvalid.phoneNumber && <small>This field is required</small>}
                    <input
                        type="tel" name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={e => checkFields(e)}
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>
            </form>
        </section>
    );
}
