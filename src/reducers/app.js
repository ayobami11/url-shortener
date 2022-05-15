export const initialState = {
    links: [],
    displayMenu: false
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_LINKS':
            return {
                ...state,
                links: JSON.parse(localStorage.getItem('links')) ?? []
            };

        case 'SET_LINKS':
            return {
                ...state,
                links: [...state.links, action.payload.link]
            };

        case 'TOGGLE_HAMBURGER_MENU':
            return {
                ...state,
                displayMenu: !state.displayMenu
            };

        default:
            return state;
    }
};
