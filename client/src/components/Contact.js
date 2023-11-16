import React, { useState } from 'react';
import '../assets/css/Contact.css';

const ContactPage = () => {

    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handler to update form data when input values change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement the logic to handle the form submission (send data to server, etc.)
        console.log('Form Data:', formData);
        // Reset the form data after submission (optional)
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };


    return (
        <div className='contact-page'>
            <h2>Contact Us</h2>
            <h6 className='contact-page-text'>
                <i>
                    Thank you for reaching out to Declassified! We value your feedback, inquiries, and suggestions.
                    Feel free to contact us using the feedback form below, and we'll do our best to assist you.
                </i>
            </h6>
            <br/>

            <h4>Feedback Form</h4>
            <h6 className='contact-page-text'><i>Have a suggestion or feedback for us? Fill out our feedback form below:</i></h6>

            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <label htmlFor="name">Name:</label>*/}
            {/*    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />*/}

            {/*    <label htmlFor="email">Email:</label>*/}
            {/*    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />*/}

            {/*    <label htmlFor="message">Message:</label>*/}
            {/*    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>*/}

            {/*    <button type="submit">Submit</button>*/}
            {/*</form>*/}

            <h6 className='contact-page-text'>
                <i>
                    We appreciate your interest in Declassified and will be in contact with you soon about your inquiry!
                    <br/><br/>
                    Best regards,
                    <br/><br/><br/>
                    The Declassified Team
                </i>
            </h6>
        </div>
    );
};

export default ContactPage;