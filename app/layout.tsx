import type React from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import HeaderItem from '@/components/common/header'
import Footer from '@/components/common/footer'
import './globals.css'

export const MontserratFont  = Montserrat({
    variable : "--morn",
    preload : true,
})

export const metadata: Metadata = {
    title: 'Auditlink - Your Trusted Partner in Internal Audit Excellence',
    description:
        'Auditlink delivers sharp, tech-powered assurance that is clear, actionable, and built for the future. Internal audit, risk management, and tax advisory services.',
    generator: 'v0.app',
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`font-sans antialiased ${MontserratFont.className}`}>
                <HeaderItem />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    )
}
