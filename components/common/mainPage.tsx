import HeroSection from '@/components/sections/hero-section'
import StatsSection from '@/components/sections/stats-section'
import AboutUsSection from '@/components/sections/aboutus-section'
import CoreValuesSection from '@/components/sections/core-values-section'
import ServiceItem from '@/components/sections/services-section'
import ProcessSection from '@/components/sections/process-section'
import ContactsSection from '@/components/sections/contacts-section'
import HeroBanner from '../sections/quote-section'
import StatsComponent from '@/components/sections/stats-section'
import AuditHero from '@/components/sections/aboutus-section'
import Margin from './margin'

export default function AuditlinkWebsite() {
    return (
        <div className="min-h-screen space-y-14 bg-background">
            {/* Hero Carousel */}
            <HeroSection />

            {/* About Us Section */}
            <Margin>
                <AuditHero />
            </Margin>

            {/* Stats Section */}
            <Margin>
                <StatsComponent />
            </Margin>
            {/* Core Values Section */}
            <Margin>
                <CoreValuesSection />
            </Margin>

            {/* Services Section with Carousel */}
            <Margin>
                <ServiceItem />
            </Margin>

            <HeroBanner />
            {/* Process Section */}
            <Margin>
                <ProcessSection />
            </Margin>

            {/* Contact Section */}
            <Margin>
                <ContactsSection />
            </Margin>
        </div>
    )
}
