"use client";
import React, { useState } from "react";

// CartContext-la irundhu cart data and functions edukka useCart import panrom
import { useCart } from "../../context/CartContext";

import "./style.css";

export default function CartPage({
    // Indha 3 functions mattum parent component-la irundhu props-ah varum
    onApplyCoupon,
    onCheckout,
    onCalculateShipping
}) {

    // Context-la irundhu cart data and functions edukkirom
    const {
        cartItems,
        updateQuantity,
        removeFromCart,
        clearCart
    } = useCart();


    // Coupon input-la user type panra value store aagum
    const [coupon, setCoupon] = useState("");

    // Country dropdown selected value store aagum
    const [country, setCountry] = useState("Australia");

    // Province dropdown selected value store aagum
    const [province, setProvince] = useState("");

    // Postcode input value store aagum
    const [postcode, setPostcode] = useState("");


    // Cart-la irukkura ella products-oda subtotal calculate panrom
    const subtotal = cartItems.reduce(
        (total, item) =>
            total + Number(item.price) * Number(item.quantity),
        0
    );


    // Cart-la irukkura total product quantity calculate panrom
    const totalItems = cartItems.reduce(
        (total, item) => total + Number(item.quantity),
        0
    );


    // Price-ah dollar format-la display panna function
    const formatPrice = (price) => `$${Number(price).toFixed(2)}`;


    return (
        <div className="shopping-cart-page">

            <h1 className="shopping-cart-title">
                Shopping Cart
            </h1>

            <div className="cart-main-layout">

                {/* LEFT SIDE - CART PRODUCTS */}

                <div className="cart-products-section">

                    <div className="cart-table-header">
                        <span>PRODUCT</span>
                        <span>QUANTITY</span>
                        <span>SUBTOTAL</span>
                        <span>REMOVE</span>
                    </div>


                    {/* Cart empty-ah irundha empty message display aagum */}
                    {cartItems.length === 0 ? (

                        <p className="empty-cart">
                            Your shopping cart is empty.
                        </p>

                    ) : (

                        // Cart-la products irundha map use panni ovvoru product-ah display panrom
                        cartItems.map((item) => (

                            <div className="cart-product-row" key={item.id}>

                                {/* PRODUCT IMAGE AND DETAILS */}

                                <div className="cart-product-info">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-product-image"
                                    />

                                    <div className="cart-product-details">

                                        <h3>{item.name}</h3>

                                        {/* Description irundha mattum display aagum */}
                                        {item.description && (
                                            <p>{item.description}</p>
                                        )}

                                        <strong>
                                            {formatPrice(item.price)}
                                        </strong>

                                    </div>
                                </div>


                                {/* QUANTITY INCREASE AND DECREASE */}

                                <div className="cart-quantity">

                                    {/* Minus button - quantity decrease */}
                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                Math.max(
                                                    1,
                                                    Number(item.quantity) - 1
                                                )
                                            )
                                        }
                                        aria-label="Decrease quantity"
                                    >
                                        -
                                    </button>

                                    {/* Current quantity display */}
                                    <span>{item.quantity}</span>

                                    {/* Plus button - quantity increase */}
                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                Number(item.quantity) + 1
                                            )
                                        }
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>

                                </div>


                                {/* INDIVIDUAL PRODUCT SUBTOTAL */}

                                <div className="cart-item-subtotal">

                                    {formatPrice(
                                        Number(item.price) *
                                        Number(item.quantity)
                                    )}

                                </div>


                                {/* REMOVE PRODUCT BUTTON */}

                                <button
                                    className="cart-remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                    aria-label={`Remove ${item.name}`}
                                >
                                    <span>▣</span>
                                </button>

                            </div>

                        ))
                    )}


                    {/* CART ACTION BUTTONS */}

                    <div className="cart-action-buttons">

                        {/* Clear button - all products remove aagum */}
                        <button
                            className="cart-outline-btn"
                            onClick={clearCart}
                        >
                            Clear Shopping Cart
                        </button>

                        <button className="cart-outline-btn">
                            Update Cart
                        </button>

                    </div>

                </div>


                {/* RIGHT SIDE - CART SUMMARY */}

                <aside className="cart-summary-section">

                    <h2>Summary</h2>

                    <div className="summary-row">
                        <span>Sub Total</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span className="summary-muted">
                            Enter post code to calculate
                        </span>
                    </div>

                    <div className="summary-row">
                        <span>GST</span>
                        <span>$0.00</span>
                    </div>

                    <div className="summary-total">
                        <strong>Shopping Cart Total</strong>
                        <strong>{formatPrice(subtotal)}</strong>
                    </div>


                    {/* CHECKOUT BUTTON */}

                    <button
                        className="checkout-btn"
                        onClick={() => onCheckout?.()}
                    >
                        Proceed to checkout
                    </button>

                    <p className="checkout-note">
                        Congrats! You get free shipping.
                    </p>


                    {/* COUPON SECTION */}

                    <div className="coupon-section">

                        <h3>Apply Discount Code ?</h3>

                        <p>
                            If you have a coupon or discount code enter it below.
                        </p>

                        <div className="coupon-input-group">

                            <input
                                type="text"
                                placeholder="Enter Discount Code"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                            />

                            <button
                                onClick={() => onApplyCoupon?.(coupon)}
                            >
                                Apply
                            </button>

                        </div>
                    </div>

                </aside>

            </div>


            {/* SHIPPING CALCULATOR */}

            <section className="shipping-calculator">

                <h2>SHIPPING CALCULATOR</h2>

                <p>Enter your post code to calculate.</p>


                {/* COUNTRY DROPDOWN */}

                <div className="shipping-field">

                    <label>Country</label>

                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>

                </div>


                {/* PROVINCE DROPDOWN */}

                <div className="shipping-field">

                    <label>State/Province</label>

                    <select
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                    >
                        <option value="">
                            Please select a region, state or province.
                        </option>

                        <option value="New South Wales">New South Wales</option>
                        <option value="Victoria">Victoria</option>
                        <option value="Queensland">Queensland</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>

                    </select>

                </div>


                {/* POSTCODE INPUT */}

                <div className="shipping-field">

                    <label>Zip/Postal Code</label>

                    <input
                        type="text"
                        placeholder="Post code"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                    />

                </div>


                {/* SHIPPING CALCULATE BUTTON */}

                <button
                    className="shipping-calculate-btn"
                    onClick={() =>
                        onCalculateShipping?.({
                            country,
                            province,
                            postcode
                        })
                    }
                >
                    Calculate Shipping
                </button>

            </section>

        </div>
    );
}
