// components/WalletOverview.js
import React from 'react';

const WalletOverview = ({ wallets }) => {
    if (!wallets || wallets.length === 0) return <p>No wallets being tracked.</p>;

    return (
        <div className="wallet-overview">
            <h2>Tracked Wallets</h2>
            <ul>
                {wallets.map((wallet, index) => (
                    <li key={index}>
                        <p><strong>Wallet Address:</strong> {wallet.address}</p>
                        <p><strong>Balance:</strong> {wallet.balance} ETH</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WalletOverview;
