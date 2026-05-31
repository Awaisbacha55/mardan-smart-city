import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { authService } from '../services/authService'

// ── Context ──────────────────────────────────────────────────────────────────
const AuthContext = createContext(null)

// ── Constants ────────────────────────────────────────────────────────────────
const TOKEN_KEY = 'msc_token'
const USER_KEY  = 'msc_user'

// ── Provider ─────────────────────────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(() => {
    try { return JSON.parse(localStorage.getItem(USER_KEY)) } catch { return null }
  })
  const [token,   setToken]   = useState(() => localStorage.getItem(TOKEN_KEY))
  const [loading, setLoading] = useState(true)   // initial session check
  const [error,   setError]   = useState(null)

  // ── Persist helpers ───────────────────────────────────────────────────────
  const persist = (token, user) => {
    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(USER_KEY,  JSON.stringify(user))
    setToken(token)
    setUser(user)
  }

  const clear = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    setToken(null)
    setUser(null)
  }

  // ── Verify token on mount ─────────────────────────────────────────────────
  useEffect(() => {
    const verify = async () => {
      if (!token) { setLoading(false); return }
      try {
        const { data } = await authService.getMe()
        setUser(data.user)
        localStorage.setItem(USER_KEY, JSON.stringify(data.user))
      } catch {
        clear()
      } finally {
        setLoading(false)
      }
    }
    verify()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Auth actions ──────────────────────────────────────────────────────────
  const register = useCallback(async (formData) => {
    setError(null)
    const { data } = await authService.register(formData)
    persist(data.token, data.user)
    return data
  }, [])

  const login = useCallback(async (credentials) => {
    setError(null)
    const { data } = await authService.login(credentials)
    persist(data.token, data.user)
    return data
  }, [])

  const logout = useCallback(async () => {
    try { await authService.logout() } catch { /* ignore */ }
    clear()
  }, [])

  const isAuthenticated = !!token && !!user

  return (
    <AuthContext.Provider value={{ user, token, loading, error, setError, isAuthenticated, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
