"use client";
import { useState,useEffect } from 'react';
import SubscribeForm from "../../components/SubscribeForm";
import ProductSection from "../../components/productSection/productSection";
import "../../components/productSection/productSection.css";

import "./style.css";

export default function product() {






   const [landing, setLanding] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch("/api/libreProduct")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch home page");
                }

                return res.json();
            })
            .then((data) => {
                console.log("API data:", data);
                setLanding(data);
            })
            .catch((error) => {
                console.error("Failed to fetch home page:", error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <main className="products-section">
                <div className="loading">
                    <div className="loader"></div>
                    <p>Loading home page...</p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="products-section">
                <p>Error: {error}</p>
            </main>
        );
    }

    if (!landing) {
        return null;
    }














    // const [count, setCount] = useState(0);

    // function addition() {
     
    //     setCount(count + 1);
    // }
    // function subraction() {
      
    //     setCount(count - 1);
    // }

    return (
        <>
            <div className="mainContainer">

                <section className="first">

                    <div className="firsthead">
                        <h1 className="title">{landing.maintitle}</h1>

                        <p className="subtitle">{landing.subtitle}</p>
                    </div>

                    <hr className="yellowLineCenter"></hr>

                </section>

                <section className="two">
                    <div className="twoHead">
                        <div className="twoHeadRight first-product-content">
                            <h2 className="twoTitle">FreeStyle Libre 2 Plus Sensor</h2>
                            <h3 className="product-price">123$</h3>
                            <p className="product-description">The FreeStyle Libre 2 Plus sensor is the latest innovation to the FreeStyle Libre 2 system. With all the features you love, PLUS:</p>

                            <ul className="first-product-list">
                                <li className="first-product-list-item">Extended 15-day wear time</li>
                                <li className="first-product-list-item"> Improved accuracy: our most accurate sensor!76</li>
                                <li className="first-product-list-item">Available forss all Australians living with diabetes (aged 2+)</li>
                            </ul>

                            <button className="first-add-cart">add to cart</button>
                            <a href="#" className="first-learn-more">Learn More</a>

                        </div>

                        <div className="twoHeadLeft">
                           
                            <img  src={`https:${landing.image4}`}
                    alt={landing.image4}
                    className="product-image"
                    style={{hieght:"400px",width:"800px"}} />









                        </div>
                    </div>
                </section>


                <section className="three">
                    <div className="twoHead">
                        <div className="twoHeadRight product-content">
                            <h2 className="twoTitle">FreeStyle Libre 2 Plus Sensor</h2>
                            <h3 className="product-price">123$</h3>
                            <p>The FreeStyle Libre 2 Plus sensor is the latest innovation to the FreeStyle Libre 2 system. With all the features you love, PLUS:</p>

                            <ul>
                                <li>Extended 15-day wear time</li>
                                <li> Improved accuracy: our most accurate sensor!76</li>
                                <li>Available forss all Australians living with diabetes (aged 2+)</li>
                            </ul>

                            <div>
                                <div className="buttonHead">
                                    <div className="buttonaddminus">
                                        {/* <button className="plus" onClick={addition}>+</button>
                                        <h2>Count:{count}</h2>
                                        <button className="minus" onClick={subraction}>-</button> */}
                                    </div>

                                    <button className="add-cart-button">add to cart</button>
                                </div>
                            </div>

                            <a href="">Learn More</a>

                        </div>

                        <div className="twoHeadLeft">
                            {/* <img src="2Every4Weeks_S_S.webp" /> */}


     <img  src={`https:${landing.image2}`}
                    alt={landing.image2}
                    className="product-image"
                    style={{hieght:"400px",width:"800px"}} />




                        </div>
                    </div>
                </section>


                <section className="three">
                    <div className="twoHead">
                        <div className="twoHeadRight product-content">
                            <h2 className="twoTitle">FreeStyle Libre 2 Plus Sensor</h2>
                            <h3 className="product-price">123$</h3>
                            <p>The FreeStyle Libre 2 Plus sensor is the latest innovation to the FreeStyle Libre 2 system. With all the features you love, PLUS:</p>

                            <ul>
                                <li>Extended 15-day wear time</li>
                                <li> Improved accuracy: our most accurate sensor!76</li>
                                <li>Available forss all Australians living with diabetes (aged 2+)</li>
                            </ul>

                            <div>
                                <div className="buttonHead">
                                    <div className="buttonaddminus">
                                        {/* <button className="plus" onClick={addition}>+</button>
                                        <h2>Count:{count}</h2>
                                        <button className="minus" onClick={subraction}>-</button> */}
                                    </div>

                                    <button className="add-cart-button">add to cart</button>
                                </div>
                            </div>

                            <a href="">Learn More</a>

                        </div>

                        <div className="twoHeadLeft">
                       

                            <img src={`https:${landing.image3}`}
                            alt={landing.image4}
                            // className="product-image"
                            style={{height:"400px",width:"800px"}} />


                        </div>
                    </div>
                </section>


                <section className="three">
                    <div className="twoHead">
                        <div className="twoHeadRight product-content">
                            <h2 className="twoTitle">FreeStyle Libre 2 Plus Sensor</h2>
                            <h3 className="product-price">123$</h3>
                            <p>The FreeStyle Libre 2 Plus sensor is the latest innovation to the FreeStyle Libre 2 system. With all the features you love, PLUS:</p>

                            <ul>
                                <li>Extended 15-day wear time</li>
                                <li> Improved accuracy: our most accurate sensor!76</li>
                                <li>Available forss all Australians living with diabetes (aged 2+)</li>
                            </ul>

                            <div>
                                <div className="buttonHead">
                                    <div className="buttonaddminus">
                                        {/* <button className="plus" onClick={addition}>+</button>
                                        <h2>Count:{count}</h2>
                                        <button className="minus" onClick={subraction}>-</button> */}
                                    </div>

                                    <button className="add-cart-button">add to cart</button>
                                </div>
                            </div>

                            <a href="">Learn More</a>

                        </div>

                        <div className="twoHeadLeft">
                            <img src="2Every4Weeks_S_S.webp" />
                        </div>
                    </div>
                </section>


                <section className="four">
                    <div className="twoHead">
                        <div className="twoHeadRight product-content">
                            <h2 className="twoTitle">FreeStyle Libre 2 Plus Sensor</h2>
                            <h3 className="product-price">128$</h3>
                            <p>The FreeStyle Libre 2 Plus sensor is the latest innovation to the FreeStyle Libre 2 system. With all the features you love, PLUS:</p>

                            <ul>
                                <li>Extended 15-day wear time</li>
                                <li> Improved accuracy: our most accurate sensor!76</li>
                                <li>Available forss all Australians living with diabetes (aged 2+)</li>
                            </ul>

                            <button>add to cart</button>
                            <a href="">Learn More</a>

                        </div>

                        <div className="twoHeadLeft">
                            <img src="2Every4Weeks_S_S.webp" />
                        </div>
                    </div>
                </section>


                <section>
                    <ProductSection />
                </section>


                <section>
                    <SubscribeForm />
                </section>

            </div>
        </>
    );
}
