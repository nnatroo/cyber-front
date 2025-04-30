import classes from "../modules/Payment.module.scss";
import CreditCard from "../assets/credit-card.svg"
import Shopping from "../assets/shopping.svg"
import Location from "../assets/location.svg"
import Airpods from "../assets/Airpods.png"
import AppleWatch from "../assets/Apple-watch.png"
import Iphone from "../assets/Iphone-14-mobile.png"
import SimCard from "../assets/sim-card.png"
import NFCLogo from "../assets/NFC-logo.png"
import MasterCard from "../assets/Mastercard-Logo.png"

import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx"

export const Payment = () => {


    return (
        <>
            <Header />
            <div className={classes["stepper"]}>
                <div className={`${classes["step"]} ${classes["step-mobile"]} ${classes["step-dark"]}`}>
                    <div className={classes["step-icon"]}><img src={Location} alt={"destination"}/></div>
                    <div className={classes["step-label"]}>
                        <span>Step 1</span>
                        <h3>Address</h3>
                    </div>
                </div>

                <div className={`${classes["step"]} ${classes["step-dark"]}`}>
                    <div className={classes["step-icon"]}><img src={Shopping} alt={"shipping"}/></div>
                    <div className={classes["step-label"]}>
                        <span>Step 2</span>
                        <h3>Shipping</h3>
                    </div>
                </div>

                <div className={classes["step"]}>
                    <div className={classes["step-icon"]}><img src={CreditCard} alt={"payment"}/></div>
                    <div className={classes["step-label"]}>
                        <span>Step 3</span>
                        <h3>Payment</h3>
                    </div>
                </div>
            </div>

            <div className={classes["payment-container"]}>
                <div className={classes["summary-card"]}>
                    <h3>Summary</h3>
                    <div className={classes["products-box"]}>
                        <div className={classes["product-box"]}>
                            <div className={classes["product-image-box"]}> <img src={Iphone} className={classes["images"]}/> </div>
                            <div className={classes["product-name-box"]}><b>Apple Iphone 14 Pro Max 128Gb</b></div>
                            <div className={classes["product-price-box"]}><b>$1399</b></div>
                        </div>

                        <div className={classes["product-box"]}>
                            <div className={classes["product-image-box"]}> <img src={Airpods} className={classes["images"]}/> </div>
                            <div className={classes["product-name-box"]}><b>Airpods Max SIlver</b></div>
                            <div className={classes["product-price-box"]}><b>$549</b></div>
                        </div>

                        <div className={classes["product-box"]}>
                            <div className={classes["product-image-box"]}> <img src={AppleWatch} className={classes["images"]}/> </div>
                            <div className={classes["product-name-box"]}><b>Apple Watch Series 9 GPS 41mm</b></div>
                            <div className={classes["product-price-box"]}><b>$399</b></div>
                        </div>
                    </div>

                    <div className={classes["summary-info-box"]}>
                        <h4 className={classes["summary_titles"]}>Address</h4>
                        <br/>
                        <h4>69 Negro Arroyo Lane</h4>
                        <br/>
                        <h4 className={classes["summary_titles"]}>Shipment Method</h4>
                        <h4>Free</h4>
                        <br/>
                        <div className={classes["summary-total-box"]}>
                            <div className={classes["summary-tax-items"]}>
                                <h4>Subtotal</h4>
                                <p>$2347</p>
                            </div>
                            <div className={classes["summary-tax-items"]}>
                                <h4 className={classes["summary_titles"]}>Estimated Tax</h4>
                                <p>$50</p>
                            </div>
                            <div className={classes["summary-tax-items"]}>
                                <h4 className={classes["summary_titles"]}>Estimated Shipping & Handling</h4>
                                <p>$29</p>
                            </div>
                            <div className={classes["summary-tax-items"]}>
                                <h4>Total</h4>
                                <p>$2426</p>
                            </div>
                        </div>


                    </div>



                </div>

                <div className={classes["payment-card"]}>
                    <h3>Payment</h3>
                    <div className={classes["payment-methods"]}>
                        <p className={classes["underline_text"]}><b>Credit Card</b></p>
                        <p>PayPal</p>
                        <p>PlayPal Credit</p>
                    </div>

                    <div className={classes["credit-card"]}>
                        <div className={classes["credit-card-image-box"]}>
                            <img src={SimCard} className={classes["sim-card"]}/>
                            <img src={NFCLogo} className={classes["nfc-logo"]}/>
                        </div>

                        <div className={classes["credit-card-shine-box-1"]}></div>
                        <div className={classes["credit-card-shine-box-2"]}></div>

                        <div className={classes["credit-card-numbers"]}>4085 &nbsp; &nbsp; 9536 &nbsp; &nbsp; 8475 &nbsp; &nbsp; 9530</div>

                        <div className={classes["credit-card-mastercard-box"]}>
                            <p> &nbsp; &nbsp; &nbsp;Cardholder</p>
                            <img src={MasterCard} className={classes["mastercard-img"]}/>
                        </div>

                    </div>

                    <div className={classes["inputs-box"]}>
                        <input type={"text"} className={classes["big-input"]} placeholder={"Cardholer Name"}/>
                        <input type={"text"} className={classes["big-input"]} placeholder={"Card Number"}/>
                        <div className={classes["smaller-inputs-box"]}>
                            <input type={"text"} className={classes["small-input"]} placeholder={"Exp.Date"}/>
                            <input type={"text"} className={classes["small-input"]} placeholder={"CVV"}/>
                        </div>


                    </div>

                    <div className={classes["last-box"]}>
                       <p> <input type={"checkbox"} className={classes["checkbox"]}/> <b>Same as billing address</b></p>

                        <div className={classes["buttons-box"]}>
                            <button className={classes["back-btn"]}>Back</button>
                            <button className={classes["pay-btn"]}>Pay</button>
                        </div>
                    </div>



                </div>
            </div>


            <Footer />
        </>
    );
};
