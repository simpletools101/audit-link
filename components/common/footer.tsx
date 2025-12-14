import FooterSocials from './FootSection'
import ProductLogo from './product-logos'

export default function Footer() {
    return (
        <footer className="bg-[#071A44] text-slate-100 ">
            <div>
                <div className="grid md:grid-cols-3 gap-12 mb-12 p-8">
                    <div>
                        <ProductLogo type="secondary" />
                        <p className="leading-relaxed text-white text-2xl">
                            Your Trusted Partner in Internal Audit Excellence.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold  text-2xl mb-6 uppercase tracking-wider">Other Links</h4>
                        <ul className="space-y-3 text-2xl font-semibold">
                            <li>
                                <a href="#about" className="hover:text-white transition-colors text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors text-white">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#process" className="hover:text-white transition-colors text-white">
                                    Our Process
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white transition-colors text-white">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3 text-2xl font-semibold text-white">
                            <li>info@auditlink.com</li>
                            <a href="tel:+256762825807">+256 762 825 807</a>
                            <div className='mt-4'>
                                <FooterSocials />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="text-center  text-black font-semibold text-2xl flex items-center justify-center  bg-white border-t border-slate-800 h-[65px]  tracking-wide">
                    2025 AUDITLINK All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
