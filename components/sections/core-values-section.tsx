'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Lightbulb, Shield, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

export default function CoreValuesSection() {
    const coreValues = [
        {
            icon: CheckCircle,
            title: 'Professional',
            description: 'Delivering excellence with industry-leading standards and expertise in every engagement',
        },
        {
            icon: Shield,
            title: 'Trustworthy',
            description: 'Building lasting relationships through integrity, transparency, and unwavering commitment',
        },
        {
            icon: TrendingUp,
            title: 'Efficient & Supportive',
            description: 'Streamlined processes and dedicated support that accelerate your business growth',
        },
        {
            icon: Lightbulb,
            title: 'Innovative',
            description: 'Tech-powered solutions and forward-thinking approaches to modern audit challenges',
        },
    ]

    return (
        <section className=" bg-white  flex items-center justify-center">
            <div className="container mt-12 mb-14 ">
             
                {/* Section Title */}
                <div className="flex items-center justify-center mb-8">
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
                        <span className='text-[#071A44]'>Our</span> <span className='text-[#00A8B5]'>Core Values</span>
                    </motion.h2>
                </div>

                {/* GRID */}
                <div className="grid mt-12 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                  bg-[#071A44]
                                    border border-[#1a2236] 
                                    rounded-sm 
                                    transition-all 
                                    hover:-translate-y-1 
                                    hover:border-[#22304d]
                                "
                            >
                                <CardContent className="p-8 text-center space-y-6">
                                    {/* ICON WRAPPER */}
                                    <div
                                        className="
                                        inline-flex items-center justify-center 
                                        w-16 h-16 rounded-sm
                                      
                                        border border-[#1d2942]
                                        shadow-md shadow-blue-900/20
                                    "
                                    >
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-xl font-bold tracking-tight text-[#00A8B5]">{value.title}</h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-sm leading-relaxed text-[#c6cbe1]">{value.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
