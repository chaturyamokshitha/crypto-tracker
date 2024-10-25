import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TransactionFlow = ({ flowData }) => {
    return (
        <div className="transaction-flow">
            <h3>Transaction Flow</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={flowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="wallet" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TransactionFlow;
