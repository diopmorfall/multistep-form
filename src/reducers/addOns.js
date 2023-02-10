const addOnsReducer = (
    state = [
        {
            name: 'Online service',
            description: 'Access to multiplayer games',
            price: { yearly: 10, monthly: 1 },
            isSelected: false,
        },
        {
            name: 'Larger storage',
            description: 'Extra 1TB of cloud save',
            price: { yearly: 20, monthly: 2 },
            isSelected: false,
        },
        {
            name: 'Customizable profile',
            description: 'Custom theme on your profile',
            price: { yearly: 20, monthly: 2 },
            isSelected: false,
        },
    ],
    action
) => {
    switch (action.type) {
        case 'SELECT_ADD_ON':
            return state.map(addOn => {
                return action.payload == addOn.name
                    ? { ...addOn, isSelected: true }
                    : addOn;
            });
            
        case 'REMOVE_ADD_ON':
            return state.map(addOn => {
                return action.payload == addOn.name
                    ? { ...addOn, isSelected: false }
                    : addOn;
            });

        default:
            return state;
        }
};

export default addOnsReducer;