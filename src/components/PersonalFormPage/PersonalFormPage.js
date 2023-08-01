import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moduleStyles from './PersonalFormPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonalInfo } from '../../actions';

export default function PersonalFormPage() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(useSelector(state => state.form));
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Please insert a valid email address').required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
    });

    function handleSubmit(values){
        console.log("Formik", values);
    }

    return (
        <section className={moduleStyles['form-page']}>
            <h1>Personal info</h1>
            <h3>Please provide your name, email address, and phone number.</h3>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({getFieldProps, touched, errors}) => (
                    <Form>
                        <div className={moduleStyles["input-container"]}>
                            <label htmlFor="name">Name</label>
                            <ErrorMessage className={moduleStyles["error"]} name="name" component="div" />
                            <Field
                                className={`${moduleStyles["input-field"]} ${touched.name && errors.name ? moduleStyles["invalid-value"] : ''}`}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="e.g. Stephen King"
                            />
                        </div>
                        <div className={moduleStyles["input-container"]}>
                            <label htmlFor="email"> Email address</label>
                            <ErrorMessage className={moduleStyles["error"]} name="email" component="div" />
                            <Field
                                className={`${moduleStyles["input-field"]} ${touched.email && errors.email ? moduleStyles["invalid-value"] : ''}`}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="e.g. stephenking@lorem.com"
                            />
                        </div>
                        <div className={moduleStyles["input-container"]}>
                            <label htmlFor="phoneNumber"> Phone number</label>
                            <ErrorMessage className={moduleStyles["error"]} name="phoneNumber" component="div" />
                            <Field
                                className={`${moduleStyles["input-field"]} ${touched.phoneNumber && errors.phoneNumber ? moduleStyles["invalid-value"] : ''}`}
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="e.g. +1 234 567 890"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
}
