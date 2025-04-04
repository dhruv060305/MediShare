import React from 'react';

export default function Center() {
    const locations = [
        { name: "Bharati Vidyapeeth, Kharghar", url: "https://maps.google.com/?q=Bharati+Vidyapeeth,+Kharghar" },
        { name: "Saraswati College, Kharghar", url: "https://maps.google.com/?q=Saraswati+College,+Kharghar" },
        { name: "Grand Central, Seawoods", url: "https://maps.google.com/?q=Grand+Central,+Seawoods" },
        { name: "Terna Hospital, Nerul", url: "https://maps.google.com/?q=Terna+Hospital,+Nerul" },
        { name: "Tilak College, Kharghar", url: "https://maps.google.com/?q=Tilak+College,+Kharghar" }
    ];

    return (
        <div className="relative min-h-screen mt-16">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./src/Assets/Background.mp4"
                autoPlay
                loop
                muted
            ></video>

            {/* Content Section */}
            <div className="relative z-10 bg-white bg-opacity-80 shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-center">Locations</h2>
                {locations.map((loc, index) => (
                    <a
                        key={index}
                        href={loc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-blue-500 text-white text-lg font-medium rounded-lg p-3 mb-3 text-center hover:bg-blue-600 transition duration-300"
                    >
                        {loc.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
