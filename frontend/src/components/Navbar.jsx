import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Building2, Menu, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { label: 'Home',            href: '#home' },
  { label: 'About Us',        href: '#about' },
  { label: 'Services',        href: '#services' },
  { label: 'Departments',     href: '#departments' },
  { label: 'Success Stories', href: '#success' },
  { label: 'Contact Us',      href: '#contact' },
]

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      logout()
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sections = navLinks.map(link => link.href.substring(1))
      let current = '#home'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = `#${section}`
            break
          }
        }
      }
      setActiveLink(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-slate-900 font-display font-bold text-lg leading-tight">Mardan</p>
              <p className="text-brand-600 text-xs font-bold tracking-widest uppercase">Smart City</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeLink === link.href
                    ? 'bg-brand-50 text-brand-600'
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Auth / CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">
                  Dashboard
                </Link>
                <div className="w-px h-6 bg-slate-200" />
                <button onClick={handleLogout} className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors">
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn-outline px-5 py-2.5 text-sm">
                  Track Complaint
                </Link>
                <Link to="/register" className="btn-primary px-5 py-2.5 text-sm">
                  Submit Complaint
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium ${
                activeLink === link.href
                  ? 'bg-brand-50 text-brand-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <div className="h-px bg-slate-100 my-2" />
          
          {isAuthenticated ? (
            <div className="flex flex-col gap-2">
              <Link to="/dashboard" className="block px-4 py-3 text-center text-slate-700 font-semibold bg-slate-50 rounded-xl">
                Go to Dashboard
              </Link>
              <button onClick={handleLogout} className="block px-4 py-3 text-center text-rose-600 font-semibold bg-rose-50 rounded-xl">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/login" className="btn-outline justify-center w-full">Track Complaint</Link>
              <Link to="/register" className="btn-primary justify-center w-full">Submit Complaint</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
