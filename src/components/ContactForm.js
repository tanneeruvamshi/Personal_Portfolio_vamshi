import React, { useState } from 'react';
import '../styles/ContactForm.css'; 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you might want to add logic to send this data to a server
        console.log('Form data submitted:', formData);
        alert('Thank you for your message!');
        setFormData({name: '', email: '', message: ''}); // Reset form after submission
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
