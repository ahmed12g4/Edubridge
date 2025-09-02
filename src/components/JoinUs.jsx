import React from "react";
import { useState } from "react";

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [succses, setSuccses] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setSuccses("")
      setEmailError("Please add your email");
    } else {
      setEmailError("");
      setSuccses("Thank you for your subscription");
    }
  };

  return (
    <section id="join-us">
      <div className="content">
        <p className="text-primary">Practice Advive</p>
        <h2>JOIN US</h2>
        <p>
          Have Questions or need assistance? Reach out to us through our our
          team we are here to help and ensure you have the best experience
          possible!
        </p>

        <form onSubmit={handelSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? "input-error" : ""}
          />
          {emailError && (
            <p className="error-message" style={{ color: "red" }}>
              {emailError}
            </p>
          )}
          {succses && (
            <p
              className="succses-message"
              style={{ color: "rgb(89, 223, 89)" }}
            >
              {succses}
            </p>
          )}
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
