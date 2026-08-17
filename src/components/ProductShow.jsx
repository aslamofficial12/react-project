import "./ProductShow.css";
import  logo from "../assets/logo.webp"
export default function ProductShow() {
    return (
        <div className="container">
        <div className="product-card">

              <img
        //    style={{height:"100px",width:"auto"}}
          style={{ height: "100px", width: "auto", objectFit: "contain" }}
                src={logo}
                alt="product"
            />

            <h2>Midnight Green Jumpsuit</h2>

            <p>Brand new product</p>

            <h3>₹4799</h3>

            <button>Buy Now</button>

        </div>
        </div>
    );
}