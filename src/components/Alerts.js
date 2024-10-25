// components/Alerts.js
import React from 'react';

const Alerts = ({ alerts }) => {
    if (!alerts || alerts.length === 0) return <p>No alerts at the moment.</p>;

    return (
        <div className="alerts">
            <h2>Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>
                        <p>{alert.message}</p>
                        <p><strong>Wallet:</strong> {alert.wallet}</p>
                        <p><strong>Date:</strong> {new Date(alert.timestamp).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Alerts;
