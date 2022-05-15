import { createContext, useReducer } from 'react';

import { reducer, initialState } from '../reducers/app';

export const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
