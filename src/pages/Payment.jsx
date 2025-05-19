import classes from '../modules/Payment.module.scss'
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Summary} from "../components/Summary.jsx";
import layout from "../modules/Layout.module.scss";
import PaymentSteps from "../components/PaymentSteps.jsx";
import creditCard from '../assets/credit-card.png'
import {useNavigate} from "react-router";
import {useState} from "react";
import axios from 'axios';

export const  Payment = () => {
    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [expDate, setExpDate] = useState('');
    const [cvv, setCvv] = useState('');
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
    });
    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.slice(0, 16);
        const formatted = value.replace(/(.{4})/g, '$1 ').trim();
        setCardNumber(formatted);
    };
    const handleExpDateChange = (e) => {
        let value = e.target.value.replace(/\D/g,'');
        value = value.slice(0, 8);

        if (value.length >= 5) {
            value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
        }
        setExpDate(value);
    };

    const backClickHandler = () => {
        navigate("/address")
    };

    const nextClickHandler = async () => {
        const newErrors = {
            cardName: cardName.trim() ? '' : 'Card name can’t be empty.',
            cardNumber: cardNumber.trim() ? '' : 'Card Number can’t be empty.',
            expDate: expDate.trim() ? '' : 'Expiration Date can’t be empty.',
            cvv: cvv.trim() ? '' : 'cvv can’t be empty.',
        };

        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some(error => error !== '');
        if (hasErrors) return;

        try {
            const response = await axios.post('http://localhost:5000/payment', {
                cardName,
                cardNumber,
                expDate,
                cvv
            });

            console.log("Payment submitted successfully", response.data);
            navigate("/final");
        } catch (error) {
            if (error.response) {
                console.error("Server responded with error:", error.response.data);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error setting up request:", error.message);
            }
            alert("Failed to submit payment");
        }
    };



    return (
        <>
            <Header/>
            <div className={`${classes['main-wrapper']} ${layout['container']}`}>
                <PaymentSteps/>
                <div className={classes['content']}>
                    <div className={classes['left-side']}>
                <Summary/>
                    </div>
                    <div className={classes['right-side']}>
                        <div className={classes['payment']}>
                            <h1>Payment</h1>
                            <div className={classes["image-container"]}>
                                <img src={creditCard} alt="creditCard"/>
                                <div className={classes['card-number']}>
                                    <span>{cardNumber || '0000 0000 0000 0000'}</span>
                                </div>
                                <div className={classes['card-name']}>
                                    <span>{cardName || 'Cardholder'}</span>
                                </div>
                            </div>
                            <div className={classes['input-wrapper']}>
                                <input
                                    placeholder='Card Name'
                                    type="text"
                                    value={cardName}
                                    maxLength={30}
                                    onChange={(e) => {
                                        setCardName(e.target.value);
                                        if (errors.cardName) {
                                            setErrors(prev => ({ ...prev, cardName: '' }));
                                        }
                                    }}
                                />

                                {errors.cardName && <p className={classes['error-text']}>{errors.cardName}</p>}
                                <input
                                    placeholder="Card Number"
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => {
                                        handleCardNumberChange(e);
                                        if (errors.cardNumber) {
                                            setErrors(prev => ({ ...prev, cardNumber: '' }));
                                        }
                                    }}
                                    maxLength={19}
                                />
                                {errors.cardNumber && <p className={classes['error-text']}>{errors.cardNumber}</p>}
                                <form>
                                    <input
                                        placeholder="Exp.Date"
                                        type="text"
                                        value={expDate}
                                        onChange={(e) => {
                                            handleExpDateChange(e);
                                            if (errors.expDate) {
                                                setErrors(prev => ({ ...prev, expDate: '' }));
                                            }
                                        }}
                                        maxLength={13}
                                    />
                                    {errors.expDate && <p className={classes['error-text']}>{errors.expDate}</p>}

                                    <input
                                        placeholder='CVV'
                                        type="password"
                                        maxLength={3}
                                        value={cvv}
                                        onChange={(e) => {
                                            setCvv(e.target.value);
                                            if (errors.cvv) {
                                                setErrors(prev => ({ ...prev, cvv: '' }));
                                            }
                                        }}
                                    />
                                    {errors.cvv && <p className={classes['error-text']}>{errors.cvv}</p>}
                                </form>
                            </div>
                        </div>
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
}