import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
  return (
    <header id="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          Edubridge
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="account">
          <Link to="/login">Sign In</Link>
          <Link to="/join" className="btn-join">
            Join Us <FaArrowRight />
          </Link>
        </div>
      </nav>
    </header>
  );
}
