import React from 'react';
import { useSelector } from 'react-redux';
import moduleStyles from './StepsBar.module.css';

export default function StepsBar() {
    const page = useSelector(state => state.pages.currentPage);
    return (
        <nav>
            <ul className={moduleStyles['ul']}>
                {[1, 2, 3, 4].map(step => (
                    <li key={step}
                        style={page === step ?
                            { backgroundColor: 'lightblue', border: '2px solid lightblue' } :
                            {}
                        }
                    >
                        {step}
                    </li>
                ))}
            </ul>
        </nav>
    );
}