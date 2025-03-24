import classes from '../modules/Contact.module.scss'
import phone from '../assets/icons-phone.svg'
import mail from '../assets/icons-mail.svg'
export const Contact = () => {
  return (
    <>
        <div className={classes['main-wrapper']}>
            <div className={classes['left-side']}>
                <div className={classes['contact-div']}>
                    <div className={classes['contact-div-title']}>
                        <img src={phone} alt="icons-phone"/>
                        <p> icon Call To Us</p>
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
                        <input type='text' placeholder='Your Name*' className={classes['input']}/>
                        <input type='text' placeholder='Your Email*'/>
                        <input type='text' placeholder='Your Phone*'/>
                    </div>

                    <div className={classes['message-input']}>
                        <input type='text' placeholder='Your Message'/>
                    </div>

                    <div className={classes['btn-box']}>
                        <button className={classes['btn']}>
                            <p>Send Message</p>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </>
  )
}
