import "./Header.css";

export default function Header() {
  return (
    <div className="top-navbar">
      <div className="top-left">
        <img
          src="/logo.webp"
          alt="Libre Logo"
          className="libre-logo"
        />
      </div>

      <div className="top-right">
        <div className="top-links">
          <a href="/">Mobile Compatibility</a>
          <a href="/">Libre Moments</a>
          <a href="/">Important Safety Information</a>
        </div>

        <div className="abbott-logo-container">
          <img
            src="/abbott-logo.webp"
            alt="Abbott"
            className="abbott-logo"
          />
        </div>
      </div>
    </div>
  );
}
