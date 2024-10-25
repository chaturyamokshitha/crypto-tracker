// pages/home.js
import Navbar from "../components/NavBar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-4xl font-bold">Welcome to Crypto Transaction Tracker</h1>
                <p className="mt-4">This platform allows you to track and identify cryptocurrency transactions in real-time.</p>
            </div>
        </div>
    );
};

export default Home;
