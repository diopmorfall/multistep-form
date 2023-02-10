import React, { useState } from 'react';
import styles from './PersonalFormPage.module.css';
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
        target.value.length == 0
            ? setAreInputsInvalid(prev => ({ ...prev, [target.name]: true }))
            : setAreInputsInvalid(prev => ({ ...prev, [target.name]: false }));

        if (target.name === 'email') {
            target.value.match(/^\S+@\S+$/i)
                ? setAreInputsInvalid(prev => ({ ...prev, [target.name]: false }))
                : setAreInputsInvalid(prev => ({ ...prev, [target.name]: true }));
        }

        if (Object.keys(areInputsInvalid).every(value => value === false)) {
            dispatch(setPersonalInfo(formData));
            //console.log('YEAHH', useSelector(state => state.form));
        }
    }

    return (
        <section className={styles['form-page']}>
            <h1>Personal Info</h1>
            <h3>Please provide your name, email address, and phone number.</h3>
            <form className={styles['form']}>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={(e) => checkFields(e)}
                        placeholder="e.g. Stephen King"
                    />
                    {areInputsInvalid.name && <small>This field is required</small>}
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={(e) => checkFields(e)}
                        placeholder="e.g. stephenking@lorem.com"
                    />
                    {areInputsInvalid.email && (
                        <small>Insert a valid email address</small>
                    )}
                </label>
                <label htmlFor="phoneNumber">
                    Phone number
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={(e) => checkFields(e)}
                        placeholder="e.g. +1 234 567 890"
                    />
                    {areInputsInvalid.phoneNumber && (
                        <small>This field is required</small>
                    )}
                </label>
            </form>
        </section>
    );
}
