import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!hasError) {
      setSuccess("Sign in successful");
    } else {
      setSuccess("");
    }
  };

  return (
    <>
      <Header />
    <div className="login-page-container">
      <div className="login-box">
        <h2 className="login-title">Sign In</h2>
        <p className="login-subtitle">to continue your account</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={
              emailError ? "login-input login-input-error" : "login-input"
            }
          />
          {emailError && <p className="login-error-message">{emailError}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={
              passwordError ? "login-input login-input-error" : "login-input"
            }
          />
          {passwordError && (
            <p className="login-error-message">{passwordError}</p>
          )}

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="login-forgot">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>

          {success && <p className="login-success">{success}</p>}

          <div className="login-or">
            <span></span> or <span></span>
          </div>

          <button
            type="button"
            className="google-btn"
            onClick={() =>
              (window.location.href = "https://accounts.google.com/signin")
            }
          >
            <FcGoogle /> Continue with Google
          </button>

          <button
            type="button"
            className="facebook-btn"
            onClick={() => (window.location.href = "https://facebook.com")}
          >
            <FaFacebook /> Continue with Facebook
          </button>

          <p className="login-new">
            Don't have an account? <Link to="/join">Join us</Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
}
