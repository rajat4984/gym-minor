import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="footer-text">© 2022 Power gym, inc</div>
      <div className="social-contianer">
        <a href="https://www.instagram.com/" target={"_blank"} className="social-icon">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/" target={"_blank"} className="social-icon">
          <AiFillFacebook />
        </a>
        <a href="https://www.linkedin.com/" target={"_blank"} className="social-icon">
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
