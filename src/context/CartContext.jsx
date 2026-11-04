
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart data from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems");

        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart data to localStorage
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add product to cart
    const addToCart = (product) => {

        setCartItems((prevItems) => {

            const existingProduct = prevItems.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prevItems,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });

        // Open sidebar automatically
        setIsCartOpen(true);
    };

    // Remove product
    const removeFromCart = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };

    // Update quantity
    const updateQuantity = (id, quantity) => {

        if (quantity < 1) return;

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    // Calculate total items
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                isCartOpen,
                setIsCartOpen,
                addToCart,
                removeFromCart,
                updateQuantity,
                totalItems,
                subtotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// Custom hook
export function useCart() {
    return useContext(CartContext);
}
