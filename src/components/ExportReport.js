// components/ExportReport.js
import React from 'react';

const ExportReport = ({ data }) => {
    const exportCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + data.map(e => `${e.sender},${e.receiver},${e.amount}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "transaction_report.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="export-report">
            <button onClick={exportCSV}>Export as CSV</button>
        </div>
    );
};

export default ExportReport;
