'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StatsSection() {
    const stats = [
        { value: '15', label: 'Years of Combined Team Experience' },
        { value: '300M', label: 'Total Money Recovered' },
        { value: '47', label: 'Happy Clients' },
        { value: '09', label: 'Strategies' },
    ]

    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section className="py-24 bg-white border-y border-border">
            <div className="container mx-auto px-6">
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.15 }}
                            className="text-center"
                        >
                            <div className="text-5xl text-[#071A44] md:text-6xl font-bold  mb-4 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
