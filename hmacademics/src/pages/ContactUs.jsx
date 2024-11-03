import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
    const publicKey = import.meta.env.VITE_USER_ID;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId =import.meta.env.VITE_TEMPLATE_ID;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
            () => {
            console.log('SUCCESS!');
            form.current.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className="contactForm">
            <h1>Contact us to schedule!</h1>
        <form ref={form} onSubmit={sendEmail}>
        
        <div className="contactForm-group">
        <label>Name</label>
        <input type="text" name="user_name" required/>
        <label>Email</label>
        <input type="email" name="user_email" required/>
        <label>Phone</label>
        <input type="phone" name="user_phone" required/>
        </div>
        <div className="contactForm-group">
        <label>What's the best way to reach you, text, email, or phone call?</label>
        <input type="text" name="user_pref" required/>
        </div>
        <div className="contactForm-group">
        <label>What class and topics are you seeking tutoring for?</label>
        <textarea 
        name="message" 
        required
        rows="7"/>
        </div>
        <div className="contactForm-group">
        <label>What dates and times work best for you?</label>
        <textarea 
        name="times" 
        required
        rows="7" />
        </div>
        <button type="submit" value="Send">Submit</button>
        </form>
        </div>
    );
    };