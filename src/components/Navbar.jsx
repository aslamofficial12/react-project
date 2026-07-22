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

            
            <div className="menubardiv">

                <div className="listmenu">
                    <button>Products</button>
                    <div className="dropdown">
                        <a href="#">Laptop</a>
                        <a href="#">Mobile</a>
                        <a href="#">Tablet</a>
                    </div>

                </div>
            </div>
        </>


    );
}