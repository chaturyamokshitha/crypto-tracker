import Navbar from "../components/NavBar";
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        // Handle signup logic here (e.g., form validation, user creation)
        console.log("Signing up with", email, password);
    };

    return (
        <div className="h-screen bg-black">
            <Navbar />
            {/* Centering the form */}
            <div className="flex items-center justify-center h-full">
                <div className="container w-full max-w-sm p-6 mx-auto bg-white rounded-lg shadow-lg">
                    <h1 className="mb-6 text-4xl font-bold text-center">Signup</h1>
                    <form onSubmit={handleSignup} className="mt-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            required
                        />
                        <button type="submit" className="w-full p-2 text-white bg-green-500 rounded">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
