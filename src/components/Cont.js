// pages/contact.js
import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Services from './Services';

export default function Cont() {
    return (
        
        <div className="flex italic text-white ">
          
            <div className="w-full p-8 text-white shadow-lg">
                <h1 className="mb-4 text-2xl font-semibold text-white">Contact Us</h1>
                <p className="mb-8 text-xl text-white">Connect with us on social media or send us an email for any inquiries!</p>

                <div className="flex mb-8 space-x-6">
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-3xl text-blue-500 hover:text-blue-400" />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-600" />
                    </a>
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-3xl text-blue-600 hover:text-blue-500" />
                    </a>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl text-pink-500 hover:text-pink-400" />
                    </a>
                </div>

                <div className="">
                    <h2 className="text-xl font-semibold text-white">Email Us</h2>
                    <p className="text-white">support@txtrace.com</p>
                </div>
            </div>
        </div>
    );
}
