'use client'

import { BanknoteArrowDown, BarChart, Building2, ChessQueen, ChevronLeft, ChevronRight, FileText, Form, HandCoins, HandFist, Landmark, PackageSearch, Shield } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { useEffect, useState } from 'react'

export default function ServicesSection() {
    const [currentServiceSlide, setCurrentServiceSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentServiceSlide((prev) => (prev + 1) % services.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const nextService = () => {
        setCurrentServiceSlide((prev) => (prev + 1) % services.length)
    }

    const prevService = () => {
        setCurrentServiceSlide((prev) => (prev - 1 + services.length) % services.length)
    }

    const services = [
        {
            title: 'Full-House Internal Audit Outsourcing',
            description:
                'Auditlink provides a complete internal audit function for organizations that do not maintain an in-house team. We plan, execute, and report on internal audits independently, giving management and boards reliable assurance while reducing the cost and complexity of running a full audit department.',
            icon: FileText,
        },
        {
            title: 'Internal Audit Co-Sourcing Services',
            description:
                'For organizations with an existing audit team, we work alongside your staff to strengthen capacity and close skill gaps. This flexible approach gives you access to specialized expertise, peak-period support, and objective insight without losing internal ownership.',
            icon: Shield,
        },
        {
            title: 'Risk Management & Advisory',
            description:
                'We help organizations identify, assess, and manage risks that could impact performance, compliance, and sustainability. Our advisory approach is practical and forward-looking, enabling management to make informed decisions and strengthen enterprise risk frameworks.',
            icon: BarChart,
        },
        {
            title: 'Capacity Building for Internal Auditors and Accountants',
            description:
                'We invest in people as much as processes. Through targeted training and mentorship, we build the technical, analytical, and professional capacity of internal auditors and finance teams to perform with confidence and consistency.',
            icon: Building2,
        },
        {
            title: 'Development and Documentation of Business Processes and Manuals',
            description:
                'We document and standardize business processes to improve efficiency, consistency, and control. Clear manuals support accountability, ease onboarding, and provide a strong foundation for audits and compliance.',
            icon: PackageSearch,
        },
        {
            title: 'Development and Documentation of Internal Audit Manuals and Charters',
            description:
                'Auditlink develops internal audit manuals and charters aligned with international standards and best practice. These documents clearly define mandate, authority, scope, and methodology, strengthening audit independence and effectiveness.',
            icon: Form,
        },
        {
            title: 'Recruitment for Internal Audit and Finance Departments',
            description:
                'We support organizations in identifying and recruiting qualified audit and finance professionals. Our recruitment approach focuses on technical competence, ethical grounding, and organizational fit.',
            icon: BanknoteArrowDown,
        },
        {
            title: 'Audit Committee Support',
            description:
                'We assist audit committees with meeting preparation, reporting, and technical guidance. Our support enhances oversight, strengthens governance, and improves communication between management, auditors, and the board.',
            icon: HandFist,
        },
        {
            title: 'Payroll Management',
            description:
                'Auditlink provides payroll management support to ensure accuracy, confidentiality, and compliance with statutory requirements. We help reduce errors, manage controls, and improve reliability in payroll processes.',
            icon: HandCoins,
        },
        {
            title: 'Strategy Implementation Support',
            description:
                'We help translate strategy into action by reviewing implementation frameworks, monitoring progress, and identifying risks that could derail execution. Our assurance ensures strategies are not just well designed, but effectively delivered.',
            icon:ChessQueen,
        },
        {
            title: 'Budgeting',
            description:
                'Auditlink supports budgeting processes by strengthening planning, control, and monitoring mechanisms. We help organizations develop realistic budgets that align resources with strategic priorities and improve financial discipline',
            icon: Landmark,
        },
    ]

    return (
        <section id="services" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                        Building Brands Through Strategic Tailored Services
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
                        >
                            {services.map((service, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <Card className="border-2 border-border shadow-xl bg-white rounded-sm h-full">
                                        <CardContent className="p-12 space-y-8 text-center">
                                            <div className="inline-flex bg-[#071A44] items-center justify-center w-20 h-20 rounded-sm  text-primary-foreground shadow-lg">
                                                <service.icon className="w-10 h-10" />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                                {service.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevService}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-slate-50 border-2 border-border p-3 rounded-sm transition-all shadow-lg z-10"
                        aria-label="Previous service"
                    >
                        <ChevronLeft className="w-6 h-6 text-primary" />
                    </button>
                    <button
                        onClick={nextService}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-slate-50 border-2 border-border p-3 rounded-sm transition-all shadow-lg z-10"
                        aria-label="Next service"
                    >
                        <ChevronRight className="w-6 h-6 text-primary" />
                    </button>

                    <div className="flex justify-center gap-3 mt-12">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentServiceSlide(index)}
                                className={`h-1 rounded-sm transition-all ${
                                    currentServiceSlide === index ? 'bg-primary w-12' : 'bg-border w-8'
                                }`}
                                aria-label={`Go to service ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
