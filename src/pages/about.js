// pages/about.js
import Cont from "@/components/Cont";
import Navbar from "../components/NavBar";
import { useState } from 'react';
const About = () => {
    return (
        <div className="italic bg-black">
            <Navbar />
            <div className="text-white bg-black "
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',    // Full viewport height
                    color: 'white',
                    padding: '2rem',
                    textAlign: 'center',
                    zIndex: 1,
                }}>

                <p className="mt-4">
                    TxTrace is dedicated to making cryptocurrency transactions transparent, accessible, and secure for everyone. Our platform provides real-time tracking and verification tools to help users navigate the complexities of the blockchain with confidence. By delivering reliable insights and a user-friendly experience, TxTrace empowers you to understand and trust every crypto transaction
                </p>
            </div>
            <h2 className="mb-4 ml-24 text-2xl italic font-semibold text-white">Frequently Asked Questions</h2>
            <div className="mb-10 space-y-6 text-sm text-white bg-black">
                <FAQItem
                    question="What is TxTrace?"
                    answer="TxTrace is a platform designed to help users track and verify cryptocurrency transactions with real-time insights and analytics."
                />
                <FAQItem
                    question="How does TxTrace work?"
                    answer="TxTrace uses blockchain technology and APIs to fetch and display transaction data securely, giving users a clear view of their transactions."
                />
                <FAQItem
                    question="Is TxTrace free to use?"
                    answer="Yes, TxTrace offers free access to basic transaction tracking features. Advanced features may require a subscription."
                />
                <FAQItem
                    question="What networks does TxTrace support?"
                    answer="Currently, TxTrace supports the Ethereum mainnet and test networks, including Sepolia. More networks will be added soon."
                />
                <FAQItem
                    question="How secure is my data with TxTrace?"
                    answer="TxTrace takes security seriously. We ensure all transaction data is fetched securely, and we follow industry best practices to protect user information."
                    className='mb-10' />
            </div>
            <div><Cont/></div>
        </div>
    );
};
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        < div className="w-3/4 p-2 mx-auto bg-black border border-gray-300 rounded-lg shadow-sm ">
            <h3
                className="flex items-center justify-between font-semibold cursor-pointer text-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </h3>
            {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
           </div>
    );
}

export default About;
