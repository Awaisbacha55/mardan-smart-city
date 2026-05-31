import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const passwordStrength = (pw) => {
  if (!pw) return { score: 0, label: '', color: '' }
  let score = 0
  if (pw.length >= 8)           score++
  if (/[A-Z]/.test(pw))         score++
  if (/[0-9]/.test(pw))         score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  const map = [
    { label: 'Too short', color: 'bg-red-500' },
    { label: 'Weak',      color: 'bg-red-400' },
    { label: 'Fair',      color: 'bg-yellow-400' },
    { label: 'Good',      color: 'bg-brand-400' },
    { label: 'Strong',    color: 'bg-emerald-400' },
  ]
  return { score, ...map[score] }
}

export default function RegisterPage() {
  const { register } = useAuth()
  const navigate     = useNavigate()

  const [form,    setForm]    = useState({ name: '', email: '', phone: '', cnic: '', password: '', confirm: '' })
  const [error,   setError]   = useState('')
  const [loading, setLoading] = useState(false)
  const [showPw,  setShowPw]  = useState(false)
  const [agreed,  setAgreed]  = useState(false)

  const pwStrength = passwordStrength(form.password)

  const handleChange = (e) => {
    setError('')
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    if (!form.name.trim())            return 'Full name is required.'
    if (!form.email.includes('@'))    return 'Please enter a valid email address.'
    if (form.cnic.length < 13)        return 'Please enter a valid CNIC (13 digits).'
    if (!form.phone.trim())           return 'Phone number is required.'
    if (form.password.length < 6)     return 'Password must be at least 6 characters.'
    if (form.password !== form.confirm) return 'Passwords do not match.'
    if (!agreed)                      return 'You must agree to the terms of service.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationError = validate()
    if (validationError) { setError(validationError); return }

    setLoading(true)
    setError('')
    try {
      await register({ name: form.name, email: form.email, phone: form.phone, cnic: form.cnic, password: form.password })
      // Auto-redirected by PublicRoute on auth success
    } catch (err) {
      const msg = err.response?.data?.message
        || err.response?.data?.errors?.[0]?.message
        || 'Registration failed. Please try again.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg py-8">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-8 group">
          <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand group-hover:scale-110 transition-transform">
            <span className="text-2xl">🏙️</span>
          </div>
          <div>
            <p className="text-white font-display font-bold text-xl leading-tight">Mardan Smart City</p>
            <p className="gradient-text text-xs font-semibold tracking-widest uppercase">Citizen Portal</p>
          </div>
        </Link>

        {/* Card */}
        <div className="glass-card neon-border p-8">
          <div className="mb-8">
            <h1 className="text-white font-display font-bold text-2xl mb-1">Create Account</h1>
            <p className="text-white/50 text-sm">Join Mardan&apos;s smart city platform</p>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-6 animate-fade-in">
              <span className="text-red-400 text-lg flex-shrink-0">⚠️</span>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Name + Phone (side by side on larger screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="reg-name" className="block text-sm font-medium text-white/60">Full Name *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">👤</span>
                  <input
                    id="reg-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ahmad Khan"
                    value={form.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-brand-500/5 transition disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="reg-phone" className="block text-sm font-medium text-white/60">Phone Number *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">📞</span>
                  <input
                    id="reg-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+92 300 0000000"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-brand-500/5 transition disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* CNIC + Email (side by side on larger screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="reg-cnic" className="block text-sm font-medium text-white/60">CNIC *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">🪪</span>
                  <input
                    id="reg-cnic"
                    name="cnic"
                    type="text"
                    required
                    placeholder="12345-1234567-1"
                    value={form.cnic}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-brand-500/5 transition disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="reg-email" className="block text-sm font-medium text-white/60">Email Address *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">✉️</span>
                  <input
                    id="reg-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-brand-500/5 transition disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label htmlFor="reg-password" className="block text-sm font-medium text-white/60">Password *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">🔒</span>
                <input
                  id="reg-password"
                  name="password"
                  type={showPw ? 'text' : 'password'}
                  required
                  autoComplete="new-password"
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-brand-500/5 transition disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(v => !v)}
                  tabIndex={-1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition text-sm"
                >
                  {showPw ? '🙈' : '👁️'}
                </button>
              </div>

              {/* Strength meter */}
              {form.password && (
                <div className="space-y-1 pt-1">
                  <div className="flex gap-1">
                    {[1,2,3,4].map(i => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          i <= pwStrength.score ? pwStrength.color : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs ${pwStrength.score <= 1 ? 'text-red-400' : pwStrength.score <= 2 ? 'text-yellow-400' : pwStrength.score === 3 ? 'text-brand-400' : 'text-emerald-400'}`}>
                    {pwStrength.label}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label htmlFor="reg-confirm" className="block text-sm font-medium text-white/60">Confirm Password *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">🔑</span>
                <input
                  id="reg-confirm"
                  name="confirm"
                  type={showPw ? 'text' : 'password'}
                  required
                  autoComplete="new-password"
                  placeholder="Re-enter password"
                  value={form.confirm}
                  onChange={handleChange}
                  disabled={loading}
                  className={`w-full bg-white/5 border rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none transition disabled:opacity-50 ${
                    form.confirm && form.confirm !== form.password
                      ? 'border-red-500/50 focus:border-red-500/70'
                      : form.confirm && form.confirm === form.password
                      ? 'border-emerald-500/50 focus:border-emerald-500/70'
                      : 'border-white/10 focus:border-brand-500/60 focus:bg-brand-500/5'
                  }`}
                />
                {form.confirm && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm">
                    {form.confirm === form.password ? '✅' : '❌'}
                  </span>
                )}
              </div>
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative mt-0.5 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    agreed ? 'bg-brand-500 border-brand-500' : 'bg-white/5 border-white/20 group-hover:border-brand-500/50'
                  }`}
                >
                  {agreed && <span className="text-white text-xs">✓</span>}
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                I agree to the{' '}
                <a href="#" className="text-brand-400 hover:text-brand-300 transition">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-brand-400 hover:text-brand-300 transition">Privacy Policy</a>
              </p>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              id="register-submit-btn"
              className="btn-primary w-full justify-center py-3.5 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating account…
                </>
              ) : (
                <>Create Account →</>
              )}
            </button>
          </form>

          <p className="text-center text-white/40 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-400 hover:text-brand-300 font-medium transition">
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-center mt-6">
          <Link to="/" className="text-white/30 hover:text-white/60 text-sm transition">
            ← Back to Homepage
          </Link>
        </p>
      </div>
    </div>
  )
}
