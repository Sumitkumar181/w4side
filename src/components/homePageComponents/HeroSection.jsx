import React from "react";

import w4back from "../../assets/logos/w4back.mp4"

export default function HeroSection() {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px] 2xl:h-[900px] overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={w4back} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                {/* Title */}
                <h1 className="text-white font-[inter] font-extrabold 
                    text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                    leading-snug max-w-4xl">
                    W4SIDE TECHNOLOGIES
                </h1>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-6 justify-center">
                    <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 
                        text-base sm:text-lg md:text-xl 
                        rounded-sm font-[inter] font-bold 
                        bg-white text-black 
                        hover:bg-gray-800 hover:text-white 
                        transition-colors duration-500">
                        Contact
                    </button>

                    <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 
                        text-base sm:text-lg md:text-xl 
                        rounded-sm font-[inter] font-bold 
                        bg-white text-black 
                        hover:bg-gray-800 hover:text-white 
                        transition-colors duration-500">
                        Services
                    </button>
                </div>
            </div>
        </div>
    );
}
