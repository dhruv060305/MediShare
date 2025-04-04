import React, { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="nav-box">
            <nav className="bg-white-400 text-black border-b-2 p-3 ">
                <div className="container flex justify-between items-center mx-auto">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        <img src="./src/Assets/medishare2.png" alt="Logo" className="h-10 w-10" />
                        <span className="text-xl font-bold">MediShare</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-5">
                        <div className="flex space-x-5 justify-items-center items-center">
                        <a href="/" className="hover:font-bold">Home</a>
                        <a href="/" className="hover:font-bold">Case Studies</a>
                        <a href="/" className="hover:font-bold">Testimonials</a>
                        <a href="/" className="hover:font-bold">Recent Work</a>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Get In Touch</button>
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
                    <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-800 p-4 mt-2 rounded">
                        <a href="/" className="hover:font-bold">Home</a>
                        <a href="/" className="hover:font-bold">Case Studies</a>
                        <a href="/" className="hover:font-bold">Testimonials</a>
                        <a href="/" className="hover:font-bold">Recent Work</a>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Get In Touch</button>
                    </div>
                )}
            </nav>
        </div>
    );
}
