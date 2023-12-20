import React from 'react';
import '../css/contact.css'


function Contact() {
    return (
        <div className='contact-page'>
            <h1>Contact Us</h1>
            <p>Have any inquiries, suggestions, concerns, or feedback?</p>
            <p>We'd love to hear from you.</p>
            <div className='contacts'>
                <h1>Emails</h1>
                <p>John Makateto: john.makateto@student.moringaschool.com</p>
                <p>Peris Kingori :periskingori@gmail.com</p>
                <p>Eunice Mwenda: eunice.mwenda@student.moringaschool.com</p>
                <p>Newton Bundi : newtonBundi@gmail.com</p>
            </div>
            <p className='contact-paragraph'>We appreciate any message you have for us!</p>
        </div>
    );
}

export default Contact;