// pages/index.js
import Navbar from '../components/NavBar';

const HomePage = () => {
    return (
        <div>
            <Navbar />  {/* Navbar should be displayed on the Home page */}
            <div className="container mx-auto mt-8">
                <h1 className="text-4xl font-bold">Welcome to Crypto Transaction Tracker</h1>
                <p className="mt-4">
                    This platform helps you track cryptocurrency transactions, visualize transaction flows, and assess risk.
                    Use the Dashboard to view your tracked wallets or search for specific transactions.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
