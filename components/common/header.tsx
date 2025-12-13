'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductLogo from './product-logos'

export default function HeaderItem() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { href: '#about', label: 'About Us' },
        { href: '#services', label: 'Our Services' },
        { href: '#process', label: 'Our Process' },
        { href: '#contact', label: 'Contact Us' },
    ]

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border/50"
        >
            <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl sm:text-2xl font-bold text-primary tracking-wider"
                    >
                        <ProductLogo type="primary" />
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6 lg:gap-10">
                        {menuItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-sm font-semibold uppercase tracking-wide hover:text-primary transition-colors relative group"
                            >
                                {item.label}
                                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMenu}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-0.5 bg-foreground"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-0.5 bg-foreground"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-0.5 bg-foreground"
                        />
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden overflow-hidden"
                        >
                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={{
                                    open: {
                                        transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                                    },
                                    closed: {
                                        transition: { staggerChildren: 0.05, staggerDirection: -1 },
                                    },
                                }}
                                className="flex flex-col gap-4 pt-6 pb-4"
                            >
                                {menuItems.map((item) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        variants={{
                                            open: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    y: { stiffness: 1000, velocity: -100 },
                                                },
                                            },
                                            closed: {
                                                y: 20,
                                                opacity: 0,
                                                transition: {
                                                    y: { stiffness: 1000 },
                                                },
                                            },
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsOpen(false)}
                                        className="text-base font-semibold uppercase tracking-wide hover:text-primary transition-colors py-2 border-b border-border/30"
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}
