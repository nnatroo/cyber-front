import classes from '../modules/Error.module.scss'
import {Link} from "react-router";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

export const FinalPage = () => {
    return (
        <>
            <Header/>
            <div className={classes['main-wrapper']}>
                <div className={classes['inside-content']}>
                    <h1>payment was successful </h1>
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
            <Footer></Footer>
        </>
    )
}