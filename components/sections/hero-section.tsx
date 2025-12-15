'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export interface ICarouselSlides {
    title: string
    description: string
    image: string
}

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides: ICarouselSlides[] = [
        {
            title: 'The Audit Partner Built for Today’s Risks',
            description:
                'From rising compliance pressure to evolving operational challenges, we help you stay ahead. Auditlink blends expertise and technology to provide assurance that is clear, actionable, and future-ready.',
            image: '/imgs/LANDING-PAGE-1.jpg',
        },
        {
            title: 'Independent. Insightful. Impactful.',
            description:
                'We enhance the way organizations manage risk by providing internal audit support that goes beyond compliance and delivers real value where it matters most.',
             image: '/imgs/LANDING-PAGE-2.jpg',
        },
        {
            title: 'Bringing Clarity to Complexity',
            description:
                'We help organizations see risks before they surface, strengthen their controls, and move forward with confidence.',
             image: '/imgs/LANDING-PAGE-3.jpg',
        },
    ]

    // Auto rotation
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [slides.length])

    const nextSlide = () =>
        setCurrentSlide((prev) => (prev + 1) % slides.length)

    const prevSlide = () =>
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen overflow-hidden text-white flex items-center justify-center"
        >
            {/* Background Images */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[currentSlide].image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${slides[currentSlide].image})`,
                    }}
                />
            </AnimatePresence>

            {/* Dark Backdrop */}
            <div className="absolute inset-0 bg-[#071a444b]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-4xl text-center px-6"
            >
                <motion.h1
                    key={slides[currentSlide].title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                    key={slides[currentSlide].description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-200 leading-relaxed"
                >
                    {slides[currentSlide].description}
                </motion.p>
            </motion.div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-md border border-white/20 transition z-20"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-md border border-white/20 transition z-20"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 rounded-full transition-all cursor-pointer ${
                            currentSlide === index
                                ? 'w-10 bg-white'
                                : 'w-6 bg-transparent'
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}
