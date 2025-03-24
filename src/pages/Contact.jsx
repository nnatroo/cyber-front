import classes from '../modules/Contact.module.scss'
import phone from '../assets/icons-phone.svg'
import mail from '../assets/icons-mail.svg'
import {useState} from "react";
export const Contact = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")


    const usernameHandler = (event) => {
        setUsername(event.target.value)

    }
    const emailHandler = (event) => {
        setEmail(event.target.value)

    }

    const phoneHandler = (event) => {
        setTelephone(event.target.value)

    }

    const sendMessage = (event) => {
        event.preventDefault();


        if (username.length === 0) {
            alert("name can't be empty.");
            return;
        } else if (username.length < 6) {
            alert("name isn't valid, it must be at least 6 characters.");
            return;
        }


        if (email.length === 0) {
            alert("Email can't be empty.");
            return;
        } else if (email.length < 8 || !email.includes("@")) {
            alert("Email is not valid, it must include '@'.");
            return;
        }


        if (telephone.length === 0) {
            alert("Phone number can't be empty.");

        } else if (telephone.length < 8 || isNaN(telephone)) {
            alert("Phone number is not correct, it must be a number.");

        }
    };


    return (
    <>
        <div className={classes['main-wrapper']}>
            <div className={classes['left-side']}>
                <div className={classes['contact-div']}>
                    <div className={classes['contact-div-title']}>
                        <img src={phone} alt="icons-phone"/>
                        <p>  Call To Us</p>
                    </div>

                    <div className={classes['contact-div-content']}>
                        <p>we are available 24/7. 7 days a week.</p>
                        <p>Phone:+8901611112222</p>
                    </div>
                </div>

           <div className={classes['line']}></div>

                <div className={classes['contact-div']}>
                    <div className={classes['contact-div-title']}>
                        <img src={mail} alt="icons-mail"/>
                        <p> Write To Us</p>
                    </div>

                    <div className={classes['contact-div-content']}>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@cyber.com</p>
                        <p>Emails: support@cyber.com</p>
                    </div>

                </div>

            </div>
            <div className={classes['right-side']}>
                <div className={classes['right-side-content']}>
                    <div className={classes['info-inputs']}>
                        <input type='text' placeholder='Your Name*' onChange={usernameHandler}/>
                        <input type='text' placeholder='Your Email*' onChange={emailHandler}/>
                        <input type='text' placeholder='Your Phone*' onChange={phoneHandler}/>
                    </div>

                    <div className={classes['message-input']}>
                        <input type='text' placeholder='Your Message'/>
                    </div>

                    <div className={classes['btn-box']}>
                        <button className={classes['btn']} onClick={sendMessage}>
                            <p>Send Message</p>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </>
    )
}
