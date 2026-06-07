const footerLinks = {
  'Portal': [
    { label: 'Submit Complaint',   href: '#complaints' },
    { label: 'Track Complaint',    href: '#complaints' },
    { label: 'Services Directory', href: '#services'   },
    { label: 'Emergency Numbers',  href: '#emergency'  },
    { label: 'City Statistics',    href: '#statistics' },
  ],
  'Departments': [
    { label: 'Roads & Works',      href: '#' },
    { label: 'Water & Sanitation', href: '#' },
    { label: 'PESCO (Power)',      href: '#' },
    { label: 'Police Department',  href: '#' },
    { label: 'Municipal Corp.',    href: '#' },
  ],
  'About': [
    { label: 'About Mardan',       href: '#about' },
    { label: 'KP Government',      href: '#' },
    { label: 'Privacy Policy',     href: '#' },
    { label: 'Terms of Service',   href: '#' },
    { label: 'Contact Us',         href: '#' },
  ],
}

const socialLinks = [
  { icon: '𝕏',   label: 'Twitter',  href: '#' },
  { icon: 'f',   label: 'Facebook', href: '#' },
  { icon: 'in',  label: 'LinkedIn', href: '#' },
  { icon: '▶',   label: 'YouTube',  href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-brand-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Newsletter Banner ─────────────────────────── */}
        <div className="py-10 border-b border-white/8">
          <div className="glass-card neon-border p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Stay Informed</h3>
              <p className="text-white/50 text-sm">Get updates on city services, resolved complaints, and new initiatives.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 lg:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500/50 transition"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── Main Footer ───────────────────────────────── */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand">
                <span className="text-2xl">🏙️</span>
              </div>
              <div>
                <p className="text-white font-display font-bold text-xl">Mardan Smart City</p>
                <p className="gradient-text text-xs font-medium tracking-wider">Citizen Complaint Portal</p>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering Mardan's 500,000+ citizens with a transparent, accountable, and efficient digital governance platform.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-500/20 hover:border-brand-500/40 transition text-sm font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              {[
                { icon: '📍', text: 'Municipal Corporation, Mardan, KP, Pakistan' },
                { icon: '📞', text: '+92 (937) 840000' },
                { icon: '✉️', text: 'support@mardansmartcity.gov.pk' },
              ].map(c => (
                <div key={c.text} className="flex items-start gap-2 text-white/40 text-sm">
                  <span className="mt-0.5 flex-shrink-0">{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">{group}</p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 text-sm hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition text-brand-500">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ────────────────────────────────── */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Mardan Smart City. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/30 text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow" />
              All systems operational
            </div>
            <span className="text-white/15">|</span>
            <p className="text-white/30 text-sm">
              Powered by <span className="gradient-text font-semibold">KP IT Board</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
