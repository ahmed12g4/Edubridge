import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>iOS &amp; Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
        </div>

        <div className="copy-right">
          <p>
            &copy; 2025 | All rights reserved. Made by{" "}
            <a
              href="https://ahmed12g4.github.io/My-Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              <strong className="text-primary">Ahmed Seleem</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
