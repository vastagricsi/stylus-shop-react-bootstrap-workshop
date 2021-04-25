import React, {createContext, useState} from 'react';

export const ShoppingCartContext = createContext(true);

export const ShoppingCartProvider = (props) => {
    const [my_name, set_my_name] = useState('R');

    return  (
        <ShoppingCartContext.Provider value={
            {
                my_name: my_name,
                set_my_name: set_my_name
            }
        }>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}
