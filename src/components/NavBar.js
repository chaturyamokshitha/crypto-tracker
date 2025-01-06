// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
           
        
        <nav className="p-1 italic text-white navbar">
            <ul className="flex p-1">
                    <ul className='flex mr-72'><li><img src='../textures/image.png' className='h-8'></img></li></ul>
                
                    <ul className='flex gap-10 ml-96 '> 
                        <li className='p-1 rounded-xl hover:bg-white hover:text-black'><Link href="/">Home</Link></li>       {/* Link to Home page */}
                        <li className='p-1 rounded-xl hover:bg-white hover:text-black'><Link href="/about">About Us</Link></li>  {/* Link to About Us */}
                        <li className='p-1 rounded-xl hover:bg-white hover:text-black'><Link href="/dashboard">Crypto Center</Link></li>  {/* Link to Dashboard */}

                        <li className='p-1 rounded-xl hover:bg-white hover:text-black'><Link href="/signup">Signup</Link></li>  {/* Link to Signup */}</ul>
            </ul>
        </nav>
           
            
        </div>
    );
};

export default Navbar;
