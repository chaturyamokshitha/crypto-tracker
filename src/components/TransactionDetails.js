// components/TransactionDetails.js
import React from "react";

const TransactionDetails = ({ data }) => {
    if (!data) return null;

    const assessRisk = (amount) => {
        if (parseFloat(amount) > 10) return "High Risk";
        if (parseFloat(amount) > 5) return "Medium Risk";
        return "Low Risk";
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md transaction-details">
            <h2 className="text-xl font-bold">Transaction Details</h2>
            <p><strong>Sender:</strong> {data.sender}</p>
            <p><strong>Receiver:</strong> {data.receiver}</p>
            <p><strong>Amount:</strong> {data.amount} ETH</p>
            <p><strong>Status:</strong> {data.status}</p>
            <p><strong>Risk Assessment:</strong> {assessRisk(data.amount)}</p>
        </div>

    );
};

export default TransactionDetails;
