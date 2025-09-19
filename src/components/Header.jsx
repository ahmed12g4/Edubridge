import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="logo">
          Edubridge
        </Link>

        {/* Nav Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" onClick={() => setMenuOpen(false)}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Account Buttons */}
        <div className="account">
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Sign In
          </Link>
          <Link
            to="/join"
            className="btn-join"
            onClick={() => setMenuOpen(false)}
          >
            Join Us <FaArrowRight />
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
