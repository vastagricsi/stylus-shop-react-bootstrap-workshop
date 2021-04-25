import React, {createContext} from 'react';

export const ShoppingCartContext = createContext(true);

export const ShoppingCartProvider = (props) => {
    const my_name = "R";
    return  (
        <ShoppingCartContext.Provider value={
            {
                my_name: my_name
            }
        }>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}
