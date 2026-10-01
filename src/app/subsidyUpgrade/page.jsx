"use client";
import SubscribeForm from "../../components/SubscribeForm";
import Faq from "../../components/faq/Faq";
import "./globals.css";
import { useState, useEffect } from "react";

export default function Home() {

  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();


  useEffect(() => {
    setLoading(true);

    fetch("/api/subsidyUpgrade")
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







      <div className="main">

        <section className="hero-banner">
          <div className="perfect-white-circle">
            <h2>
              Automatic NDSS<br />
              upgrade to<br />
              FreeStyle Libre 2<br />
              Plus
            </h2>
          </div>
        </section>
        {/* <sec className="sectionOne">
          <div className="head-one">

            <div className="right">

           

            </div>

            <div className="left">
                     <img src="Digital_Large_Transparent_Bknd_7_1_.webp" style={{ width: "700px", height: "500px", borderRadius: "500px" }} alt="image" /> 

            </div>



          </div>







        </sec> */}

        <section className="sectiontwo">
          <div className="sect-two">

            <p>{datas.introDescription}

            </p>
            <h2>{datas.introHighlight}</h2>
            <hr></hr>
          </div>
        </section>

        <section className="three">
          <div className="sect-three">
            <h2>{datas.featuresMainTitle}</h2>
            <hr></hr>

            <h2>{datas.feature1Title}</h2>
            <p>{datas.feature1Description}</p>


            <h2>{datas.feature2Title}</h2>
            <p>{datas.feature2Description}</p>



            <h2>{datas.feature3Title}</h2>
            <p>{datas.feature3Description}</p>
            <a href={datas.feature3LinkUrl}>{datas.feature3LinkText}</a>

            <h2>{datas.feature4Title}</h2>
            <p>{datas.feature4Description}<a href={datas.feature4LinkUrl}>{datas.feature4LinkText}</a></p>


            <h2>{datas.supportTitle}</h2>
            <p>{datas.supportDescriptionPrimary}</p>
            <a href="#">{datas.supportLink1Text}</a>
            <a href="#">{datas.supportLink2Text}</a>
            <a href="#">{datas.supportLink3Text}</a>
            <p>{datas.supportDescriptionSecondary}</p>


          </div>
        </section>

        <section className="four">

          <div className="sect-four">
            <Faq />

          </div>
        </section>
      </div>

      <section className="last">
        <div className="lastHead">
          <SubscribeForm />
        </div>
      </section>

    </>
  );
}
