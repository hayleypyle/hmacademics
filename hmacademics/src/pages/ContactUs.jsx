import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
    const publicKey = import.meta.env.VITE_USER_ID;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId =import.meta.env.VITE_TEMPLATE_ID;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Service ID:", serviceId);
        console.log("Template ID:", templateId);
        console.log("Public Key:", publicKey);

        emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    );
    };