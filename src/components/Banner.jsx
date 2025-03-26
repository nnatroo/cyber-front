import classes from '../modules/Banner.module.scss'

const BigSummerSale = () => {
    return (
        <div className={classes['container']}>
            <div className={classes["content"]}>
                <h1 className={classes["title"]}>
                    Big Summer <span className={classes["sale"]}>Sale</span>
                </h1>
                <p className={classes["description"]}>
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                </p>
                <button className={classes["shop-now-btn"]}>Shop Now</button>
            </div>
        </div>
    );
};

export default BigSummerSale;
