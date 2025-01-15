import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="quicklinks-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>

              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Disclaimer</a></li>

            </ul>
          </div>

          <div className="footer-section">
            <h4>Cities</h4>
            <ul className="cities-list">
              <li><a href="#">Bangalore</a></li>
              <li><a href="#">Hyderabad</a></li>
              <li><a href="#">Mumbai</a></li>
              <li><a href="#">Chennai</a></li>
              <li><a href="#">Mangalore</a></li>
              <li><a href="#">Kochi</a></li>
              <li><a href="#">Goa</a></li>
              <li><a href="#">Pune</a></li>
              <li><a href="#">Coimbatore</a></li>
            </ul>
          </div>


          <div className="footer-section">
            <h4>Media</h4>
            <ul >
              <li><a href="#">News</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Press Release</a></li>
            </ul>
          </div>
          
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="newsletter-input"
            />
             <a type="submit" aria-label="Submit" className="newsletter-submit">
      <FaPaperPlane />
    </a>
           
          </form>
          


  <div className="social-icons">
    <a href="#" aria-label="Facebook"><FaFacebook /></a>
    <a href="#" aria-label="Twitter"><FaTwitter /></a>
    <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
    <a href="#" aria-label="Instagram"><FaInstagram /></a>
  </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h2>DS MAX</h2>
        <p>Copyright @2022 Provident Housing. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
