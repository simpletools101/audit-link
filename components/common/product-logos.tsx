import Image from 'next/image'
import PrimaryLogo from '@/assets/PRIMARY LOGO.png'
import SecondaryLogo from '@/assets/SECONDARY LOGO.png'

interface IProductLogo {
    type: 'primary' | 'secondary'
    className?: string
}

export default function ProductLogo({ type, className }: IProductLogo) {
    const logo = type === 'primary' ? PrimaryLogo : SecondaryLogo

    return (
        <a href="/" className="inline-block">
            <Image
                src={logo}
                alt="Product Logo"
                priority
                className={`
          w-[140px]
          sm:w-[160px]
          md:w-[180px]
          h-auto
          object-contain
          ${className ?? ''}
        `}
            />
        </a>
    )
}
