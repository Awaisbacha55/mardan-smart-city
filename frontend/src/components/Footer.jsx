import { Building2, Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 block w-max">
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-display font-bold text-lg leading-tight">Mardan</p>
                <p className="text-brand-400 text-xs font-bold tracking-widest uppercase">Smart City</p>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 pe-4">
              A citizen-focused initiative designed to improve communication between residents and public departments through digital transformation.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Services</a></li>
              <li><a href="#departments" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Departments</a></li>
              <li><a href="#success" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Success Stories</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">Nowshera Road, Mardan<br/>KPK, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span className="text-slate-400 text-sm">+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span className="text-slate-400 text-sm break-all">support@mardansmartcity.gov.pk</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center md:flex md:items-center md:justify-between">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Mardan Smart City. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center justify-center gap-4 text-sm text-slate-500">
            <span>Designed for the Citizens of Mardan</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
