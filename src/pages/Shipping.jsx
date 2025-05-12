import classes from '../modules/Shipping.module.scss'
import layout from '../modules/layout.module.scss'
import Calendar from 'react-calendar';
import { useState} from "react";
import Header from "../components/Header.jsx";
import 'react-calendar/dist/Calendar.css';
import PaymentSteps from "../components/PaymentSteps.jsx";
import {Link} from "react-router";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPaymentDetails } from '../store/paymentSlice.js';
import {Footer} from "../components/Footer.jsx";

export const Shipping = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [formatedSelectedDate, setFormatedSelectedDate] = useState("");
    const [showError, setShowError] = useState(false);
    const [price, setPrice] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("free");
    const dispatch = useDispatch();

    const today = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(today.getDate() + 14);
    const twoWeeksFormattedDate=twoWeeksLater.toLocaleDateString('en-US', options);

    const handleDateChange = (date) => {
        const monthsNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const formatted = `${date.getDate()} ${monthsNames[date.getMonth()]}, ${date.getFullYear()}`;

        setFormatedSelectedDate(formatted);
        setSelectedDate(date);
        setCalendarVisible(false);

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selected = new Date(date);
        selected.setHours(0, 0, 0, 0);
        const diffInMs = selected - today;
        const diffInDays = Math.max(Math.ceil(diffInMs / (1000 * 60 * 60 * 24)), 0);
        const updatedPrice =  diffInDays * 0.607;
        setPrice(updatedPrice);

        dispatch(setPaymentDetails(
            {
                paymentType: 'schedule',
                deliveryDate: formatted,
                price: updatedPrice,
            }
        ));
    };
    const inputChangeHandler = (e, paymentType, deliveryDate) => {
        dispatch(setPaymentDetails({
            paymentType,
            deliveryDate,
        }));
        setShowError(false);
    };
    const paymentInfo = useSelector(state => state.payment.paymentDetails);
    console.log("Redux store:", paymentInfo);

    return (
        <>
            <Header/>
            <div className={`${classes['main-wrapper']} ${layout['container']}`}>
                <PaymentSteps/>
                <div className={classes['shipment-method']}>
                    <h1>Shipment Method</h1>
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
                                        inputChangeHandler(null, "Free", formattedDate);
                                    }}
                                />
                                <b>Free</b>
                                <p>Regularly shipment</p>
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
                                    value="8.50$"
                                    checked={selectedPaymentMethod === "asap"}
                                    onChange={() => {
                                        setSelectedPaymentMethod("asap");
                                        inputChangeHandler(null, "8.50$", twoWeeksFormattedDate);
                                    }}
                                />
                                <b>$8.50</b>
                                <p> Get your delivery as soon as possible</p>
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
                                    value="scheduled"
                                    checked={selectedPaymentMethod === "scheduled"}
                                    onChange={() => {
                                        setSelectedPaymentMethod("scheduled");
                                        inputChangeHandler(null, {price}, formatedSelectedDate || "");
                                    }}
                                />
                                <b>{selectedDate ? `$${price.toFixed(2)}` : 'schedule'}</b>
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
                            <Link to='/address'>
                                <button className={classes['btn-back']}>
                                    Back
                                </button>
                            </Link>
                            <Link to='/payment'>
                                <button className={classes['btn-next']}>
                                    Next
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};
