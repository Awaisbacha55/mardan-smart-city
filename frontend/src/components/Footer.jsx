import { Building2, Globe, MessageSquare, Video, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-display font-bold text-lg leading-tight">Mardan</p>
                <p className="text-brand-400 text-xs font-semibold tracking-widest uppercase">Smart City</p>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              The official citizen portal and cloud-native infrastructure platform for the Government of Mardan. Built for scale, security, and the future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"><Globe className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"><MessageSquare className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"><Video className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Citizen Portal</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">City Analytics</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Open Data API</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Emergency Hub</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Infrastructure</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">System Status <span className="ml-2 inline-flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /></a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Kubernetes Docs</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Security Policy</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">SLA Agreements</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 mt-0.5 text-brand-400" />
                support@mardan.gov.pk
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Building2 className="w-4 h-4 mt-0.5 text-brand-400" />
                DESC Digital Innovation Center, Mardan, KPK.
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Mardan Smart City Government. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
