import { Link } from "react-router";
import Header from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import checked from '../assets/checked-icon.svg';
import classes from '../modules/FinalPage.module.scss';

export const FinalPage = () => {
    return (
        <>
            <Header />
            <div className={classes['main-wrapper']}>
                <div className={classes['inside-content']}>
                    <h1>Payment was successful!</h1>
                    <img src={checked} alt="Success" className={classes['checked']}/>
                    <p>Thank You For Your Purchase</p>
                </div>

                <div className={classes['btn-wrapper']}>
                    <Link to='/'>
                        <button>
                            Back to Home Page
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};
