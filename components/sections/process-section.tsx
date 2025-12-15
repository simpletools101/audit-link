'use client'

import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { motion } from 'framer-motion'

export default function ProcessSection() {
    const [selectedProcess, setSelectedProcess] = useState<number | null>(null)

    const processSteps = [
        {
            number: '01',
            title: 'Discover & Initial Consultation',
            outcome: ' Clear understanding of your needs and expectations.',
            description:
                'We start with a focused conversation to understand your organization, industry, current audit environment, and key risk areas.',
        },
        {
            number: '02',
            title: 'Tailored Proposal & Engagement Setup',
            outcome: ' Defined scope, transparency, and accountability from the start.',
            description: 'We develop a customized proposal outlining scope, timelines, deliverables, and fees.',
        },
        {
            number: '03',
            title: 'Kick-Off Alignment Meeting',
            outcome: ' Everyone aligned, informed, and ready to move forward.',
            description: 'We bring all stakeholders together to formally launch the engagement.',
        },
        {
            number: '04',
            title: 'Secure Information & Access Setup',
            outcome: ' A strong foundation built on confidentiality and trust.',
            description: 'Relevant documents and system access are shared through secure channels.',
        },
        {
            number: '05',
            title: 'Risk-Based Audit Planning',
            outcome: ' A focused audit approach that targets what matters most.',
            description: 'We assess your environment and develop a customized audit work plan.',
        },
        {
            number: '06',
            title: 'Audit Execution & Reporting',
            outcome: ' Actionable insights that strengthen decision-making.',
            description: 'Our team carries out the agreed work and delivers a clear audit report.',
        },
        {
            number: '07',
            title: 'Ongoing Advisory & Follow-Up',
            outcome: ' Sustained improvement, not just one-off assurance.',
            description: 'We provide continuous support through follow-ups and advisory input.',
        },
        {
            number: '08',
            title: 'Feedback & Continuous Improvement',
            outcome: ' A partnership that grows with your organization.',
            description: 'We actively seek feedback and refine our approach continuously.',
        },
    ]

    const total = processSteps.length
    const fullRows = Math.floor(total / 3)
    const remaining = total % 3

    return (
        <>
            <section id="process" className="mt-6 flex items-center flex-col justify-center mt-14 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* TITLE */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight"
                    >
                        <span className="text-[#071A44]">
                            Our <span className="text-[#00A8B5]">Process</span>
                        </span>
                    </motion.h2>

                    {/* GRID */}
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    >
                        {processSteps.map((step, index) => {
                            // Handle last row with less than 3 items
                            const isLastRow = index >= fullRows * 3
                            if (isLastRow && remaining > 0 && index === fullRows * 3) {
                                // Wrap last row cards in a flex container
                                return (
                                    <div
                                        key="last-row"
                                        className="lg:col-span-3 flex flex-col lg:flex-row justify-center gap-8 w-full"
                                    >
                                        {processSteps
                                            .slice(index, total)
                                            .map((step2, i2) => (
                                                <motion.div
                                                    key={i2}
                                                    variants={{
                                                        hidden: { opacity: 0, y: 24 },
                                                        visible: { opacity: 1, y: 0 },
                                                    }}
                                                    transition={{ duration: 0.45 }}
                                                    className="w-full lg:w-[320px]"
                                                >
                                                    <Card
                                                        onClick={() =>
                                                            setSelectedProcess(index + i2)
                                                        }
                                                        className="h-full flex flex-col border-2 shadow-md hover:shadow-xl transition-all bg-white cursor-pointer rounded-sm hover:-translate-y-1"
                                                    >
                                                        <CardContent className="p-8 flex flex-col justify-between h-full">
                                                            <div className="space-y-4">
                                                                <div className="text-5xl font-bold text-primary/15">
                                                                    {step2.number}
                                                                </div>
                                                                <h3 className="text-xl font-bold tracking-tight text-[#071A44]">
                                                                    {step2.title}
                                                                </h3>
                                                            </div>
                                                            <div className="pt-6 text-sm font-medium text-primary/70">
                                                                View details →
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            ))}
                                    </div>
                                )
                            }

                            // Skip already rendered cards in last row
                            if (isLastRow && remaining > 0 && index > fullRows * 3 - 1)
                                return null

                            // Normal card rendering
                            return (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 24 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.45 }}
                                >
                                    <Card
                                        onClick={() => setSelectedProcess(index)}
                                        className="h-full flex flex-col border-2 shadow-md hover:shadow-xl transition-all bg-white cursor-pointer rounded-sm hover:-translate-y-1"
                                    >
                                        <CardContent className="p-8 flex flex-col justify-between h-full">
                                            <div className="space-y-4">
                                                <div className="text-5xl font-bold text-primary/15">
                                                    {step.number}
                                                </div>
                                                <h3 className="text-xl font-bold tracking-tight text-[#071A44]">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <div className="pt-6 text-sm font-medium text-primary/70">
                                                View details →
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* MODAL */}
            <Dialog open={selectedProcess !== null} onOpenChange={() => setSelectedProcess(null)}>
                <DialogContent className="max-w-3xl rounded-sm">
                    {selectedProcess !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <DialogHeader>
                                <DialogTitle className="text-3xl flex gap-4 mb-4">
                                    <span className="text-primary font-bold">
                                        {processSteps[selectedProcess].number}
                                    </span>
                                    <span className="font-bold text-[#071A44]">
                                        {processSteps[selectedProcess].title}
                                    </span>
                                </DialogTitle>

                                <DialogDescription className="text-base leading-relaxed space-y-4 text-foreground/80">
                                    <p>{processSteps[selectedProcess].description}</p>
                                    <p className="text-foreground">
                                        <span className="font-bold text-[#071A44]">Outcome:</span>
                                        {processSteps[selectedProcess].outcome}
                                    </p>
                                </DialogDescription>
                            </DialogHeader>
                        </motion.div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}
