import classes from '../modules/Shipping.module.scss'
import layout from '../modules/Layout.module.scss'
import Calendar from 'react-calendar';
import {useEffect, useState} from "react";
import Header from "../components/Header.jsx";
import 'react-calendar/dist/Calendar.css';
import PaymentSteps from "../components/PaymentSteps.jsx";
import {Link, useNavigate} from "react-router";
import {useDispatch} from 'react-redux';
import {setShippingDetails} from '../store/shippingSlice.js';
import {Footer} from "../components/Footer.jsx";

export const Shipping = () => {
    const EXPRESS_DELIVERY_PRICE = 8.50;
    const dateFormatOptions = {day: '2-digit', month: 'short', year: 'numeric'};

    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [formatedSelectedDate, setFormatedSelectedDate] = useState("");
    const [showError, setShowError] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("free");
    const dispatch = useDispatch();

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', dateFormatOptions);
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(currentDate.getDate() + 14);
    const twoWeeksFormattedDate = twoWeeksLater.toLocaleDateString('en-US', dateFormatOptions);

    useEffect(() => {
        dispatch(setShippingDetails({
            paymentType: 'free',
            deliveryDate: twoWeeksFormattedDate,
            price: 0
        }))
    }, []);

    const handleDateChange = (date) => {
        const monthsNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const formatted = `${date.getDate()} ${monthsNames[date.getMonth()]}, ${date.getFullYear()}`;

        setFormatedSelectedDate(formatted);
        setSelectedDate(date);
        setCalendarVisible(false);

        dispatch(setShippingDetails(
            {
                paymentType: 'schedule',
                deliveryDate: formatted,
                price: EXPRESS_DELIVERY_PRICE
            }
        ));
    };

    const inputChangeHandler = (e, shippingType, deliveryDate,) => {
        dispatch(setShippingDetails({
            shippingType,
            deliveryDate,
            price: shippingType === 'free' ? 0 : shippingType === 'asap' ? 8.50 : 8.50
        }));
        setShowError(false);
    };

    const backClickHandler = () => {
        navigate("/address")
    }

    const nextClickHandler = () => {
        navigate("/payment")
    }

    return (
        <>
            <Header/>
            <div className={`${classes['main-wrapper']} ${layout['container']}`}>
                <PaymentSteps/>
                <div className={classes['shipment-method']}>
                    <h3>Shipment Method</h3>
                    {showError && <p className={classes['error-text']}>Please select a shipment method.</p>}
                    <div className={classes['methods-wrapper']}>
                        <label className={classes['methods']}>
                            <div className={classes['methods-info']}>
                                <input
                                    type="radio"
                                    name="payment-method"
                                    value="free"
                                    checked={selectedPaymentMethod === "free"}
                                    onChange={() => {
                                        setSelectedPaymentMethod("free");
                                        inputChangeHandler(null, "free", twoWeeksFormattedDate);
                                    }}
                                />
                                <b>Free</b>
                                <p>Regularly shipment</p>
                            </div>
                            <div className={classes['methods-date']}>
                                <p>{twoWeeksFormattedDate}</p>
                            </div>
                        </label>
                        <label className={classes['methods']}>
                            <div className={classes['methods-info']}>
                                <input
                                    type="radio"
                                    name="payment-method"
                                    value="8.50$"
                                    checked={selectedPaymentMethod === "asap"}
                                    onChange={() => {
                                        setSelectedPaymentMethod("asap");
                                        inputChangeHandler(null, "asap", formattedDate);
                                    }}
                                />
                                <b>Express - $8.50</b>
                                <p> Get your delivery as soon as possible</p>
                            </div>
                            <div className={classes['methods-date']}>
                                <p>{formattedDate}</p>
                            </div>
                        </label>
                        <label className={classes['methods']}>
                            <div className={classes['methods-info']}>
                                <input
                                    type="radio"
                                    name="payment-method"
                                    value="scheduled"
                                    checked={selectedPaymentMethod === "scheduled"}
                                    onChange={() => {
                                        setSelectedPaymentMethod("scheduled");
                                        inputChangeHandler(null, 'scheduled', formatedSelectedDate || "");
                                    }}
                                />
                                <b>Schedule - $8.50</b>
                                <p>Pick a date for your delivery</p>
                            </div>
                            <div className={classes['methods-date']}>
                                <div
                                    onClick={() => setCalendarVisible(prev => !prev)}
                                    className={`${classes['date-display']} ${selectedDate ? classes['active-date'] : ''}`}>
                                    {selectedDate ? formatedSelectedDate : <p>Select Date &gt;</p>}
                                </div>
                                {isCalendarVisible && (
                                    <div className={classes['calendar-dropdown']}>
                                        <Calendar
                                            onChange={handleDateChange}
                                        />
                                    </div>
                                )}
                            </div>
                        </label>
                        <div className={classes['buttons-wrapper']}>
                            <button onClick={backClickHandler} className={classes['btn-back']}>
                                Back
                            </button>
                            <button onClick={nextClickHandler} className={classes['btn-next']}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};
