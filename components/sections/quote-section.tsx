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
        <section className="w-full   bg-white mt-12 overflow-hidden">
            {/* Top White Spacer */}
            <div className="h-24 sm:h-32 bg-white" />

            {/* Main Section */}
            <div
                className="relative w-full overflow-visible"
                style={{ backgroundColor }}
            >
                <div className=" h-[400px]">
                    <div className="flex flex-col h-full lg:flex-row items-center gap-12">
                        {/* Image Column */}
                        <div className="w-full lg:w-5/12 relative flex justify-center h-[550px]">
                            <img
                                src={imageUrl}
                                alt="Professional"
                                className="
                                    absolute
                                   
                                    -top-28
                                    w-full
                                    max-w-sm
                                    lg:max-w-none
                                    
                                    object-cover
                                    object-top
                                "
                            />
                        </div>

                        {/* Quote Column */}
                        <div className="w-full lg:w-7/12 lg:pl-12 h-full">
                            <div className="relative">
                                {/* Opening Quote */}
                                <div
                                    className="text-[120px] sm:text-[140px] font-extrabold leading-none"
                                    style={{ color: '#071A44' }}
                                >
                                    “
                                </div>

                                {/* Quote Text */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight -mt-6">
                                    {quote}
                                </h1>

                                {/* Closing Quote */}
                                <div
                                    className="text-[120px] sm:text-[140px] font-extrabold leading-none text-right -mt-6"
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
