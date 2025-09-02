import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Header from "../components/Header";

export default function JoinUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (fullName.trim() === "") {
      setFullNameError("Full Name is required");
      hasError = true;
    } else {
      setFullNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (confirmPassword !== password || confirmPassword.trim() === "") {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    } else {
      setConfirmPasswordError("");
    }

    if (!hasError) {
      setSuccess("Account created successfully!");
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setSuccess("");
    }
  };

  return (
    <>
      < Header />
    <div className="join-container">
      <div className="text">
        <h2>Join Us</h2>
        <p className="join-info">Create your account to get started</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="join-inputs">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={fullNameError ? "join-input-error" : ""}
          />
          <p className="join-error-message">{fullNameError}</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? "join-input-error" : ""}
          />
          <p className="join-error-message">{emailError}</p>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passwordError ? "join-input-error" : ""}
          />
          <p className="join-error-message">{passwordError}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={confirmPasswordError ? "join-input-error" : ""}
          />
          <p className="join-error-message">{confirmPasswordError}</p>
        </div>

        {success && <p className="join-success-message">{success}</p>}

        <button className="join-btn" type="submit">
          Sign Up
        </button>

        <div className="or">
          <span className="left-line"></span>
          <p className="join-or">or</p>
          <span className="right-line"></span>
        </div>

        <div className="join-social">
          <a
            href="https://accounts.google.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="google-btn"
          >
            <FcGoogle /> Continue with Google
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-btn"
          >
            <FaFacebook /> Continue with Facebook
          </a>
        </div>
      </form>
    </div>
    </>
  );
}
