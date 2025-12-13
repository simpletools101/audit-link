import ProductLogo from "./product-logos";

export default function Footer() {
    return (
        <footer className="bg-[#071A44] text-slate-100 py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <ProductLogo type="secondary" />
                        <p className="text-sm leading-relaxed text-slate-300">
                            Your Trusted Partner in Internal Audit Excellence.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-base mb-6 uppercase tracking-wider">Other Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#about" className="hover:text-white transition-colors text-slate-300">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors text-slate-300">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#process" className="hover:text-white transition-colors text-slate-300">
                                    Our Process
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white transition-colors text-slate-300">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-base mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li>info@auditlink.com</li>
                            <a href="tel:+256762825807">+256 762 825 807</a>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-sm text-slate-400 border-t border-slate-800 pt-8 uppercase tracking-wide">
                    2025 AUDITLINK All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
