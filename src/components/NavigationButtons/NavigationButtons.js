import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moduleStyles from './NavigationButtons.module.css';
import { goToNextPage, goToPreviousPage } from '../../actions';

export default function NavigationButtons() {
    const page = useSelector(state => state.pages.currentPage);
    const dispatch = useDispatch();

    return (
        <footer className={page === 1 ? 'justify-end' : ''}>
            <button
                className={page === 1 ? `${moduleStyles['hidden-prev-btn']}` : moduleStyles["prev-btn"]}
                onClick={() => dispatch(goToPreviousPage(page))}
            >
                Go Back
            </button>
            <button
                className={moduleStyles["next-btn"]}
                onClick={() => dispatch(goToNextPage(page))}
            >
                Next Step
            </button>
        </footer>
    );
}
