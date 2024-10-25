// src/components/TransactionSummary.js
import React from 'react';

const TransactionSummary = ({ transactions }) => {
    if (!transactions || transactions.length === 0) return <p>No recent transactions.</p>;

    return (
        <div className="transaction-summary">
            <h2>Recent Transactions</h2>
            <ul>
                {transactions.map((txn, index) => (
                    <li key={index}>
                        <p><strong>From:</strong> {txn.sender}</p>
                        <p><strong>To:</strong> {txn.receiver}</p>
                        <p><strong>Amount:</strong> {txn.amount} ETH</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionSummary;
