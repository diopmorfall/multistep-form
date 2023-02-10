export const setPersonalInfo = (formData) => {
    return { type: 'SET_PERSONAL_INFO', payload: formData };
};

export const setRecurrence = () => {
    return { type: 'SET_RECURRENCE' };
};

export const selectPlan = (title) => {
    return { type: 'SELECT_PLAN', payload: title };
};

export const selectAddOn = (addOn) => {
    return { type: 'SELECT_ADD_ON', payload: addOn };
};

export const removeAddOn = (addOn) => {
    return { type: 'REMOVE_ADD_ON', payload: addOn };
};

export const goToNextPage = (currentPage) => {
    return { type: 'NEXT_PAGE', payload: currentPage };
};

export const goToPreviousPage = (currentPage) => {
    return { type: 'PREVIOUS_PAGE', payload: currentPage };
};

export const goToSelectPlanPage = () => {
    return { type: 'SELECT_PLAN_PAGE' };
};
