'use client'

import React from 'react'

interface HeroBannerProps {
    imageUrl?: string
    quote?: string
    backgroundColor?: string
}

const HeroBanner: React.FC<HeroBannerProps> = ({
    imageUrl = '/imgs/QUOTE.png',
    quote = "Tomorrow's risks demand today's insight.",
    backgroundColor = '#00A8B5',
}) => {
    return (
        <section className="w-full bg-white mt-12 overflow-hidden">
            {/* Top White Spacer */}
            <div className="h-24 sm:h-32 bg-white" />

            {/* Main Section */}
            <div className="relative w-full" style={{ backgroundColor }}>
                <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Image */}
                        <div className="w-full lg:w-5/12 relative lg:-mt-32 flex justify-center">
                            <img
                                src={imageUrl}
                                alt="Professional"
                                className="
                  w-full
                  max-w-sm lg:max-w-none
                  h-[550px]
                  object-top
               
                  object-cover

                 
                "
                            />
                        </div>

                        {/* Quote */}
                        <div className="w-full lg:w-7/12 lg:pl-12">
                            <div className="relative">
                                {/* Opening Quote */}
                                <div className="text-12xl sm:text-8xl font-extrabold " style={{ color: '#071A44' }}>
                                    “
                                </div>
                                {/* Quote Text */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight ">
                                    {quote}
                                </h1>

                                {/* Closing Quote */}
                                <div
                                    className="text-8xl sm:text-8xl  font-extrabold  leading-none text-right "
                                    style={{ color: '#071A44' }}
                                >
                                    ”
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner
