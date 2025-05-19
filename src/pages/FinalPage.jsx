
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Link } from "react-router";
import Header from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import checked from '../assets/checked-icon.svg';
import classes from '../modules/FinalPage.module.scss';

export const FinalPage = () => {
    const [showConfetti, setShowConfetti] = useState(true);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 7000);
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Header />
            {showConfetti && <Confetti width={dimensions.width} height={dimensions.height} />}
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
