'use client'

import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { motion } from 'framer-motion'

export default function ProcessSection() {
    const [selectedProcess, setSelectedProcess] = useState<number | null>(null)

    const processSteps = [
        {
            number: '01',
            title: 'Discover & Initial Consultation',
            outcome : 'Outcome: Clear understanding of your needs and expectations.',
            description: `
                We start with a focused conversation to understand your organization, industry, current audit environment, and key risk areas.
This step allows us to listen first and align our support with what truly matters to you. 
.
                `,
        },
        {
            number: '02',
            title: 'Tailored Proposal & Engagment Setup',
            outcome: 'Outcome: Defined scope, transparency, and accountability from the start.',
            description:
                'Based on our discussions, we develop a customized proposal outlining scope, timelines, deliverables, and fees. Once approved, we formalize the engagement through a Service Level Agreement and assign a dedicated Auditlink relationship lead.',
        },
        {
            number: '03',
            title: 'Kick-Off Alignment Meeting',
            outcome : 'Outcome: Everyone aligned, informed, and ready to move forward.',
            description: 'We bring all stakeholders together to formally launch the engagement. Roles, communication channels, timelines, and expectations are agreed on to ensure a smooth working relationship.',
        },
        {
            number: '04',
            title: 'Secure Information & Access Setup',
            outcome : 'Outcome: A strong foundation built on confidentiality and trust.',
            description:
                'Relevant documents, system access, and background information are shared through secure channels. This may include policies, prior audit reports, process documentation, and risk registers.',
        },
        {
            number: '05',
            title: 'Risk-Based Audit Planning',
            outcome : 'Outcome: A focused audit approach that targets what matters most.',
            description: 'We assess your environment and develop a customized audit work plan aligned to your risks, operations, and regulatory context. The plan is reviewed and approved before execution begins.',
        },
        {
            number: '06',
            title: 'Audit Execution & Reporting',
            outcome : 'Outcome: Actionable insights that strengthen controls and decision-making.',
            description:
                'Our team carries out the agreed work and delivers a clear, practical audit report. Findings are discussed in a debrief session to ensure clarity, ownership, and understanding.',
        },
        {
            number: '07',
            title: 'Ongoing Advisory & Follow-Up',
            outcome : 'Outcome: Sustained improvement, not just one-off assurance.',
            description:
                'Our relationship does not end with the report. We provide continuous support through follow-ups, advisory input, and progress reviews to support implementation.',
        },
        {
            number: '08',
            title: 'Feedback & Continous Improvement',
            outcome : 'Outcome: A partnership that grows with your organization.',
            description:
                'We actively seek your feedback and use it to refine our approach. Continuous improvement ensures our services remain relevant, effective, and aligned with your evolving needs.',
        },
    ]

    return (
        <>
            <section id="process" className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    {/* TITLE */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight"
                    >
                        Our Process
                    </motion.h2>

                    {/* GRID WITH STAGGERED ANIMATION */}
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ staggerChildren: 0.12 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.12 } },
                        }}
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <Card
                                    className="border-2 border-border shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 bg-white rounded-sm group"
                                    onClick={() => setSelectedProcess(index)}
                                >
                                    <CardContent className="p-8 space-y-4">
                                        <div className="text-5xl font-bold text-primary/15 group-hover:text-primary/25 transition-colors tracking-tight">
                                            {step.number}
                                        </div>
                                        <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                                            Click to learn more →
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* PROCESS MODAL */}
            <Dialog open={selectedProcess !== null} onOpenChange={() => setSelectedProcess(null)}>
                <DialogContent className="max-w-3xl rounded-sm">
                    {selectedProcess !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                        >
                            <DialogHeader>
                                <DialogTitle className="text-3xl flex items-baseline gap-4 mb-4">
                                    <span className="text-primary font-bold tracking-tight">
                                        {processSteps[selectedProcess].number}
                                    </span>

                                    <span className="font-bold tracking-tight">
                                        {processSteps[selectedProcess].title}
                                    </span>
                                </DialogTitle>

                                <DialogDescription className="text-base leading-relaxed pt-2 flex flex-col text-foreground/80">
                                    <span>{processSteps[selectedProcess].description}</span>
                                    <span className='font-bold'>{processSteps[selectedProcess].outcome}</span>
                                </DialogDescription>
                            </DialogHeader>
                        </motion.div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}
