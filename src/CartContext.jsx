// CartContext.jsx — create this new file
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [arr, setArr] = useState([]);
    return (
        <CartContext.Provider value={{ arr, setArr }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}