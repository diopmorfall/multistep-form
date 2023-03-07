import React from 'react';
import { useSelector } from 'react-redux';
import moduleStyles from './StepsBar.module.css';

export default function StepsBar() {
    const page = useSelector(state => state.pages.currentPage);
    const steps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

    return (
        <nav className='bg-stepsBar'>
            <ul className={moduleStyles['ul']}>
                {[1, 2, 3, 4].map(step => (
                    <li key={step}
                        className={page === step ? moduleStyles['current-page-li'] : ''}
                    >
                        <span
                            className={page === step ? moduleStyles['current-page'] : ''}
                        >{step}</span>
                        <div className={moduleStyles['caption']}>
                            <span>STEP {step}</span>
                            <span>{steps[step + 1]}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}