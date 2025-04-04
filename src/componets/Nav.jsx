import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="nav-box">
            <nav className="bg-white-400 text-black  p-3 ">
                <div className="container flex justify-between items-center mx-auto">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="./src/Assets/medishare2.png" alt="Logo" className="h-10 w-10" />
                        <span className="text-xl font-bold">MediShare</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-5">
                        <div className="flex space-x-5 justify-items-center items-center">
                            <Link to="/" className="hover:font-bold">Home</Link>
                            <Link to="/donations" className="hover:font-bold">Donations</Link>
                            <Link to="/donation-center" className="hover:font-bold">Donation Center</Link>
                            <Link to="/about" className="hover:font-bold">About Us</Link>
                            <Link to="/login" className="hover:font-bold">Login</Link>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign-Up For Free</button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center space-y-4 bg-white-400 p-4 mt-2 rounded">
                        <Link to="/" className="hover:font-bold">Home</Link>
                        <Link to="/donations" className="hover:font-bold">Donations</Link>
                        <Link to="/donation-center" className="hover:font-bold">Donation Center</Link>
                        <Link to="/about" className="hover:font-bold">About Us</Link>
                        <Link to="/login" className="hover:font-bold">Login</Link>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign-Up</button>
                    </div>
                )}
            </nav>
        </div>
    );
}
