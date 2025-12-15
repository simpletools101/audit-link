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
        description: `We deliver a complete, independent internal audit function for organizations without in-house teams planning, executing, and reporting audits while reducing cost and operational complexity`,
        icon: FileText,
    },
    {
        title: 'Internal Audit \nCo-Sourcing',
        description: `We work alongside existing audit teams to strengthen capacity, fill skill gaps, and provide specialized and peak-period support without losing internal ownership.`,
        icon: Shield,
    },
    {
        title: 'Risk Management & Advisory',
        description: `We help identify, assess, and manage risks affecting performance, compliance, and sustainability through practical, forward-looking risk advisory solutions.`,
        icon: BarChart,
    },
    {
        title: `Capacity Building\n& Training`,
        description: `We strengthen the skills and confidence of internal auditors and finance teams through targeted training and professional mentorship.`,
        icon: Building2,
    },
    {
        title: `Business Process\nDocumentation\n& Manuals`,
        description: `We document and standardize business processes to improve efficiency, consistency, accountability, and audit readiness`,
        icon: PackageSearch,
    },
    {
        title: `Internal Audit\nManuals & Charters`,
        description: `We develop audit manuals and charters aligned with international standards, clearly defining mandate, authority, and methodology.`,
        icon: Form,
    },
    {
        title: `Audit & Finance\nRecruitment\nSupport`,
        description: `We assist in recruiting qualified audit and finance professionals with strong technical competence and ethical grounding.`,
        icon: BanknoteArrowDown,
    },
    {
        title: 'Audit Committee Support',
        description: `We support audit committees with meeting preparation, reporting, and technical guidance to strengthen oversight and governance.`,
        icon: HandFist,
    },
    {
        title: 'Payroll Management',
        description: `We provide payroll support to ensure accuracy, confidentiality, and compliance while strengthening controls and reliability`,
        icon: HandCoins,
    },
    {
        title: `IT & Cyber\nSecurity Audits`,
        description: `We assess IT systems, data controls, and cyber security practices to identify vulnerabilities, strengthen governance, and protect critical information assets.`,
        icon: ChessQueen,
    },
    {
        title: `Tax Advisory`,
        description: `We support tax compliance, planning, & risk management to reduce exposure and support sustainable operations.`,
        icon: Landmark,
    },
]

const ServiceCard = ({ title, iconImage, onClick }: { title: string; iconImage: string; onClick: () => void }) => (
    <div
        onClick={onClick}
        className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[340px] xl:w-[360px]
            h-[280px] sm:h-[300px] md:h-[320px]
            bg-white
            rounded-2xl sm:rounded-3xl
            shadow-lg
            p-4 sm:p-5 md:p-6
            flex flex-col
            cursor-pointer
            hover:shadow-xl
            hover:scale-105
            transition-all
            duration-300
        "
    >
        <div className="flex-1 flex items-center justify-center">
            <img
                src={iconImage}
                className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] object-contain"
                alt={title}
            />
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyan-700 leading-snug whitespace-pre-line text-left">
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
        const scrollAmount = scrollRef.current.offsetWidth * 0.8
        scrollRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }

    return (
        <section className="relative mt-8 sm:mt-12 lg:mt-16 w-full overflow-hidden py-8 sm:py-12" id="services">
            {/* Title */}
            <div className="flex justify-center px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
                <motion.h2
                    className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#071A44]">Our</span> <span className="text-[#00A8B5]">Services</span>
                </motion.h2>
            </div>

            {/* Hero */}
            <div className="bg-[#071A44] mt-4 sm:mt-6 lg:mt-8 h-[200px] sm:h-[240px] md:h-[280px] rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-t-[80px] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
                    Building Brands Through
                    <span className="block mt-2">Strategic Tailored Services</span>
                </h2>
            </div>

            {/* Carousel */}
            <div className="relative -mt-12 sm:-mt-14 md:-mt-16 pb-8 sm:pb-12">
                {/* Navigation Arrows - Hidden on mobile, visible on large screens */}
                <button
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                    className="hidden lg:flex absolute left-2 xl:left-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg z-20 hover:bg-gray-50 transition"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                    className="hidden lg:flex absolute right-2 xl:right-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg z-20 hover:bg-gray-50 transition"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 overflow-x-auto px-4 sm:px-6 md:px-8 lg:px-12 scroll-smooth no-scrollbar snap-x snap-mandatory"
                >
                    {SERVICES.map((service, i) => {
                        const iconImage = `/icons/${i + 1}.png`
                        return (
                            <div key={i} className="shrink-0 snap-start">
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

                {/* Scroll Indicator for Mobile */}
                <div className="lg:hidden text-center mt-4 sm:mt-6 text-sm text-gray-500">
                    <p>← Swipe to see more →</p>
                </div>
            </div>

            {/* Modal */}
            {activeService && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 sm:px-6 backdrop-blur-sm"
                    onClick={() => {
                        setActiveService(null)
                        setActiveIconImage(null)
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 max-w-md sm:max-w-lg md:max-w-xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => {
                                setActiveService(null)
                                setActiveIconImage(null)
                            }}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-gray-100 rounded-full transition"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {activeIconImage && (
                            <img
                                src={activeIconImage}
                                alt={activeService.title}
                                className="w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] mb-4 sm:mb-6 mx-auto object-contain"
                            />
                        )}

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-700 mb-3 sm:mb-4 text-center leading-tight">
                            {activeService.title}
                        </h3>

                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
                            {activeService.description}
                        </p>
                    </motion.div>
                </div>
            )}
        </section>
    )
}