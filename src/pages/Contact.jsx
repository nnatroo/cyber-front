import classes from '../modules/Contact.module.scss'
import phone from '../assets/icons-phone.svg'
import mail from '../assets/icons-mail.svg'
import {useState} from "react";
import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

export const Contact = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [error, setError] = useState({username: "", email: "", telephone: "", message: ""})
    const [message, setMessage] = useState("")

    const usernameHandler = (event) => {
        setError({...error, username: ""})
        setUsername(event.target.value)
    }
    const messageHandler = (event) => {
        setError({...error, message: ""})
        setMessage(event.target.value)
    }

    const emailHandler = (event) => {
        setError({...error, email: ""})
        setEmail(event.target.value)
    }

    const phoneHandler = (event) => {
        setError({...error, telephone: ""})
        setTelephone(event.target.value)
    }

    const sendMessage = (event) => {
        event.preventDefault();
        const usernameError = username.length < 6 ? "Name isn't valid, it must be at least 6." : "";
        const emailError = (email.length < 8 || !email.includes("@")) ? "Email isn't valid." : "";
        const phoneError = (telephone.length < 8 || isNaN(telephone)) ? "Phone isn't valid." : "";
        const messageError = message.length === 0 ? "Message can not be empty" : "";
        setError({
            username: usernameError,
            email: emailError,
            telephone: phoneError,
            message: messageError
        });
    };

    return (
        <>
            <Header/>
            <div className={classes['main-wrapper']}>
                <div className={classes['left-side']}>
                    <div className={classes['contact-div']}>
                        <div className={classes['contact-div-title']}>
                            <img src={phone} alt="icons-phone"/>
                            <p> Call To Us</p>
                        </div>
                        <div>
                            <p>We are available 24/7, 7 days a week.</p>
                            <p>Phone: +8801611112222</p>
                        </div>
                    </div>
                    <div className={classes['line']}></div>
                    <div className={classes['contact-div']}>
                        <div className={classes['contact-div-title']}>
                            <img src={mail} alt="icons-mail"/>
                            <p> Write To Us</p>
                        </div>
                        <div>
                            <p>Fill out our form and we will contact you within 24 hours.</p>
                            <p>Emails: customer@cyber.com</p>
                            <p>Emails: support@cyber.com</p>
                        </div>
                    </div>
                </div>
                <div className={classes['right-side']}>
                    <div className={classes['input-group']}>
                        <div className={classes['input-wrapper']}>
                            {error.username &&
                                <label className={`${error.username ? classes['error'] : ''}`}>{error.username}</label>}
                            <input name="username" type='text'
                                   placeholder='Your Name *'
                                   onChange={usernameHandler}/>
                        </div>
                        <div className={classes['input-wrapper']}>
                            {error.email && <label className={classes['error']} htmlFor="email">{error.email}</label>}
                            <input name="email" type='text'
                                   placeholder='Your Email *'
                                   onChange={emailHandler}/>
                        </div>
                        <div className={classes['input-wrapper']}>
                            {error.telephone &&
                                <label className={classes['error']} htmlFor="telephone">{error.telephone}</label>}

                            <input name="telephone"
                                   type='text'
                                   placeholder='Your Phone *'
                                   onChange={phoneHandler}/>
                        </div>
                    </div>
                    <div className={classes['message-input']}>
                        {error.message &&
                            <label className={classes['error']} htmlFor="messsage">{error.message}</label>}
                        <textarea placeholder='Your Message' onChange={messageHandler}/>
                    </div>
                    <div className={classes['submit-wrapper']}>
                        <button onClick={sendMessage}>
                            <p>Send Message</p>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
