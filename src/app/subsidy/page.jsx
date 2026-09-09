"use client";
import SubscribeForm from "../../components/SubscribeForm";
import "./style.css";
import { useState, useEffect } from 'react';
export default function () {

    const [datas, setDatas] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();


    useEffect(() => {
        setLoading(true);

        fetch("/api/subsidyandaccess")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch home page");
                }

                return res.json();
            })
            .then((data) => {
                console.log("API data:", data);
                setDatas(data);
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

    if (!datas) {
        return null;
    }


    return (

        <>
            <div className="mainContainer">
                <section className="one">

                    <div className="head">

                        <div className="right">
                            <h2>{datas.maintitle}</h2>
                            <h2>Options for Accessing FreeStyle<br></br> Libre 2 Plus</h2>
                            <h2>{datas.maintitle}</h2>

                            <p>There are multiple ways to access the FreeStyle Libre 2 system,<br></br> we'll help you find the best option.</p>

                            <div className="buttonhead">
                                <button>{datas.diabetesType1label}</button>
                                <button>{datas.diabetesType2label}</button>
                            </div>


                        </div>

                        <div className="left">
{/* 
                            <img src="Digital_Large_Transparent_Bknd_7_1_.webp" style={{ width: "700px", height: "500px", borderRadius: "500px" }} alt="image" /> */}


        <img src={`https:${datas.image1}`}
                                alt={datas.image1}
                                className="product-image"
                                // style={{ hieght: "400px", width: "800px" }}
                                style={{ width: "700px", height: "500px", borderRadius: "500px" }} />


                        </div>
                    </div>

                </section>


                <section className="sectwo">
                    <h1 style={{ textAlign: "center" }}>{datas.type1SectionTitle}</h1>
                    <div className="sectiontwo">

                        <div className="sect-two-right">

                            <h1>{datas.ndssTitle}</h1>

                            <p>{datas.ndssDescription}</p><br></br>

                            <p> {datas.ndssLearnMoreText}</p>

                            <button>{datas.ndssLinkLabel}</button>


                        </div>

                        <div className="sect-two-left">

                            {/* <img src="Digital_Large_Transparent_Bknd_7_1_.webp" style={{ width: "700px", height: "500px", borderRadius: "10px" }} alt="image" /> */}

                            <img src={`https:${datas.image3}`}
                                alt={datas.image3}
                                className="product-image"
                                // style={{ hieght: "400px", width: "800px" }}
                                style={{ width: "700px", height: "500px", borderRadius: "10px" }} />

                        </div>

                    </div>
                </section>




                <section className="secthree">

                    <div className="sectionthree">

                        <div className="sect-three-right">

                            {/* <img src="Digital_Large_Transparent_Bknd_7_1_.webp" style={{ width: "700px", height: "500px", borderRadius: "10px" }} alt="image" /> */}



                            <img src={`https:${datas.image2}`}
                                alt={datas.image5}
                                className="product-image"
                                // style={{ hieght: "400px", width: "800px" }}
                                style={{ width: "700px", height: "500px", borderRadius: "10px" }} />


                        </div>

                        <div className="sect-three-left">


                            <h1>{datas.type1TrialTitle}</h1>
                            <hr></hr>

                            <p>{datas.type1TrialDescription}</p><br></br>

                            <p> {datas.ndssLearnMoreText}</p>

                            <button>{datas.ndssLinkLabel}</button>


                        </div>

                    </div>
                </section>



                <section className="sectfour">

                    <div className="sectiontfour">

                        <div className="sect-four-right">

                            <h1>{datas.type1dvaTitle}</h1>

                            <hr></hr>
                            {/* <hr></hr> */}

                            <p>{datas.type1dvaDescription}</p><br></br>

                            <p> {datas.type1dvaNote}</p>

                            <button>{datas.type1dvaButtonLabel}</button>


                        </div>

                        <div className="sect-four-left">
                            {/* <img src="Digital_Large_Transparent_Bknd_7_1_.webp" style={{ width: "700px", height: "500px", borderRadius: "10px" }} alt="image" /> */}



                            <img src={`https:${datas.image6}`}
                                alt={datas.image6}
                                className="product-image"
                                // style={{ hieght: "400px", width: "800px" }}
                                style={{ width: "700px", height: "500px", borderRadius: "10px" }} />




                        </div>

                    </div>
                </section>




                <section className="section-five">

                    <div className="sectionhead">
                        <div className="sect-five-right">

                            {/* <img src="Digital_Large_Transparent_Bknd_7_1_.webp" style={{ width: "100%", height: "500px", borderRadius: "10px" }} alt="image2" /> */}

                            <img src={`https:${datas.image8}`}
                                alt={datas.image8}
                                className="product-image"
                                // style={{ hieght: "400px", width: "800px" }}
                                style={{ width: "100%", height: "500px", borderRadius: "10px" }} />

                            <h2>{datas.eftTitle}</h2>
                            <p>
                                {datas.eftDescription}
                            </p>
                            <a href="#" style={{ color: "blue" }}>{datas.eftLinkLabel}</a>


                        </div>

                        <div className="sect-five-left">
                            {/* <img src="Digital_Large_Transparent_Bknd_7_1_.webp" style={{ width: "100%", height: "500px", borderRadius: "10px" }} alt="image3" /> */}



                            <img src={`https:${datas.image5}`}
                                alt={datas.image5}
                                className="product-image"
                                // style={{ hieght: "400px", width: "800px" }}
                                style={{ width: "100%", height: "500px", borderRadius: "10px" }} />




                            <h2 >{datas.governmentEnquiriesTitle}</h2>
                            <p>{datas.governmentEnquiriesDescription}</p>
                            <a href="#" style={{ color: "blue" }}>{datas.governmentEnquiriesButtonLabel}</a>
                        </div>

                    </div>

                </section>


                <section className="lastsection">
                    <div className="head">
                        <SubscribeForm />


                    </div>
                </section>

            </div>
        </>
    )
}