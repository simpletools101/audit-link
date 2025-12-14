'use client'

import React, { useRef, useState } from 'react'
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
        title: 'Full-House Internal Audit Outsourcing',
        description:
            'Auditlink provides a complete internal audit function for organizations that do not maintain an in-house team.',
        icon: FileText,
    },
    {
        title: 'Internal Audit Co-Sourcing Services',
        description: 'We work alongside your staff to strengthen capacity and close skill gaps.',
        icon: Shield,
    },
    {
        title: 'Risk Management & Advisory',
        description: 'Identify, assess, and manage risks that impact performance and compliance.',
        icon: BarChart,
    },
    {
        title: 'Capacity Building for Auditors',
        description: 'Targeted training and mentorship for audit and finance teams.',
        icon: Building2,
    },
    {
        title: 'Business Process Documentation',
        description: 'Standardizing business processes to improve efficiency and control.',
        icon: PackageSearch,
    },
    {
        title: 'Audit Manuals and Charters',
        description: 'Aligned with international standards and best practice.',
        icon: Form,
    },
    {
        title: 'Recruitment for Audit & Finance',
        description: 'Identifying technically competent and ethical professionals.',
        icon: BanknoteArrowDown,
    },
    {
        title: 'Audit Committee Support',
        description: 'Meeting preparation, reporting, and governance guidance.',
        icon: HandFist,
    },
    {
        title: 'Payroll Management',
        description: 'Accuracy, confidentiality, and statutory compliance.',
        icon: HandCoins,
    },
    {
        title: 'Strategy Implementation Support',
        description: 'Ensuring strategy is executed effectively.',
        icon: ChessQueen,
    },
    {
        title: 'Budgeting',
        description: 'Strengthening planning, control, and financial discipline.',
        icon: Landmark,
    },
]

/* ---------- CARD ---------- */

const ServiceCard = ({ title, iconImage, onClick }: { title: string; iconImage: string; onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="
        w-[420px] sm:w-[480px] lg:w-[320px]
        h-[360px]
        bg-white
        rounded-3xl
        border border-gray-100
        shadow-lg
        p-8
        flex flex-col
        cursor-pointer
        hover:shadow-xl
        transition
      "
        >
            <div className="flex-1 flex items-center justify-center">
                <img src={iconImage} className="w-[70px] h-[70px]" alt="" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-cyan-700 leading-snug">{title}</h3>
        </div>
    )
}

/* ---------- MAIN ---------- */

export default function ServiceItem() {
    const [activeService, setActiveService] = useState<Service | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({
            left: dir === 'left' ? -560 : 560,
            behavior: 'smooth',
        })
    }

    return (
        <section className="relative  w-full pb-32 overflow-hidden">
            {/* Title */}
            <div className="flex justify-center mb-10">
                <h2 className="font-extrabold text-neutral-300 text-4xl sm:text-6xl lg:text-7xl">Our Services</h2>
            </div>

            {/* Hero */}
            <div className="bg-[#071A44] h-[300px] sm:h-[420px] rounded-t-[80px] flex items-center justify-center px-6">
                <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#00A8B5] max-w-4xl">
                    Building Brands Through Strategic Tailored Services
                </h2>
            </div>

            {/* Carousel */}
            <div className="relative -mt-16">
                {/* Desktop Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20"
                >
                    <ChevronRight />
                </button>

                {/* Cards */}
                <div
                    ref={scrollRef}
                    className="
            flex gap-8
            overflow-x-auto
            px-8
            scroll-smooth
            no-scrollbar
          "
                >
                    {SERVICES.map((service, i) => (
                        <div key={i} className="shrink-0">
                            <ServiceCard
                                title={service.title}
                                iconImage={`/icons/${i + 1}.png`}
                                onClick={() => setActiveService(service)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {activeService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative">
                        <button onClick={() => setActiveService(null)} className="absolute top-4 right-4">
                            <X />
                        </button>

                        <activeService.icon className="w-14 h-14 mb-4" />

                        <h3 className="text-2xl font-bold text-cyan-700 mb-4">{activeService.title}</h3>

                        <p className="text-gray-700 leading-relaxed">{activeService.description}</p>
                    </div>
                </div>
            )}
        </section>
    )
}
