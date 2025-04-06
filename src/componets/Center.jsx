import React from 'react';

export default function Center() {
    const locations = [
        "Bharati Vidyapeeth, Kharghar",
        "Saraswati College, Kharghar",
        "Grand Central, Seawoods",
        "Terna Hospital, Nerul"
    ];

    return (
        <div className="relative min-h-screen ">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./src/Assets/Background.mp4"
                autoPlay
                loop
                muted
            ></video>


            <div className='flex flex-wrap md:flex-nowrap '>

                {/* Content Section */}
                <div className="relative z-10 bg-white bg-opacity-80 shadow-lg rounded-lg p-6 w-full max-w-md mx-auto mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-center">Locations</h2>
                    <ul className="list-disc px-5 text-gray-800 text-lg font-medium">
                        {locations.map((loc, index) => (
                            <li key={index} className="mb-2">{loc}</li>
                        ))}
                    </ul>
                </div>

                {/* Embedded Google My Map with all markers */}
                <div className="relative z-10 max-w-6xl mx-auto p-4 bg-white bg-opacity-90 rounded-lg shadow-lg">
                    <div className="w-full h-[480px]">
                        <iframe
                            title="Google Map of Locations"
                            src="https://www.google.com/maps/d/embed?mid=1No_cIEpy7quwF2eV6uxhkpt6JjeVMrA&ehbc=2E312F"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div> 
        </div>
    );
}
