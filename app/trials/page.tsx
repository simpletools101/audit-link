import React from 'react'
import Image from 'next/image'
import yearsImage from '@/assets/15-years.png'

interface AuditHeroProps {
    imageSrc?: string
    imageAlt?: string
}

const AuditHero: React.FC<AuditHeroProps> = ({
    imageSrc = '/audit-team.jpg',
    imageAlt = 'Audit team collaboration',
}) => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            {/* <div className="flex items-center justify-center mb-8">
                <h2
                    className="
          font-extrabold
          text-neutral-300
          text-[48px] sm:text-[72px] lg:text-[94px]
          leading-none
        "
                >
                    Our Services
                </h2>
            </div> */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-[#071a44]">
                        <div>
                            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
                        </div>

                        {/* Experience badge overlay */}
                        <div className="absolute top-0 -right-8 bg-white ">
                            <img src={yearsImage.src} />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            Your Trusted Partner in Internal Audit Excellence.
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            Auditlink Consulting Ltd was created by internal auditors who saw a clear need:
                            organizations were facing rising risks, growing compliance demands, and limited audit
                            capacity. Many struggled to maintain an in-house function that could keep pace. Our founders
                            stepped in to bridge that gap with an independent, high-calibre audit partner built on
                            integrity, objectivity, and real technical depth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuditHero
