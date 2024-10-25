// pages/signup.js
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
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-4xl font-bold">Signup</h1>
                <form onSubmit={handleSignup} className="mt-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="p-2 mb-4 border border-gray-300"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="p-2 mb-4 border border-gray-300"
                        required
                    />
                    <button type="submit" className="p-2 text-white bg-green-500">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
