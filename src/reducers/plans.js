const plansReducer = (
    state = {
        isYearlyPayment: false,
        plans: [
            {
                title: 'Arcade',
                price: { yearly: 90, monthly: 9 },
                isSelected: false,
            },
            {
                title: 'Advanced',
                price: { yearly: 120, monthly: 12 },
                isSelected: false,
            },
            {
                title: 'Pro',
                price: { yearly: 150, monthly: 15 },
                isSelected: false,
            },
        ],
    },
    action
) => {
    switch (action.type) {
        case 'SET_RECURRENCE':
            return { ...state, isYearlyPayment: !state.isYearlyPayment };
            
        case 'SELECT_PLAN':
            return {
                ...state,
                plans: state.plans.map(plan => {
                    let newPlan = { ...plan, isSelected: false };
                    if (action.payload == plan.title) {
                        newPlan.isSelected = true;
                    }
                    return newPlan;
                }),
            }
    
        default:
            return state;
        }
};

export default plansReducer;
