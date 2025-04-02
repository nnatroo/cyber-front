import {Link} from "react-router";
import classes from "../modules/Footer.module.scss"
import CyberLogoWhite from '../assets/cyber-logo-white.svg'
import FacebookLogo from '../assets/facebook-logo.svg'
import InstagramLogo from '../assets/instagram-logo.svg'
import TwitterLogo from '../assets/twitter-logo.svg'
import TiktokLogo from '../assets/tiktok-logo.svg'

export const Footer = () => {
    return (
        <footer className={classes['footer-wrapper']}>
            <div className={classes['footer-container']}>
                <div className={classes['footer-column']}>
                    <h2 className={classes['footer-title']}>
                        <img src={CyberLogoWhite} alt={""}/>
                    </h2>
                    <p className={classes['footer-description']}>
                        We are a residential interior design firm located in Portland.
                        Our boutique-studio offers more than just design services.
                    </p>
                </div>

                <div className={`${classes['footer-column']} ${classes['middle-column']}`}>
                    <h3 className={classes['footer-heading']}>Services</h3>
                    <ul className={classes['footer-links']}>
                        <li><Link to="/">Bonus program</Link></li>
                        <li><Link to="/">Gift cards</Link></li>
                        <li><Link to="/">Credit and payment</Link></li>
                        <li><Link to="/">Service contracts</Link></li>
                        <li><Link to="/">Non-cash account</Link></li>
                        <li><Link to="/">Payment</Link></li>
                    </ul>
                </div>

                <div className={classes['footer-column']}>
                    <h3 className={classes['footer-heading']}>Assistance to the buyer</h3>
                    <ul className={classes['footer-links']}>
                        <li><Link to="/">Find an order</Link></li>
                        <li><Link to="/">Terms of delivery</Link></li>
                        <li><Link to="/">Exchange and return of goods</Link></li>
                        <li><Link to="/">Guarantee</Link></li>
                        <li><Link to="/">Frequently asked questions</Link></li>
                        <li><Link to="/">Terms of use of the site</Link></li>
                    </ul>
                </div>


            </div>
            <div className={classes['social-icons']}>
                <Link to="/" aria-label="Twitter" className={classes['social-icon']}>
                    <img src={TwitterLogo} alt="twitter-logo"/>
                </Link>
                <Link to="/" aria-label="Facebook" className={classes['social-icon']}>
                    <img src={FacebookLogo} alt="facebook-logo"/>
                </Link>
                <Link to="/" aria-label="TikTok" className={classes['social-icon']}>
                    <img src={TiktokLogo} alt="tiktok-logo"/>
                </Link>
                <Link to="/" aria-label="Instagram" className={classes['social-icon']}>
                    <img src={InstagramLogo} alt="instagram-logo"/>
                </Link>
            </div>
        </footer>
    );
};
