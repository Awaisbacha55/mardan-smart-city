import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// ── Spinner ───────────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <div className="min-h-screen bg-surface-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-brand-500/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-400 animate-spin" />
        </div>
        <p className="text-white/50 text-sm animate-pulse-slow">Verifying session…</p>
      </div>
    </div>
  )
}

// ── ProtectedRoute: redirects to /login if not authenticated ─────────────────
export function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()

  if (loading)           return <Spinner />
  if (!isAuthenticated)  return <Navigate to="/login" state={{ from: location }} replace />

  return children
}

// ── PublicRoute: redirects to /dashboard if already logged in ────────────────
export function PublicRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading)          return <Spinner />
  if (isAuthenticated)  return <Navigate to="/dashboard" replace />

  return children
}
