'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
    ChevronLeft,
    ChevronRight,
    X,
    Shield,
    BarChart,
    Building2,
    PackageSearch,
    Form,
    BanknoteArrowDown,
    HandFist,
    HandCoins,
    ChessQueen,
    Landmark,
    FileText,
} from 'lucide-react'

type IconComponent = React.ElementType

interface Service {
    title: string
    description: string
    icon: IconComponent
}

const SERVICES: Service[] = [
    {
        title: 'Full Internal Audit Outsourcing',
        description: `
        We deliver a complete, independent
internal audit function for organizations
without in-house teams planning,
executing, and reporting audits while
reducing cost and operational
complexity
        `,
        icon: FileText,
    },
     {
        title: 'Internal Audit \nCo-Sourcing ',
        description: `We work alongside existing audit teams
to strengthen capacity, fill skill gaps, and
provide specialized and peak-period
support without losing internal ownership.`,
        icon: Shield,
    },
    {
        title: 'Risk Management & Advisory',
        description: `
        We help identify, assess, and manage risks
affecting performance, compliance, and
sustainability through practical, forward-
looking risk advisory solutions.
        `,
        icon: BarChart,
    },
    {
        title: `Capacity Building
& Training`,
        description: `
        We strengthen the skills and confidence
of internal auditors and finance teams
through targeted training and
professional mentorship.
        `,
        icon: Building2,
    },
    {
        title: `Business Process
Documentation
& Manuals`,
        description: `We document and standardize business
processes to improve efficiency,
consistency, accountability, and
audit readiness`,
        icon: PackageSearch,
    },
    {
        title: `Internal Audit
Manuals & Charters`,
        description: `We develop audit manuals and charters
aligned with international standards,
clearly defining mandate, authority,
and methodology.`,
        icon: Form,
    },
    {
        title: `Audit & Finance
Recruitment
Support`,
        description: `
        We assist in recruiting qualified audit and
finance professionals with strong
technical competence and
ethical grounding.
        `,
        icon: BanknoteArrowDown,
    },
    {
        title: 'Audit Committee Support',
        description: `
        We support audit committees with
meeting preparation, reporting, and
technical guidance to strengthen
oversight and governance.
        `,
        icon: HandFist,
    },
   
    {
        title: 'Payroll Management',
        description:`
        We provide payroll support to ensure
accuracy, confidentiality, and compliance
while strengthening controls and reliability
        `,
        icon: HandCoins,
    },
    {
        title: `IT & Cyber
Security Audits`,
        description: `We assess IT systems, data controls, and
cyber security practices to identify
vulnerabilities, strengthen governance,
and protect critical information assets.`,
        icon: ChessQueen,
    },
    { title: `Tax Advisory`, description: `We support tax compliance, planning, &
risk management to reduce exposure and
support sustainable operations.`, icon: Landmark },
]

const ServiceCard = ({ title, iconImage, onClick }: { title: string; iconImage: string; onClick: () => void }) => (
    <div
        onClick={onClick}
        className="
            w-[280px] sm:w-[320px] md:w-[360px] lg:w-[320px]
            h-[320px]
            bg-white
            rounded-3xl
            border border-gray-100
            shadow-lg
            p-5 sm:p-6
            flex flex-col
            cursor-pointer
            hover:shadow-xl
            transition
        "
    >
        <div className="flex-1 flex items-center ">
            <img src={iconImage} className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]" alt={title} />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-cyan-700 leading-snug whitespace-pre-line  text-left">
            {title}
        </h3>
    </div>
)

export default function ServiceItem() {
    const [activeService, setActiveService] = useState<Service | null>(null)
    const [activeIconImage, setActiveIconImage] = useState<string | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({ left: dir === 'left' ? -560 : 560, behavior: 'smooth' })
    }

    return (
        <section className="relative mt-8 w-full pb-32 overflow-hidden">
            {/* Title */}
            <div className="flex justify-center mb-10 px-4">
                <motion.h2
                    className="font-extrabold text-[32px] sm:text-[52px] lg:text-[72px] text-center leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#071A44]">Our</span> <span className="text-[#00A8B5]">Services</span>
                </motion.h2>
            </div>

            {/* Hero */}
            <div className="bg-[#071A44] mt-8 h-[250px] sm:h-[280px] rounded-t-[80px] flex items-center justify-center px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#00A8B5] max-w-4xl">
                    Building Brands Through
                    <p>Strategic Tailored Services</p>
                </h2>
            </div>

            {/* Carousel */}
            <div className="relative -mt-16">
                {/* Arrows (large screens only) */}
                <button
                    onClick={() => scroll('left')}
                    className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
                >
                    <ChevronRight />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-6 md:gap-8 overflow-x-auto px-4 md:px-8 scroll-smooth no-scrollbar"
                >
                    {SERVICES.map((service, i) => {
                        const iconImage = `/icons/${i + 1}.png`
                        return (
                            <div key={i} className="shrink-0">
                                <ServiceCard
                                    title={service.title}
                                    iconImage={iconImage}
                                    onClick={() => {
                                        setActiveService(service)
                                        setActiveIconImage(iconImage)
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Modal */}
            {activeService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative">
                        <button
                            onClick={() => {
                                setActiveService(null)
                                setActiveIconImage(null)
                            }}
                            className="absolute top-4 right-4"
                        >
                            <X />
                        </button>

                        {activeIconImage && (
                            <img
                                src={activeIconImage}
                                alt={activeService.title}
                                className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] mb-6 mx-auto"
                            />
                        )}

                        <h3 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-4 text-center">
                            {activeService.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-center">{activeService.description}</p>
                    </div>
                </div>
            )}
        </section>
    )
}
