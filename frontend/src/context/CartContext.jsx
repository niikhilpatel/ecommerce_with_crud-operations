import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, { ...item, id: Date.now() }]); // New item added each time
    };
    

    const removeFromCart = (item) => {
        setCart((prevCart) =>
            prevCart.reduce((acc, cartItem) => {
                if (cartItem._id === item._id) {
                    if (cartItem.quantity === 1) return acc;
                    return [...acc, { ...cartItem, quantity: cartItem.quantity - 1 }];
                }
                return [...acc, cartItem];
            }, [])
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
