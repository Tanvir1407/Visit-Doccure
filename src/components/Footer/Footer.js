import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left-side">
        <img src={"https://i.ibb.co/ggpZyPk/footer-logo.png"} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="icon">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>
      </div>

          <div className="footer-medel-position">
              <h1>For Doctor</h1>
        <div className="link-box">
          <i class="fas fa-angle-right"></i> <p>Blogs</p>
        </div>
        <div className="link-box">
          <i class="fas fa-angle-right"></i> <p>Appoinment</p>
        </div>
        <div className="link-box">
          <i class="fas fa-angle-right"></i> <p>Login</p>
        </div>
        <div className="link-box">
          <i class="fas fa-angle-right"></i><p>Chat</p>
        </div>
      </div>

      <div className="footer-right-side">
        <h1>Contact Us</h1>
        <div className="icon-box">
          <i class="fas fa-map-marker-alt"></i>{" "}
          <p>
            3556 Beech Street, San Francisco, <br /> California, CA 94108
          </p>
        </div>
        <div className="icon-box">
          <i class="fas fa-mobile-alt"></i> <p>+1 315 369 5943</p>
        </div>
        <div className="icon-box">
          <i class="fas fa-envelope"></i> <p>doccure@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
