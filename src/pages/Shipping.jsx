import classes from '../modules/Shipping.module.scss'
import shipping from '../assets/shipping-icon.png'
import address from '../assets/address-icon.png'
import payment from '../assets/payment-icon.png'
import Calendar from 'react-calendar';
import {useState} from "react";
const Shipping = () => {


    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarVisible, setCalendarVisible] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setCalendarVisible(false);
    };


    return (
        <>
            <div className={classes['main-wrapper']}>
                <div className={classes['page-options']}>
                    <div className={classes['steps']}>
                        <img src={shipping}/>
                        <span>
                              <p>step 1</p>
                        <h2>Address</h2>
                        </span>

                    </div>

                    <div className={classes['steps']}>
                        <img src={address}/>
                        <span>
                              <p>step 2</p>
                        <h2>Shipping</h2>
                        </span>

                    </div>

                    <div className={classes['steps']}>
                        <img src={payment}/>
                        <span>
                              <p>step 3</p>
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
                             {selectedDate ? selectedDate.toLocaleDateString() : <p>  select date > </p>
                                    }
                                </p>
                                {isCalendarVisible && (
                                    <div className={classes['calendar-dropdown']}>
                                        <Calendar
                                            onChange={handleDateChange}
                                            value={selectedDate || new Date()}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={classes['buttons-wrapper']}>
                        <button className={classes['button1']}>
                            <p>Back</p>
                        </button>
                        <button
                            className={classes['button2']}>
                            <p>Next</p>
                        </button>
                    </div>

                </div>


            </div>

        </>
    )
};

export default Shipping
