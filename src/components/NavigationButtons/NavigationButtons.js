import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { goToNextPage, goToPreviousPage } from '../../actions';

export default function NavigationButtons() {
    const page = useSelector((state) => state.pages.currentPage);
    const dispatch = useDispatch();

    return (
        <div className="navigation-btns">
            <button
                className="prev-step-btn"
                onClick={() => dispatch(goToPreviousPage(page))}
            >
                go back
            </button>
            <button
                className="next-step-btn"
                onClick={() => dispatch(goToNextPage(page))}
            >
                next step
            </button>
        </div>
    );
}
