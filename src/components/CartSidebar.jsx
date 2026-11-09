"use client";
import React from "react";
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
        subtotal
    } = useCart();

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
                                    onClick={() =>
                                        removeFromCart(item.id)
                                    }
                                    aria-label={`Remove ${item.name}`}
                                >
                                    🗑
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
