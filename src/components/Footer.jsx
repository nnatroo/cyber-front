import { Link } from "react-router";
import '/src/modules/Footer.modules.scss'

export const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            <div className='footer-container'>
                <div className='footer-column'>
                    <h2 className='footer-title'>cyber</h2>
                    <p className='footer-description'>
                        We are a residential interior design firm located in Portland.
                        Our boutique-studio offers more than just design services.
                    </p>

                    <div className='social-icons'>
                        <Link to="/" aria-label="Twitter" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </Link>
                        <Link to="/" aria-label="Facebook" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </Link>
                        <Link to="/" aria-label="TikTok" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path><path d="M16 8v5a3 3 0 0 1-6 0v-1"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="17" y1="6" x2="7" y2="6"></line></svg>
                        </Link>
                        <Link to="/" aria-label="Instagram" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </Link>
                    </div>
                </div>

                <div className='footer-column middle-column'>
                    <h3 className='footer-heading'>Services</h3>
                    <ul className='footer-links'>
                        <li><Link to="/">Bonus program</Link></li>
                        <li><Link to="/">Gift cards</Link></li>
                        <li><Link to="/">Credit and payment</Link></li>
                        <li><Link to="/">Service contracts</Link></li>
                        <li><Link to="/">Non-cash account</Link></li>
                        <li><Link to="/">Payment</Link></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h3 className='footer-heading'>Assistance to the buyer</h3>
                    <ul className='footer-links'>
                        <li><Link to="/">Find an order</Link></li>
                        <li><Link to="/">Terms of delivery</Link></li>
                        <li><Link to="/">Exchange and return of goods</Link></li>
                        <li><Link to="/">Guarantee</Link></li>
                        <li><Link to="/">Frequently asked questions</Link></li>
                        <li><Link to="/">Terms of use of the site</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 cyber. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;