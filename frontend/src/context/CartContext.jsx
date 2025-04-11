import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
            if (existingItem) {
                // If item already in cart, just increase quantity
                return prevCart.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                        : cartItem
                );
            } else {
                // Otherwise add new item with quantity 1
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) =>
            prevCart.reduce((acc, cartItem) => {
                if (cartItem._id === itemId) {
                    if ((cartItem.quantity || 1) > 1) {
                        // Reduce quantity if more than 1
                        acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
                    }
                    // If quantity 1, remove item completely (do not push)
                } else {
                    acc.push(cartItem);
                }
                return acc;
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
