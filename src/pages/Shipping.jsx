import classes from '../modules/Shipping.module.scss'
import layout from '../modules/layout.module.scss'
import ShippingIcon from '../assets/shipping-icon.png'
import AddressIcon from '../assets/address-icon.png'
import PaymentIcon from '../assets/payment-icon.png'
import Calendar from 'react-calendar';
import {useState} from "react";
import Header from "../components/Header.jsx";
import 'react-calendar/dist/Calendar.css';

const Shipping = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [formatedSelectedDate, setFormatedSelectedDate] = useState("")

    const handleDateChange = (date) => {
        const monthsNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        setFormatedSelectedDate(`${date.getDate()} ${monthsNames[date.getMonth()]}, ${date.getFullYear()}`)
        setSelectedDate(date);
        setCalendarVisible(false);
    };

    return (<>
        <Header/>
        <div className={`${classes['main-wrapper']} ${layout['container']}`}>
            <div className={classes['page-options']}>
                <div className={`${classes['steps']} ${classes['mobile-hide']}`}>
                    <img src={ShippingIcon} alt={'shipping-icon'}/>
                    <span>
                        <p>Step 1</p>
                        <h2>Address</h2>
                    </span>
                </div>
                <div className={classes['steps-active']}>
                    <img src={AddressIcon} alt={'address-icon'}/>
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
                <div className={classes['methods-wrapper']}>
                    <div className={classes['methods']}>
                        <div className={classes['methods-info']}>
                            <input type="radio" name="payment-method" value="credit-card"/>
                            <b>Free</b>
                            <p>Regularly shipment</p>
                        </div>
                        <div className={classes['methods-date']}>
                            <p>17 Oct, 2023 </p>
                        </div>
                    </div>
                    <div className={classes['methods']}>
                        <div className={classes['methods-info']}>
                            <input type="radio" name="payment-method" value="credit-card"/>
                            <b>$8.50</b>
                            <p> Get your delivery as soon as possible</p>
                        </div>
                        <div className={classes['methods-date']}>
                            <p>1 Oct, 2023</p>
                        </div>
                    </div>
                    <div className={classes['methods']}>
                        <div className={classes['methods-info']}>
                            <input type="radio" name="payment-method" value="schedule"/>
                            <b>Schedule</b>
                            <p>Pick a date when you want to get your delivery</p>
                        </div>
                        <div className={classes['methods-date']}>
                            <p onClick={() => setCalendarVisible(!isCalendarVisible)} style={{cursor: 'pointer'}}>
                                {selectedDate ? formatedSelectedDate : <p> Select Date &gt; </p>}
                            </p>
                            {isCalendarVisible && (<div className={classes['calendar-dropdown']}>
                                <Calendar
                                    onChange={handleDateChange}
                                    value={selectedDate || new Date()}
                                />
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className={classes['buttons-wrapper']}>
                    <button className={classes['btn-back']}>
                        Back
                    </button>
                    <button className={classes['btn-next']}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    </>)
};

export default Shipping
