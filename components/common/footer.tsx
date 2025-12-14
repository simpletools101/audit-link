import FooterSocials from './FootSection'
import ProductLogo from './product-logos'

export default function Footer() {
    return (
        <footer className="bg-[#071A44] text-slate-100">
            {/* Centering container */}
            <div className=" pt-12 pb-12 ">
                <div
                    className="
                       flex
                       
                       items-center
                    "
                >
                    {/* Brand */}
                    <div className="flex flex-1 flex-col items-center text-center">
                        <ProductLogo type="secondary" />
                        <p className="leading-relaxed text-white text-2xl mt-4 max-w-sm">
                            Your Trusted Partner in
                            <br />
                            Internal Audit Excellence.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-1  flex-col items-center text-center">
                        <h4 className="font-bold text-2xl mb-6 uppercase tracking-wider">
                            Other Links
                        </h4>
                        <ul className="space-y-3 text-2xl font-semibold">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#process">Our Process</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-1  flex-col items-center text-center">
                        <h4 className="font-bold text-2xl mb-6 uppercase tracking-wider">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-2xl font-semibold">
                            <li>info@auditlink.com</li>
                            <li>
                                <a href="tel:+256762825807">+256 762 825 807</a>
                            </li>
                            <li className="mt-4">
                                <FooterSocials />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-center bg-white border-t border-slate-800 h-[65px] text-black font-semibold text-2xl tracking-wide text-center px-4">
                © 2025 AUDITLINK — All Rights Reserved.
            </div>
        </footer>
    )
}
