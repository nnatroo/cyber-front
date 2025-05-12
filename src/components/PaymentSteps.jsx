import classes from "../modules/PaymentSteps.module.scss";
import { Link, useLocation } from "react-router";
import AddressIcon from "../assets/location-icon.svg";
import ShippingIcon from "../assets/shipping-icon.svg";
import PaymentIcon from '../assets/payment-icon.svg';

const PaymentSteps = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className={classes['page-options']}>
            <Link to='/address'>
                <div className={`
                    ${classes.steps} 
                    ${currentPath === '/address' ? classes.active : ''} 
                    ${currentPath === '/address' ? classes['active-address'] : ''}
                       ${currentPath === '/shipping' ? classes['mobile-hide'] : ''} 
                          ${currentPath === '/payment' ? classes['mobile-hide'] : ''} 
                `}>
                    <img
                        src={AddressIcon}
                        alt="location-icon"
                        className={currentPath === '/address' ? classes['active-icon'] : ''}
                    />
                    <span>
                        <p>Step 1</p>
                        <h2>Address</h2>
                    </span>
                </div>
            </Link>

            <Link to='/shipping'>
                <div className={`
                    ${classes.steps} 
                    ${currentPath === '/shipping' ? classes.active : ''} 
                    ${currentPath === '/shipping' ? classes['active-shipping'] : ''}
                    
                `}>
                    <img
                        src={ShippingIcon}
                        alt="shipping-icon"
                        className={currentPath === '/shipping' ? classes['active-icon'] : ''}
                    />
                    <span>
                        <p>Step 2</p>
                        <h2>Shipping</h2>
                    </span>
                </div>
            </Link>

            <Link to='/payment'>
                <div className={`
                    ${classes.steps} 
                    ${currentPath === '/payment' ? classes.active : ''} 
                    ${currentPath === '/payment' ? classes['active-payment'] : ''}
                         ${currentPath === '/address' ? classes['mobile-hide'] : ''} 
       
                `}>
                    <img
                        src={PaymentIcon}
                        alt="payment-icon"
                        className={currentPath === '/payment' ? classes['active-icon'] : ''}
                    />
                    <span>
                        <p>Step 3</p>
                        <h2>Payment</h2>
                    </span>
                </div>
            </Link>

        </div>
    );
};

export default PaymentSteps;

