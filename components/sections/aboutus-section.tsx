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
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex mt-12 items-center justify-center mb-12">
                <motion.h2
                    className="
          font-extrabold
          text-neutral-300
          text-[38px] sm:text-[62px] lg:text-[84px]
          leading-none
        "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#071A44]">About</span> <span className="text-[#00A8B5]">Us</span>
                </motion.h2>
            </div>
            <div className=" ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl  border-none bg-[#071a44]">
                        <ExperienceCard defaultImage='/imgs/ABOUT-US.jpg'/>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            Your Trusted Partner in Internal Audit Excellence.
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed" suppressHydrationWarning>
                            Auditlink Consulting Ltd is a professional internal audit services firm providing
                            independent, cost-effective assurance solutions to organizations across multiple sectors.
                            <p className='mt-4'>
                                We support our clients through outsourced and co-sourced internal audit services that
                                strengthen governance, improve risk management, and enhance internal controls. By
                                combining deep technical expertise with objectivity and integrity, Auditlink enables
                                organizations to meet growing compliance demands while making confident, informed
                                decisions as they grow and evolve.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuditHero
