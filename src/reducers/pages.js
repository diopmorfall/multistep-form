const pagesReducer = (
    state = {
        currentPage: 1,
    },
    action
) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
    
        case 'PREVIOUS_PAGE':
            return {
                ...state,
                currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1,
            }

        case 'SELECT_PLAN_PAGE':
            return { ...state, currentPage: 2 };
    
        default:
            return state;
        }
};

export default pagesReducer;
