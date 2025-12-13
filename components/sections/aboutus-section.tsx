'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutUsSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.25 })

    return (
        <section id="about" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div ref={ref} className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight tracking-tight">
                            About Us
                        </h2>

                        <div className="space-y-6">
                            <h2 className="font-bold md:text-lg ">
                                Your Trusted Partner in Internal Audit Excellence.
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Auditlink Consulting Ltd was created by internal auditors who saw a clear need:
                                organizations were facing rising risks, growing compliance demands, and limited audit
                                capacity. Many struggled to maintain an in-house function that could keep pace. Our
                                founders stepped in to bridge that gap with an independent, highcalibre audit partner
                                built on integrity, objectivity, and real technical depth.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl border border-border"
                    >
                        <img
                            src="/professional-team-meeting.png"
                            alt="Professional team meeting at Auditlink"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
