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
    { title: 'Full-House Internal Audit Outsourcing', description: 'Auditlink provides a complete internal audit function for organizations that do not maintain an in-house team.', icon: FileText },
    { title: 'Risk Management & Advisory', description: 'Identify, assess, and manage risks that impact performance and compliance.', icon: BarChart },
    { title: 'Capacity Building for Auditors', description: 'Targeted training and mentorship for audit and finance teams.', icon: Building2 },
    { title: 'Business Process Documentation', description: 'Standardizing business processes to improve efficiency and control.', icon: PackageSearch },
    { title: 'Audit Manuals and Charters', description: 'Aligned with international standards and best practice.', icon: Form },
    { title: 'Recruitment for Audit & Finance', description: 'Identifying technically competent and ethical professionals.', icon: BanknoteArrowDown },
    { title: 'Audit Committee Support', description: 'Meeting preparation, reporting, and governance guidance.', icon: HandFist },
    { title: 'Internal Audit Co-Sourcing Services', description: 'We work alongside your staff to strengthen capacity and close skill gaps.', icon: Shield },
    { title: 'Payroll Management', description: 'Accuracy, confidentiality, and statutory compliance.', icon: HandCoins },
    { title: 'Strategy Implementation Support', description: 'Ensuring strategy is executed effectively.', icon: ChessQueen },
    { title: 'Budgeting', description: 'Strengthening planning, control, and financial discipline.', icon: Landmark },
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
        <h3 className="text-lg sm:text-xl font-bold text-cyan-700 leading-snug  text-left">{title}</h3>
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
                <h2 className="text-2xl sm:text-4xl font-bold text-[#00A8B5] max-w-4xl">
                    Building Brands Through
                    <p>Strategic Tailored Services</p>
                </h2>
            </div>

            {/* Carousel */}
            <div className="relative -mt-16">
                {/* Arrows (large screens only) */}
                <button onClick={() => scroll('left')} className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20">
                    <ChevronLeft />
                </button>
                <button onClick={() => scroll('right')} className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20">
                    <ChevronRight />
                </button>

                <div ref={scrollRef} className="flex gap-6 md:gap-8 overflow-x-auto px-4 md:px-8 scroll-smooth no-scrollbar">
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
                            <img src={activeIconImage} alt={activeService.title} className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] mb-6 mx-auto" />
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
