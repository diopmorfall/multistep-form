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
                    <li key={step}>
                        <div className={page === step || (page === 5 && step === 4) ?
                                `${moduleStyles['page-info']} ${moduleStyles['current-page-info']}`
                                : moduleStyles['page-info']}
                        >
                            <span
                                className={page === step || (page === 5 && step === 4) ? moduleStyles['current-page'] : ''}
                            >{step}
                            </span>
                        </div>
                        <div className={moduleStyles['caption']}>
                            <span>STEP {step}</span>
                            <span>{steps[step - 1]}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}