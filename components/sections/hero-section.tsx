'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface ICarouselSlides {
    title: string
    description: string
}

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides: ICarouselSlides[] = [
        {
            title: 'The Audit Partner Built for Today’s Risks',
            description:
                'From rising compliance pressure to evolving operational challenges, we help you stay ahead. Auditlink blends expertise and technology to provide assurance that is clear, actionable, and future-ready.',
        },
        {
            title: 'Independent. Insightful. Impactful.',
            description:
                'We enhance the way organizations manage risk by providing internal audit support that goes beyond compliance and delivers real value where it matters most.',
        },
        {
            title: 'Bringing Clarity to Complexity',
            description:
                'We help organizations see risks before they surface, strengthen their controls, and move forward with confidence. Auditlink delivers independent audit insight that sharpens decision-making and builds trust from the inside out.',
        },
    ]

    // Auto rotation
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    // Scroll trigger
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen flex items-center justify-center bg-[#071A44] text-white px-6"
        >
            {/* Soft background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black opacity-80" />

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-4xl text-center mx-auto"
            >
                {/* Title */}
                <motion.h1
                    key={slides[currentSlide].title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl md:text-6xl font-bold text-balance leading-tight"
                >
                    {slides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                    key={slides[currentSlide].description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed"
                >
                    {slides[currentSlide].description}
                </motion.p>
            </motion.div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-3 rounded-md border border-white/10 transition"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-3 rounded-md border border-white/10 transition"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 rounded-full transition-all cursor-pointer ${
                            currentSlide === index ? 'w-10 bg-white' : 'w-6 bg-white/40'
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}
