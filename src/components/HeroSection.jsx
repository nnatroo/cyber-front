import classes from "../modules/HeroSection.module.scss"
import Iphone from "../assets/iphone.png"
import Playstation from "../assets/playstation.png"
import Airpods from "../assets/airpods.png"
import Visionpro from "../assets/visionpro.png"
import AirpodsMobile from "../assets/airpods-mobile.png"
import PlaystationMobile from "../assets/playstation-mobile.png"
import Macbook from "../assets/macbook.png"
import MacbookMobile from "../assets/macbook-mobile.png"
import VisionproMobile from "../assets/visionpro-mobile.png"

const HeroSection = () => {
    return (
        <>
            <section className={classes["hero-section"]}>
                <div className={classes["hero-section-wrapper"]}>
                    <div className={classes["hero-content-wrapper"]}>
                        <p className={classes["hero-first-line"]}>Pro.Beyond.</p>
                        <h1 className={classes["hero-title"]}>IPhone 14 <span>Pro</span></h1>
                        <p className={classes["hero-third-line"]}>Created to change everything for the better. For
                            everyone</p>
                        <div className={classes["hero-btn-wrapper"]}>
                            <button className={classes["white-btn-large"]}>Shop Now</button>
                        </div>
                    </div>
                    <figure className={classes["hero-img-wrapper"]}>
                        <img src={Iphone} alt="mobile-phone" className={classes["hero-img"]}/>
                    </figure>
                </div>
            </section>

            <section className={classes["featured-products-section"]}>
                <div>
                    <div className={classes["first-line-products"]}>
                        <figure className={classes["ps5-img-wrapper"]}>
                            <img className={classes["ps5-img"]} src={Playstation} alt="ps-5"/>
                        </figure>
                        <div className={classes["ps5-details-wrapper"]}>
                            <h2>Playstation 5</h2>
                            <p className={classes["feature-card-description"]}>
                                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                                will redefine your PlayStation experience.
                            </p>
                        </div>
                    </div>
                    <div className={classes["second-line-products"]}>
                        <div className={classes["left-second-line-products"]}>
                            <figure className={classes["airpods-img-wrapper"]}>
                                <img className={classes["airpods-img"]} src={Airpods} alt="airpods"/>
                            </figure>
                            <div className={classes["airpods-details-wrapper"]}>
                                <h2>Apple AirPods <span>Max</span></h2>
                                <p className={classes["feature-card-description"]}>Computational audio. Listen, it's
                                    powerful</p>
                            </div>
                        </div>
                        <div className={classes["right-second-line-products"]}>
                            <figure className={classes["vision-img-wrapper"]}>
                                <img className={classes["vision-pro-img"]} src={Visionpro} alt="visions-pro"/>
                            </figure>
                            <div className={classes["vision-pro-details-wrapper"]}>
                                <h2>Apple Vision <span>Pro</span></h2>
                                <p className={classes["feature-card-description"]}>An immersive way to experience
                                    entertainment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes["right-side-products"]}>
                    <div className={classes["right-side-products-content"]}>
                        <h2>Macbook <span>Air</span></h2>
                        <p className={classes["feature-card-description"]}>
                            The new 15‑inch MacBook Air makes room for more of what you love
                            with a spacious Liquid Retina display.
                        </p>
                        <button className={classes["black-btn-large"]}>Shop Now</button>
                    </div>
                    <figure className={classes["right-side-product-img-wrapper"]}>
                        <img className={classes["mac-img"]} src={Macbook} alt="macbook-air"/>
                    </figure>
                </div>
            </section>

            <section className={classes["featured-products-section-mobile"]}>
                <div className={classes["feature-product-card"]}>
                    <img className={classes["airpods-img-mobile"]} src={AirpodsMobile} alt="Airpods"/>
                    <h3 className={classes["feature-product-card-title"]}>Apple AirPods <span>Max</span></h3>
                    <p className={classes["feature-card-description"]}>Computational audio. Listen, it's powerful</p>
                </div>
                <div className={`${classes["feature-product-card"]} ${classes["vision-pro-card-mobile"]}`}>
                    <img className={classes["vision-pro-img-mobile"]} src={VisionproMobile} alt="Vision-Pro"/>
                    <h3 className={`${classes["feature-product-card-title"]} ${classes["vision-pro-mobile-title"]}`}>Apple
                        Vision <span>Pro</span></h3>
                    <p className={classes["feature-card-description"]}>An immersive way to experience entertainment</p>
                </div>
                <div className={`${classes["feature-product-card"]}`}>
                    <img className={classes["ps5-img-mobile"]} src={PlaystationMobile} alt="Ps5"/>
                    <h3 className={`${classes["feature-product-card-title"]}`}>Playstation <span>5</span></h3>
                    <p className={classes["feature-card-description"]}>
                        Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
                        redefine your PlayStation experience.
                    </p>
                </div>
                <div className={`${classes["feature-product-card"]} ${classes["macbook-card-mobile"]}`}>
                    <img className={classes["macbook-img-mobile"]} src={MacbookMobile} alt="Macbook-Pro"/>
                    <h3 className={`${classes["feature-product-card-title"]}`}><span>Macbook</span> Air</h3>
                    <p className={classes["feature-card-description"]}>
                        The new 15‑inch MacBook Air makes room for more of what you love
                        with a spacious Liquid Retina display.
                    </p>
                    <button className={classes["black-btn-large-mobile"]}>Shop Now</button>
                </div>
            </section>
        </>
    )
}

export default HeroSection;
