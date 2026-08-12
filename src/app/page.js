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
        <>
           

            <h1 className="page-title">
                Products from Contentful
             </h1>
            {/* <div style={{backgroundColor:"lightblue",height:"150px",width:"100%"}}> */} 
             <h3 style={{textAlign:"center"}}>{loading ? "loading..." : ""}</h3>
{/* </div> */}
            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <h2 className="product-name">
                            {product.name}
                        </h2>

                        <label className="description-label">
                            Description:
                        </label>

                        <p className="product-description">
                            {product.description}
                        </p>

                        <p className="product-price">
                            Price: ₹{product.price}
                        </p>

                        <button className="buy-button">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
