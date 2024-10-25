// pages/about.js
import Navbar from "../components/NavBar";

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-4">
                    We are a blockchain analytics company focused on providing transparency and insights into cryptocurrency transactions.
                </p>
            </div>
        </div>
    );
};

export default About;
