'use client'

import { Linkedin, Instagram } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'

interface SocialLink {
    name: string
    href: string
    icon: React.ElementType
    iconColor: string
    bgColor: string
}

const SOCIALS: SocialLink[] = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/auditlink-consultancy-ltd/',
        icon: Linkedin,
        iconColor: 'text-white',
        bgColor: '#0A66C2',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com',
        icon: Instagram,
        iconColor: 'text-white',
        bgColor: '#E4405F',
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com',
        icon: FaTiktok,
        iconColor: 'text-white',
        bgColor: '#000000',
    },
]




export default function FooterSocials() {
    return (
        <div className="flex  gap-4">
            {SOCIALS.map((social) => {
                const Icon = social.icon

                return (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        style={{ backgroundColor: social.bgColor }}
                        className="
              p-3
              rounded-full
              transition
              hover:scale-110
              hover:opacity-90
            "
                    >
                        <Icon className={`w-6 h-6 ${social.iconColor}`} />
                    </a>
                )
            })}
        </div>
    )
}
