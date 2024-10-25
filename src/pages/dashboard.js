// pages/dashboard.js
import { useState } from 'react';
import Navbar from '../components/NavBar';
import Dashboard from '../components/Dashboard';
import SearchForm from '../components/SearchForm';
import axios from 'axios';

const DashboardPage = () => {
    const [transactionData, setTransactionData] = useState(null);
    const [flowData, setFlowData] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [wallets, setWallets] = useState([
        { address: '0xWallet1', balance: '10' },
        { address: '0xWallet2', balance: '5' }
    ]);

    const handleSearch = async (input) => {
        try {
            const response = await axios.get(`/api/transaction?hash=${input}`);
            setTransactionData(response.data.transaction);
            setFlowData(response.data.flow);

            if (parseFloat(response.data.transaction.amount) > 10) {
                setAlerts([...alerts, {
                    message: 'High transaction amount detected!',
                    wallet: response.data.transaction.receiver,
                    timestamp: Date.now(),
                }]);
            }
        } catch (error) {
            console.error('Error fetching transaction details:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <SearchForm onSearch={handleSearch} />
            <Dashboard transactions={transactionData ? [transactionData] : []} wallets={wallets} alerts={alerts} />
        </div>
    );
};

export default DashboardPage;
