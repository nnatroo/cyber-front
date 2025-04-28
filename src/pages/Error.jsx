import classes from '../modules/Error.module.scss'
import {Link} from "react-router";
import Header from "../components/Header.jsx";

export const Error = () => {

    return (
        <>
            <Header></Header>
            <div className={classes['main-wrapper']}>
                <div className={classes['inside-content']}>
                    <h1>404 Not Found</h1>
                    <p>Your visited page not found. You may go home page.</p>
                </div>

                <div className={classes['btn-wrapper']}>
                    <Link to='/'>
                        <button className={classes['btn']}>
                            <p>Back to Home Page</p>
                        </button>
                    </Link>
                </div>

            </div>

        </>
    )
}

export default Error