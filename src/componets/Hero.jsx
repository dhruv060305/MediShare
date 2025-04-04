import React from 'react'

export default function Hero() {
    return (

        <section className="relative w-full bg-gray-100 py-16 px-6 text-center">
            {/* Header Text */}
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">
                Find Your <span className="text-blue-600 font-bold">Perfect Place.</span>
            </h1>

            {/* Search Bar */}
            <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white flex items-center rounded-full shadow-lg p-2 w-full md:w-2/3 max-w-3xl">
                    {/* Search Icon */}
                    <span className="px-3 text-gray-400">
                        🔍
                    </span>
                    {/* Location Input */}
                    <input
                        type="text"
                        placeholder="Search for a location..."
                        className="w-full outline-none px-2 py-2 text-gray-700"
                    />
                    {/* Budget Dropdown */}
                    <select className="outline-none bg-transparent px-3 text-gray-700">
                        <option>Select Medicine</option>
                        <option>General</option>
                        <option>Disease Specific</option>
                    </select>
                </div>
                {/* Search Button */}
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700">
                    Search
                </button>
            </div>

            {/* Illustration Placeholder */}
            <div className="mt-10 w-full flex justify-center">
                <img
                    src="./src/Assets/Section2.jpg"
                    alt="Cityscape Illustration"
                    className="w-full max-w-4xl"
                />
            </div>

            {/* Services Section */}
            <div className=" bg-blue-100 py-16 px-6">
                <h2 className="text-3xl font-semibold text-center text-blue-800">Services</h2>
                <p className="mt-4 text-xl text-center text-gray-700 max-w-2xl mx-auto">
                    A Pill Of Medicine Can Save A Life. We Are Here To Help You Find The Right Medicine For Your Needs.
                </p>


                    
                <div className="flex justify-center mt-10 items-center">
                    {/* Service 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg mr-16 text-center">
                        <div className="text-blue-600 mb-4">
                            <img src="/service-icon1.png" alt="Fixed Fee & Support" className="w-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Fixed Fee & Support</h3>
                        <p className="mt-2 text-gray-600">
                            You’ll only pay once, and it’s fixed from the beginning. There are no surprises, and we never add commission.
                        </p>
                        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Read More</button>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <div className="text-blue-600 mb-4">
                            <img src="/service-icon2.png" alt="Local Estate Agents" className="w-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Local Estate Agents</h3>
                        <p className="mt-2 text-gray-600">
                            Your dedicated local estate agent and their team of property experts will be with you every step until your home is sold.
                        </p>
                        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Read More</button>
                    </div>

                    
                </div>
                </div>

        </section>
    )
}
