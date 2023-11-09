import React from 'react';
import "./Aboutus.css"
function ContactUs() {
    return (
        <div className="about-us">
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, please feel free to get in touch with us:</p>
            <div className="contact-details">
                <p><strong>Email:</strong> [Way2employee@gmail.com]</p>

            </div>
            <p>You can also reach out to us through our social media channels:</p>
            <div className="social-media">
                <ul>
                    <li><a href="https://www.whatsapp.com/channel/0029Va9HZxt9hXFFhW4aOM2d">Whatsapp</a></li>
                    <li><a href="https://instagram.com/siddiqkolimi">Intagram</a></li>

                </ul>
            </div>
        </div>
    );
}

export default ContactUs;
