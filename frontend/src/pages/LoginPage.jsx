import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const { login }     = useAuth()
  const navigate      = useNavigate()
  const location      = useLocation()
  const from          = location.state?.from?.pathname || '/dashboard'

  const [form,    setForm]    = useState({ email: '', password: '' })
  const [error,   setError]   = useState('')
  const [loading, setLoading] = useState(false)
  const [showPw,  setShowPw]  = useState(false)

  const handleChange = (e) => {
    setError('')
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await login(form)
      navigate(from, { replace: true })
    } catch (err) {
      const msg = err.response?.data?.message
        || err.response?.data?.errors?.[0]?.message
        || 'Login failed. Please try again.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* ── Logo ─────────────────────────────────────── */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-8 group">
          <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand group-hover:scale-110 transition-transform">
            <span className="text-2xl">🏙️</span>
          </div>
          <div>
            <p className="text-white font-display font-bold text-xl leading-tight">Mardan Smart City</p>
            <p className="gradient-text text-xs font-semibold tracking-widest uppercase">Citizen Portal</p>
          </div>
        </Link>

        {/* ── Card ─────────────────────────────────────── */}
        <div className="glass-card neon-border p-8">
          <div className="mb-8">
            <h1 className="text-white font-display font-bold text-2xl mb-1">Welcome back</h1>
            <p className="text-white/50 text-sm">Sign in to your citizen account</p>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-6 animate-fade-in">
              <span className="text-red-400 text-lg flex-shrink-0">⚠️</span>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="login-email" className="block text-sm font-medium text-white/60">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-base pointer-events-none">
                  ✉️
                </span>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-brand-500/5 transition disabled:opacity-50"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="login-password" className="block text-sm font-medium text-white/60">
                  Password
                </label>
                <a href="#" className="text-xs text-brand-400 hover:text-brand-300 transition">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-base pointer-events-none">
                  🔒
                </span>
                <input
                  id="login-password"
                  name="password"
                  type={showPw ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-brand-500/5 transition disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(v => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition text-sm"
                  tabIndex={-1}
                >
                  {showPw ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              id="login-submit-btn"
              className="btn-primary w-full justify-center py-3.5 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                <>Sign In →</>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-white/30 text-xs">OR</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Demo credentials */}
          <div className="p-4 rounded-xl bg-brand-500/8 border border-brand-500/20 mb-6">
            <p className="text-brand-300 text-xs font-semibold mb-2 flex items-center gap-1.5">
              <span>💡</span> Demo Credentials
            </p>
            <div className="space-y-1 text-xs text-white/50 font-mono">
              <div className="flex justify-between">
                <span>Email:</span>
                <button
                  onClick={() => setForm({ email: 'demo@mardancity.pk', password: 'demo1234' })}
                  className="text-brand-400 hover:text-brand-300 transition"
                >
                  demo@mardancity.pk
                </button>
              </div>
              <div className="flex justify-between">
                <span>Password:</span>
                <span className="text-brand-400">demo1234</span>
              </div>
            </div>
          </div>

          <p className="text-center text-white/40 text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-brand-400 hover:text-brand-300 font-medium transition">
              Register here
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <p className="text-center mt-6">
          <Link to="/" className="text-white/30 hover:text-white/60 text-sm transition flex items-center justify-center gap-1">
            ← Back to Homepage
          </Link>
        </p>
      </div>
    </div>
  )
}
