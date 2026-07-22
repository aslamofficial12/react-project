import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer"
    
    
    >
      <div className="footer-container">

        {/* Top Menu */}
        <div className="footer-top">
          <a href="#">SITEMAP</a>
          <a href="#">DISCLAIMERS & REFERENCES</a>
          <a href="#">LIBRE MOMENTS</a>
          <a href="#">CONTACT US</a>
        </div>

        <hr />

        <div className="footer-content">

          {/* Left Content */}
          <div className="footer-left">
            <img 
              src="/logo.webp" 
              alt="Logo" 
              className="logo"
            />

            <p>
              The FreeStyle Libre 2 Plus System and the FreeStyle Libre 3 Plus
              System are indicated for measuring interstitial fluid glucose
              levels in people with diabetes.
            </p>

            <p>
              Abbott Diabetes Care, 666 Doncaster Road, Doncaster VIC 3108 Australia.
            </p>

            <p>
              Copyright © 2025 Abbott. All rights reserved.
            </p>
          </div>


          {/* Right Content */}
          <div className="footer-right">

            <div className="social">
              <span>STAY CONNECTED</span>

              <div className="icon">
                f
              </div>

              <div className="icon">
                ◎
              </div>
            </div>


            <div className="footer-links">
              <a href="#">Track Your Order</a>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Sale</a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}