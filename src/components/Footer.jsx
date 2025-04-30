import React from "react";
import footerStyles from "../modules/Footer.module.scss";
import "../modules/reset.module.scss"; 
import logo from "../assets/White-Logo.svg";
import twitterIcon from "../assets/Twitter.svg";
import facebookIcon from "../assets/Facebook.svg";
import tiktokIcon from "../assets/Tiktok.svg";
import instagramIcon from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={`${footerStyles.footerWrapper} ${footerStyles.container}`}>
        <div className={footerStyles.descriptionWrapper}>
          <img src={logo} alt="Cyber Logo" />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        <div className={footerStyles.footerOptionsWrapper}>
          <ul className={footerStyles.firstOptionLine}>
            <li className={footerStyles.boldFooterOption}>Services</li>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
          <ul className={footerStyles.secondOptionLine}>
            <li className={footerStyles.boldFooterOption}>Assistance to the buyer</li>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>

      <div className={`${footerStyles.socialWrapper} ${footerStyles.container}`}>
        <img src={twitterIcon} alt="Twitter" />
        <img src={facebookIcon} alt="Facebook" />
        <img src={tiktokIcon} alt="TikTok" />
        <img src={instagramIcon} alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
