import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <img
                    src="/logo.webp"
                    alt="Logo"
                    className="logo"
                />

                <div className="menu">
                    <a href="/">Mobile Compatibility</a>
                    <a href="/">Libre Moments</a>
                    <a href="/">Important Safety Information</a>
                </div>
            </div>


            <div className="menu-dropdown-menu">
                <div className="first-dropdown-box">
                    <li className="menu-item">
                        <a href="#">PRODUCTS</a>

                        <div className="dropdown">
                            <a href="#">Product 1</a>
                            <a href="#">Product 2</a>
                            <a href="#">Product 3</a>
                        </div>
                    </li>
                </div>

                <div className="second-dropdown-box">
                    <li className="menu-two"style={{decoration:"none"}}>
                        <a href="#">SUBSCRIPTION</a>

                        <div className="dropdown2">
                            <a href="#">Product 4</a>
                            <a href="#">Product 5</a>
                            <a href="#">Product 6</a>
                           

                        </div>

                    </li>
                </div>



            </div>


        </>


    );
}