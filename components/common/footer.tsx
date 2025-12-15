import FooterSocials from './FootSection'
import ProductLogo from './product-logos'

export default function Footer() {
    return (
        <footer className="bg-[#071A44] text-slate-100">
            {/* Main container */}
            <div className="px-6 sm:px-10 lg:px-14 py-12">
                <div
                    className="
                        flex flex-col
                        gap-12
                        lg:flex-row
                        lg:justify-between
                        lg:items-start
                    "
                >
                    {/* Brand */}
                    <div className="flex flex-col items-start max-w-md">
                        <ProductLogo type="secondary" />
                        <p className="leading-relaxed text-white text-lg sm:text-xl lg:text-2xl mt-4">
                            Your Trusted Partner in
                            <br />
                            Internal Audit Excellence.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col text-left">
                        <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 uppercase tracking-wider">
                            Other Links
                        </h4>
                        <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg lg:text-2xl font-semibold">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#process">Our Process</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col text-left">
                        <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 uppercase tracking-wider">
                            Contact
                        </h4>
                        <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg lg:text-2xl font-semibold">
                            <li>info@auditlink.com</li>
                            <li>
                                <a href="tel:+256762825807">+256 762 825 807</a>
                            </li>
                            <li className="pt-2">
                                <FooterSocials />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-center bg-white border-t border-slate-300 min-h-[65px] px-4 text-center">
                <p className="text-black font-semibold text-sm sm:text-base lg:text-lg tracking-wide">
                    © 2025 AUDITLINK — All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
