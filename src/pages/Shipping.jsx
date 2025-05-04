import classes from '../modules/Shipping.module.scss'
import layout from '../modules/layout.module.scss'
import ShippingIcon from '../assets/shipping-icon.svg'
import AddressIcon from '../assets/location-icon.svg'
import PaymentIcon from '../assets/payment-icon.svg'
import Calendar from 'react-calendar';
import {useState} from "react";
import Header from "../components/Header.jsx";
import 'react-calendar/dist/Calendar.css';
import useShippingDataStore from '../zustand-store/shipping-data.jsx';

const Shipping = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [formatedSelectedDate, setFormatedSelectedDate] = useState("");
    const [showError, setShowError] = useState(false);
    const {
        selectedMethod,
        setSelectedMethod,
    } = useShippingDataStore();

    const handleDateChange = (date) => {
        const monthsNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        setFormatedSelectedDate(`${date.getDate()} ${monthsNames[date.getMonth()]}, ${date.getFullYear()}`);
        setSelectedDate(date);
        setCalendarVisible(false);
    };
const inputChangeHandler = (e)=>{
    setSelectedMethod(e.target.value);
        setShowError(false);
}
const buttonHandler = () => {
        if (!selectedMethod) {
            setShowError(true);
        } else {
            console.log("Selected Method:", selectedMethod);
        }
    };
return (
    <>
        <Header/>
        <div className={`${classes['main-wrapper']} ${layout['container']}`}>
            <div className={classes['page-options']}>
                <div className={`${classes['steps']} ${classes['mobile-hide']}`}>
                    <img src={AddressIcon} alt={'location-icon'}/>
                    <span>
                        <p>Step 1</p>
                        <h2>Address</h2>
                    </span>
                </div>
                <div className={`${classes['steps']}  ${classes['active']}`}>
                    <img src={ShippingIcon} alt={'shipping-icon'}/>
                    <span>
                        <p>Step 2</p>
                        <h2>Shipping</h2>
                    </span>
                </div>
                <div className={classes['steps']}>
                    <img src={PaymentIcon} alt={'payment-icon'}/>
                    <span>
                        <p>Step 3</p>
                        <h2>Payment</h2>
                    </span>
                </div>
            </div>
            <div className={classes['shipment-method']}>
                <h1>Shipment Method</h1>
                {showError && <p className={classes['error-text']}>Please select a shipment method.</p>}
                <div className={classes['methods-wrapper']}>
                    <label className={classes['methods']}>
                        <div className={classes['methods-info']}>
                        <input type="radio"
                               name="payment-method"
                               defaultChecked
                               onChange={inputChangeHandler}
                               value={JSON.stringify(
                                   { method: "free", date: "17 Oct, 2023" }
                               )}/>
                            <b>Free</b>
                            <p>Regularly shipment</p>
                        </div>
                        <div className={classes['methods-date']}>
                            <p>17 Oct, 2023 </p>
                        </div>
                    </label>
                    <label className={classes['methods']}>
                        <div className={classes['methods-info']}>
                            <input type="radio"
                                   name="payment-method"
                                   value={JSON.stringify(
                                       {method: "$8.50", date: "1 Oct, 2023" }
                                   )}
                                   onChange={inputChangeHandler}/>
                            <b>$8.50</b>
                            <p> Get your delivery as soon as possible</p>
                        </div>
                        <div className={classes['methods-date']}>
                            <p>1 Oct, 2023</p>
                        </div>
                    </label>
                    <label className={classes['methods']}>
                        <div className={classes['methods-info']}>
                            <input type="radio"
                                   name="payment-method"
                                   value={JSON.stringify(
                                       { method: "schedule",
                                date: selectedDate ? formatedSelectedDate : null,}
                                   )}
                                   onChange={inputChangeHandler}/>
                            <b>Schedule</b>
                            <p>Pick a date when you want to get your delivery</p>
                        </div>
                        <div className={classes['methods-date']}>
                            <div onClick={() => setCalendarVisible(!isCalendarVisible)}
                                 className={`${classes['date-display']} ${selectedDate ? classes['active-date'] : ''}`}>
                                {selectedDate ? formatedSelectedDate : <p> Select Date &gt; </p>}
                            </div >
                            {isCalendarVisible && (<div className={classes['calendar-dropdown']}>
                                <Calendar
                                    onChange={handleDateChange}
                                    value={selectedDate || new Date()}
                                />
                            </div>)}
                        </div>
                    </label>
                </div>
                <div className={classes['buttons-wrapper']}>
                    <button className={classes['btn-back']}>
                        Back
                    </button>

                    <button className={classes['btn-next']} onClick={buttonHandler}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    </>)
};

export default Shipping
