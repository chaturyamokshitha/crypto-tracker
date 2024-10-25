// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="p-4 text-white bg-gray-800 navbar">
            <ul className="flex justify-around">
                <li><Link href="/">Home</Link></li>       {/* Link to Home page */}
                <li><Link href="/about">About Us</Link></li>  {/* Link to About Us */}
                <li><Link href="/dashboard">Dashboard</Link></li>  {/* Link to Dashboard */}
                <li><Link href="/login">Login</Link></li>    {/* Link to Login */}
                <li><Link href="/signup">Signup</Link></li>  {/* Link to Signup */}
            </ul>
        </nav>
    );
};

export default Navbar;
