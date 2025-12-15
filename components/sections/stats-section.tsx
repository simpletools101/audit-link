"use client"

import React, { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface StatItemProps {
    value: string
    label: string
    delay: number
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => {
    const controls = useAnimation()
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [isInView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay,
                        ease: 'easeOut',
                    },
                },
            }}
            className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                    duration: 0.5,
                    delay: delay + 0.2,
                    type: 'spring',
                    stiffness: 200,
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-2"
            >
                {value}
            </motion.div>
            <div className="text-xs sm:text-sm md:text-base text-white font-medium text-center">{label}</div>
        </motion.div>
    )
}

const StatsComponent: React.FC = () => {
    const stats = [
        { value: '300M', label: 'Total Money Recovered' },
        { value: '47', label: 'Happy Clients' },
        { value: '09', label: 'Strategies' },
        { value: '15', label: 'Years Experience' },
    ]

    return (
        <div className="w-full  h-[300px]  flex items-center justify-center ">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full  bg-[#071a44] rounded-2xl sm:rounded-3xl lg:rounded-[2rem] shadow-2xl p-4 sm:p-8 lg:p-8"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x divide-white">
                    {stats.map((stat, index) => (
                        <StatItem key={index} value={stat.value} label={stat.label} delay={index * 0.15} />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default StatsComponent
