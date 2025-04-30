import classes from '../modules/footer.module.scss'
import cyberLogo from '../assets/cyber-logo-white.svg'
import facebookLogo from '../assets/facebook.svg'
import twitterLogo from '../assets/twitter.svg'
import tiktokLogo from '../assets/tiktok.svg'
import instagramLogo from '../assets/instagram.svg'


export const Footer = () =>{


    return (
        <>
            <div className={`${classes['footer-main-box']}`}>
                <div className={`${classes['footer-big-box']}`}>
                    <img src={cyberLogo}/>
                    <br/>
                    <p className={classes['gray-footer-options']}>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>

                    <div className={`${classes['socials-box']}`}>
                        <img src={facebookLogo}/>
                        <img src={twitterLogo}/>
                        <img src={tiktokLogo}/>
                        <img src={instagramLogo}/>
                    </div>
                </div>
                <div className={`${classes['footer-small-box']}`}>
                    <ul className="first-option-line">
                        <li className="bold-footer-option"><b>Services</b></li>
                        <span className={`${classes['gray-footer-options']}`}>
                            <li>Bonus program</li>
                            <li>Gift cards</li>
                            <li>Credit and payment</li>
                            <li>Service contracts</li>
                            <li>Non-cash account</li>
                            <li>Payment</li>
                        </span>
                    </ul>
                </div>
                <div className={`${classes['footer-small-box']}`}>
                    <ul className="second-option-line">
                        <li className="bold-footer-option"><b>Assistance to the buyer </b></li>
                        <span className={`${classes['gray-footer-options']}`}>
                            <li>Find an order</li>
                            <li>Terms of delivery</li>
                            <li>Exchange and return of goods</li>
                            <li>Guarantee</li>
                            <li>Frequently asked questions</li>
                            <li>Terms of use of the site</li>
                        </span>
                    </ul>
                </div>


            </div>


        </>
    )

};

export default Footer;