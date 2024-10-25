// components/Dashboard.js
import React from 'react';
import WalletOverview from './WalletOverview';
import TransactionSummary from './TransactionSummary';
import Alerts from './Alerts';

const Dashboard = ({ transactions, wallets, alerts }) => {
    return (
        <div className="dashboard">
            <h1 className="text-4xl font-bold">Crypto Transaction Tracker Dashboard</h1>

            {/* Alerts Section */}
            <Alerts alerts={alerts} />

            {/* Tracked Wallets Overview */}
            <WalletOverview wallets={wallets} />

            {/* Recent Transactions */}
            <TransactionSummary transactions={transactions} />
        </div>
    );
};

export default Dashboard;
