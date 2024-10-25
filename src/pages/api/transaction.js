export default function handler(req, res) {
    const { hash } = req.query;

    const transaction = {
        sender: "0xSenderAddress",
        receiver: "0xReceiverAddress",
        amount: "3.5",
        status: "Confirmed",
    };

    const flow = [
        { wallet: "0xSenderAddress", value: 2.5 },
        { wallet: "0xIntermediateAddress", value: 2.5 },
        { wallet: "0xReceiverAddress", value: 2.5 },
    ];

    res.status(200).json({ transaction, flow });
}
