'use client'
import React from 'react'
import Image from 'next/image'
import yearsImage from '@/assets/15-years.png'
import { motion } from 'framer-motion'
import ExperienceCard from '../common/about-ctr'

interface AuditHeroProps {
    imageSrc?: string
    imageAlt?: string
}

const AuditHero: React.FC<AuditHeroProps> = ({
    imageSrc = '/imgs/ABOUT-US.jpg',
    imageAlt = 'Audit team collaboration',
}) => {
    return (
        <section className="bg-white py-8 sm:py-12 lg:py-16" id="about">
            {/* Title Section */}
            <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="w-full flex items-center justify-center h-24 sm:h-32 lg:h-40
                        font-extrabold gap-2 sm:gap-4
                        text-neutral-300
                        text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                        leading-none
                    "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#071A44]">About</span>
                    <span className="text-[#00A8B5]">Us</span>
                </motion.h2>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Left side - Image */}
                    <motion.div
                        className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border-none bg-[#071a44]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/imgs/ABOUT-US.jpg"
                            alt={imageAlt}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        className="space-y-4 sm:space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            Your Trusted Partner in Internal Audit Excellence.
                        </h1>

                        <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-4">
                            <p>
                                Auditlink Consulting Ltd is a professional internal audit services firm providing
                                independent, cost-effective assurance solutions to organizations across multiple
                                sectors.
                            </p>
                            <p>
                                We support our clients through outsourced and co-sourced internal audit services that
                                strengthen governance, improve risk management, and enhance internal controls. By
                                combining deep technical expertise with objectivity and integrity, Auditlink enables
                                organizations to meet growing compliance demands while making confident, informed
                                decisions as they grow and evolve.
                            </p>
                        </div>

                        {/* Years Experience Badge */}
                        <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#00bcd4]">
                                15
                            </div>
                            <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-900 leading-tight max-w-[200px] sm:max-w-none">
                                Years of Combined Team Experience
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AuditHero