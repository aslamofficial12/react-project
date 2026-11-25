
"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./CartSidebar.css";

export default function CartSidebar() {

    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        removeFromCart,
        updateQuantity,
        totalItems,
        subtotal,
        cartId,
        lineItemId,
        version
    } = useCart();

    // Which product is currently being removed
    const [removing, setRemoving] = useState(null);

    // Remove Product API function
    const handleRemoveProduct = async (item) => {

        try {

            setRemoving(item.id);

            // STEP 1: Check required cart details
            if (!cartId || !lineItemId || version === null || version === undefined) {
                throw new Error("Cart details are missing");
            }

            // STEP 2: Call Remove Product API
            const response = await fetch("/api/remove-product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cartId: cartId,
                    lineItemId: lineItemId,
                    version: version,
                    quantity: item.quantity,
                }),
            });

            // STEP 3: Read API response
            const responseText = await response.text();

            console.log("Remove Product Status:", response.status);
            console.log("Remove Product Response:", responseText);

            let data = {};

            try {
                data = responseText ? JSON.parse(responseText) : {};
            } catch {
                data = { message: responseText };
            }

            // STEP 4: Check API success
            if (!response.ok) {
                throw new Error(
                    data.message || `Remove failed: ${response.status}`
                );
            }

            // STEP 5: Remove product from frontend cart
            removeFromCart(item.id);

            console.log("Product removed successfully!");

        } catch (error) {

            console.error("Remove Product Error:", error.message);

        } finally {

            setRemoving(null);

        }
    };

    // Don't display sidebar when closed
    if (!isCartOpen) {
        return null;
    }

    return (
        <>
            {/* Background overlay */}
            <div
                className="cart-overlay"
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Cart sidebar */}
            <div className="cart-sidebar">

                {/* Header */}
                <div className="cart-header">

                    <h2>Total item(s) {totalItems}</h2>

                    <button
                        className="cart-close-btn"
                        onClick={() => setIsCartOpen(false)}
                        aria-label="Close cart"
                    >
                        ×
                    </button>

                </div>

                {/* Cart products */}
                <div className="cart-body">

                    {cartItems.length === 0 ? (

                        <p className="empty-cart">
                            Your cart is empty.
                        </p>

                    ) : (

                        cartItems.map((item) => (

                            <div className="cart-product" key={item.id}>

                                {/* Product image */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-product-image"
                                />

                                {/* Product details */}
                                <div className="cart-product-details">

                                    <h3>{item.name}</h3>

                                    <p className="cart-product-price">
                                        ${item.price.toFixed(2)}
                                    </p>

                                    {/* Quantity controls */}
                                    <div className="cart-quantity">

                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                            disabled={item.quantity <= 1}
                                        >
                                            −
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                {/* Remove product */}
                                <button
                                    className="cart-remove-btn"
                                    onClick={() => handleRemoveProduct(item)}
                                    disabled={removing === item.id}
                                    aria-label={`Remove ${item.name}`}
                                >
                                    {removing === item.id ? "..." : "🗑"}
                                </button>

                            </div>

                        ))

                    )}

                </div>

                {/* Footer */}
                <div className="cart-footer">

                    <div className="cart-subtotal">

                        <strong>Subtotal :</strong>

                        <strong>
                            ${subtotal.toFixed(2)}
                        </strong>

                    </div>

                    <button
                        className="checkout-btn"
                        disabled={cartItems.length === 0}
                    >
                        GO TO CHECKOUT
                    </button>

                    <button
                        className="view-cart-btn"
                        onClick={() => setIsCartOpen(false)}
                    >
                        View And Edit Cart
                    </button>

                </div>

            </div>
        </>
    );
}
