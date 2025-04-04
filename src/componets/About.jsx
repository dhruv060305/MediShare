import React from 'react'

export default function About() {
    return (
        <div className="flex justify-center items-center flex-col">
            {/* About Text */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
                <p className="mt-4 text-gray-600">
                    We are dedicated to making the real estate experience seamless and efficient.
                    With years of expertise, we provide top-tier service to help you buy, sell, or rent properties with confidence.
                </p>
                <p className="mt-4 text-gray-600">
                    Our team ensures transparency, reliability, and affordability in every step of the process.
                    Whether you're looking for your dream home or an investment opportunity, we have you covered.
                </p>
                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700">
                    Learn More
                </button>
            </div>
        </div>
    )
}
