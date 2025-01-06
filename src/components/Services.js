export default function Services() {
    return (
        <section className="py-8 italic services">
            <div className="container px-4 mx-auto text-center">
                <h2 className="mb-6 text-3xl font-bold text-white">Our Services</h2>
                <p className="mb-12 text-lg text-white ">Explore the services we provide to make your crypto journey smoother.</p>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                    {/* Service 1 */}
                    <div className="p-6 bg-white rounded-lg shadow-md service-card">
                        <h3 className="mb-4 text-2xl font-semibold">Transaction Tracking</h3>
                        <p className="text-gray-700">Monitor your cryptocurrency transactions in real-time to ensure security and transparency.</p>
                    </div>

                    {/* Service 2 */}
                    <div className="p-6 bg-white rounded-lg shadow-md service-card">
                        <h3 className="mb-4 text-2xl font-semibold">Wallet Overview</h3>
                        <p className="text-gray-700">Get an overview of your wallet balances and past transactions in one convenient place.</p>
                    </div>

                    {/* Service 3 */}
                    <div className="p-6 bg-white rounded-lg shadow-md service-card">
                        <h3 className="mb-4 text-2xl font-semibold">Risk Assessment</h3>
                        <p className="text-gray-700">Assess the risk of your transactions based on transaction history and amount thresholds.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
