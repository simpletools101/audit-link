import HeroSection from '@/components/sections/hero-section'
import StatsSection from '@/components/sections/stats-section'
import AboutUsSection from '@/components/sections/aboutus-section'
import CoreValuesSection from '@/components/sections/core-values-section'
import ServicesSection from '@/components/sections/services-section'
import ProcessSection from '@/components/sections/process-section'
import ContactsSection from '@/components/sections/contacts-section'

export default function AuditlinkWebsite() {
   
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Carousel */}
            <HeroSection />

            {/* Stats Section */}

            <StatsSection />

            {/* About Us Section */}
            <AboutUsSection />

            {/* Core Values Section */}
            <CoreValuesSection />

            {/* Services Section with Carousel */}
            <ServicesSection />

            {/* Process Section */}
            <ProcessSection />

            {/* Contact Section */}
            <ContactsSection />
        </div>
    )
}
