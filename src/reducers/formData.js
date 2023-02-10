const formReducer = (
    state = { name: '', phoneNumber: '', email: '' },
    action
) => {
    switch (action.type) {
        case 'SET_PERSONAL_INFO':
            return {
                ...state,
                name: action.payload.name || state.name,
                email: action.payload.email || state.email,
                phoneNumber: action.payload.phoneNumber || state.phoneNumber,
            }

        default:
            return state;
        }
};

export default formReducer;
