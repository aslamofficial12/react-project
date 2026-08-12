"use client";

import { useEffect, useState } from "react";
import "./style.css";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Failed to fetch products:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <main className="products-section">

            {/* Header */}
            <div className="products-header">
                <span className="section-tag">OUR COLLECTION</span>

                <h1 className="page-title">
                    Products from Contentful
                </h1>

                <p className="section-subtitle">
                    Discover our latest products and exclusive collections
                </p>
            </div>

            {/* Loading */}
            {loading && (
                <div className="loading">
                    <div className="loader"></div>
                    <p>Loading products...</p>
                </div>
            )}

            {/* Products */}
            {!loading && (
                <div className="products-container">

                    {products.map((product) => (
                        <div className="product-card" key={product.id}>

                            {/* Image */}
                            <div className="product-image-container">
                                <span className="product-badge">
                                    NEW
                                </span>

                                <img
                                    src={`https:${product.image}`}
                                    alt={product.name}
                                    className="product-image"
                                />
                            </div>

                            {/* Product Content */}
                            <div className="product-content">

                                <h2 className="product-name">
                                    {product.name}
                                </h2>

                                <span className="description-label">
                                    PRODUCT DETAILS
                                </span>

                                <p className="product-description">
                                    {product.description}
                                </p>

                                {/* Price */}
                                <div className="price-section">
                                    <span className="price-label">
                                        Price
                                    </span>

                                    <span className="product-price">
                                        ₹{product.price}
                                    </span>
                                </div>

                                {/* Internal name - remove if not needed */}
                                <p className="internal-name">
                                    {product.internalname}
                                </p>

                                <button className="buy-button">
                                    <span>Buy Now</span>
                                    <span className="arrow">→</span>
                                </button>

                            </div>
                        </div>
                    ))}

                </div>
            )}

        </main>
    );
}