"use client"

import { motion } from 'framer-motion'
import { CheckCircle, Lightbulb, Shield, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

export default function CoreValuesSection() {
    const coreValues = [
        {
            icon: CheckCircle,
            title: 'Professional',
            description:
                'Delivering excellence with industry-leading standards and expertise in every engagement',
        },
        {
            icon: Shield,
            title: 'Trustworthy',
            description:
                'Building lasting relationships through integrity, transparency, and unwavering commitment',
        },
        {
            icon: TrendingUp,
            title: 'Efficient & Supportive',
            description:
                'Streamlined processes and dedicated support that accelerate your business growth',
        },
        {
            icon: Lightbulb,
            title: 'Innovative',
            description:
                'Tech-powered solutions and forward-thinking approaches to modern audit challenges',
        },
    ]

    return (
        <section className="py-32 bg-[#071A44]">
            <div className="container mx-auto px-6">
                {/* TITLE */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-20 leading-tight tracking-tight text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Our Core Values
                </motion.h2>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className="
                                    bg-[#0a0f1c] 
                                    border border-[#1a2236] 
                                    shadow-xl 
                                    rounded-sm 
                                    transition-all 
                                    hover:-translate-y-1 
                                    hover:border-[#22304d]
                                "
                            >
                                <CardContent className="p-8 text-center space-y-6">
                                    
                                    {/* ICON WRAPPER */}
                                    <div className="
                                        inline-flex items-center justify-center 
                                        w-16 h-16 rounded-sm
                                        bg-[#0e1628]
                                        border border-[#1d2942]
                                        shadow-md shadow-blue-900/20
                                    ">
                                        <value.icon className="w-8 h-8 text-[#4d7dff]" />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-xl font-bold tracking-tight text-white">
                                        {value.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-sm leading-relaxed text-[#c6cbe1]">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
