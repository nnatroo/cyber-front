    import React from "react";
    import classes from "../modules/HeroSection.module.scss";
    import "../styles/styles.scss";


    import heroImg from "../assets/Hero-Img.png";
    import ps5Img from "../assets/Ps5.png";
    import airpodsImg from "../assets/Apple-Airpods.png";
    import visionProImg from "../assets/Vision-Pro.png";
    import macbookImg from "../assets/MacBook-Pro.png";
    import airpodsMobileImg from "../assets/Airpods-img-mobile.png";
    import visionProMobileImg from "../assets/Vision-img-mobile.png";
    import ps5MobileImg from "../assets/Ps5-img-mobile.png";
    import macbookMobileImg from "../assets/Macbook-img-mobile.png";

    const Hero = () => {
        return (
            <>
                <section className={classes["hero-section"]}>
                    <div className={`${classes["hero-section-wrapper"]} ${classes["container"]}`}>
                        <div className={classes["hero-content-wrapper"]}>
                            <p className={classes["hero-first-line"]}>Pro.Beyond.</p>
                            <h1 className={classes["hero-title"]}>
                                IPhone 14 <span>Pro</span>
                            </h1>
                            <p className={classes["hero-third-line"]}>
                                Created to change everything for the better. For everyone
                            </p>
                            <div className={classes["hero-btn-wrapper"]}>
                                <button className={classes["white-btn-large"]}>Shop Now</button>
                            </div>
                        </div>
                        <figure className={classes["hero-img-wrapper"]}>
                            <img
                                src={heroImg}
                                alt="mobile-phone"
                                className={classes["hero-img"]}
                            />
                        </figure>
                    </div>
                </section>

                <section className={classes["featured-products-section"]}>
                    <div className={classes["left-side-products"]}>
                        <div className={classes["first-line-products"]}>
                            <figure className={classes["ps5-img-wrapper"]}>
                                <img
                                    className={classes["ps5-img"]}
                                    src={ps5Img}
                                    alt="ps-5"
                                />
                            </figure>
                            <div className={classes["ps5-details-wrapper"]}>
                                <h2 className={classes["ps5-title"]}>Playstation 5</h2>
                                <p
                                    className={`${classes["feature-card-description"]} ${classes["margin-top-16px"]}`}
                                >
                                    Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                                    will redefine your PlayStation experience.
                                </p>
                            </div>
                        </div>

                        <div className={classes["second-line-products"]}>
                            <div className={classes["left-second-line-products"]}>
                                <figure className={classes["airpods-img-wrapper"]}>
                                    <img
                                        className={classes["airpods-img"]}
                                        src={airpodsImg}
                                        alt="airpods"
                                    />
                                </figure>
                                <div className={classes["airpods-details-wrapper"]}>
                                    <h2 className={classes["airpods-title"]}>
                                        Apple AirPods <span>Max</span>
                                    </h2>
                                    <p
                                        className={`${classes["feature-card-description"]} ${classes["margin-top-8px"]}`}
                                    >
                                        Computational audio. Listen, it's powerful
                                    </p>
                                </div>
                            </div>
                            <div className={classes["right-second-line-products"]}>
                                <figure className={classes["vision-img-wrapper"]}>
                                    <img
                                        className={classes["vision-pro-img"]}
                                        src={visionProImg}
                                        alt="visions-pro"
                                    />
                                </figure>
                                <div className={classes["vision-pro-details-wrapper"]}>
                                    <h2>
                                        Apple Vision <span>Pro</span>
                                    </h2>
                                    <p
                                        className={`${classes["feature-card-description"]} ${classes["margin-top-8px"]}`}
                                    >
                                        An immersive way to experience entertainment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes["right-side-products"]}>
                        <div className={classes["right-side-products-content"]}>
                            <h2>
                                Macbook <span>Air</span>
                            </h2>
                            <p
                                className={`${classes["feature-card-description"]} ${classes["margin-top-16px"]}`}
                            >
                                The new 15‑inch MacBook Air makes room for more of what you love
                                with a spacious Liquid Retina display.
                            </p>
                            <button className={classes["black-btn-large"]}>Shop Now</button>
                        </div>
                        <figure className={classes["right-side-product-img-wrapper"]}>
                            <img
                                className={classes["mac-img"]}
                                src={macbookImg}
                                alt="macbook-air"
                            />
                        </figure>
                    </div>
                </section>

                <section className={classes["featured-products-section-mobile"]}>
                    <div className={classes["feature-product-card"] + " " + classes["airpods-card-mobile"]}>
                        <img
                            className={classes["airpods-img-mobile"]}
                            src={airpodsMobileImg}
                            alt="Airpods"
                        />
                        <h3 className={`${classes["feature-product-card-title"]} ${classes["airpods-card-mobile-title"]}`}>
                            Apple AirPods <span>Max</span>
                        </h3>
                        <p className={`${classes["feature-card-description"]} ${classes["margin-top-8px"]}`}>
                            Computational audio. Listen, it's powerful
                        </p>
                    </div>

                    <div className={`${classes["feature-product-card"]} ${classes["vision-pro-card-mobile"]}`}>
                        <img
                            className={classes["vision-pro-img-mobile"]}
                            src={visionProMobileImg}
                            alt="Vision-Pro"
                        />
                        <h3 className={`${classes["feature-product-card-title"]} ${classes["vision-pro-mobile-title"]}`}>
                            Apple Vision <span>Pro</span>
                        </h3>
                        <p className={`${classes["feature-card-description"]} ${classes["margin-top-8px"]}`}>
                            An immersive way to experience entertainment
                        </p>
                    </div>

                    <div className={`${classes["feature-product-card"]} ${classes["ps5-card-mobile"]}`}>
                        <img
                            className={classes["ps5-img-mobile"]}
                            src={ps5MobileImg}
                            alt="Ps5"
                        />
                        <h3 className={`${classes["feature-product-card-title"]} ${classes["ps5-mobile-title"]}`}>
                            Playstation <span>5</span>
                        </h3>
                        <p className={`${classes["feature-card-description"]} ${classes["margin-top-8px"]}`}>
                            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
                            redefine your PlayStation experience.
                        </p>
                    </div>

                    <div className={`${classes["feature-product-card"]} ${classes["macbook-card-mobile"]}`}>
                        <img
                            className={classes["macbook-img-mobile"]}
                            src={macbookMobileImg}
                            alt="Macbook-Pro"
                        />
                        <h3 className={`${classes["feature-product-card-title"]} ${classes["macbook-mobile-title"]}`}>
                            <span>Macbook</span> Air
                        </h3>
                        <p
                            className={`${classes["feature-card-description"]} ${classes["margin-top-16px"]}`}
                            id="bottom-margin-none"
                        >
                            The new 15‑inch MacBook Air makes room for more of what you love
                            with a spacious Liquid Retina display.
                        </p>
                        <button className={classes["black-btn-large-mobile"]}>Shop Now</button>
                    </div>
                </section>
            </>
        );
    };

    export default Hero;
