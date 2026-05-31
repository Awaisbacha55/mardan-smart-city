import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { complaintService } from '../services/complaintService'

// ── Constants & Helpers ──────────────────────────────────────────────────────
const CATEGORIES = [
  'Roads & Infrastructure', 'Water Supply', 'Electricity',
  'Sanitation & Waste', 'Parks & Recreation', 'Public Safety',
  'Noise Pollution', 'Other'
]

const navItems = [
  { key: 'overview',    icon: '🏠', label: 'Overview' },
  { key: 'complaints',  icon: '📋', label: 'My Complaints' },
  { key: 'submit',      icon: '✏️',  label: 'New Complaint' },
  { key: 'track',       icon: '🔍', label: 'Track Status' },
  { key: 'profile',     icon: '👤', label: 'My Profile' },
]

const StatusBadge = ({ status }) => {
  const styles = {
    pending:     'bg-yellow-500/15  border-yellow-500/30  text-yellow-400',
    in_progress: 'bg-brand-500/15   border-brand-500/30   text-brand-400',
    resolved:    'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    rejected:    'bg-red-500/15     border-red-500/30     text-red-400',
  }
  const labels = { pending: '⏳ Pending', in_progress: '🔄 In Progress', resolved: '✅ Resolved', rejected: '❌ Rejected' }
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status] || ''}`}>
      {labels[status] || status}
    </span>
  )
}

const PriorityDot = ({ priority }) => {
  const colors = { low: 'bg-green-400', medium: 'bg-yellow-400', high: 'bg-orange-400', urgent: 'bg-red-400' }
  return <span className={`inline-block w-2 h-2 rounded-full ${colors[priority] || 'bg-white/20'}`} />
}

const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-PK', {
  year: 'numeric', month: 'short', day: 'numeric'
})

// ── Overview Tab ─────────────────────────────────────────────────────────────
function OverviewTab({ user, setActiveTab }) {
  const [stats, setStats] = useState({ total: 0, pending: 0, inProgress: 0, resolved: 0 })
  const [recent, setRecent] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      complaintService.getStats(),
      complaintService.getUserComplaints({ limit: 3 })
    ]).then(([statsRes, compRes]) => {
      setStats(statsRes.data.data)
      setRecent(compRes.data.data)
    }).finally(() => setLoading(false))
  }, [])

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  if (loading) return <div className="text-center py-20 animate-pulse text-white/50">Loading dashboard data...</div>

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome */}
      <div className="glass-card neon-border p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-emerald-600/5 pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white/50 text-sm mb-1">{greeting} 👋</p>
            <h2 className="text-white font-display font-bold text-2xl">{user?.name}</h2>
            <p className="text-white/40 text-sm mt-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow" />
              <span>Citizen Account</span>
            </p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-brand text-3xl">
            {user?.name?.charAt(0)?.toUpperCase() || '👤'}
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Filed', value: stats.total,      icon: '📋', color: 'from-brand-500 to-brand-700' },
          { label: 'Resolved',    value: stats.resolved,   icon: '✅', color: 'from-emerald-500 to-teal-600' },
          { label: 'In Progress', value: stats.inProgress, icon: '🔄', color: 'from-blue-500 to-blue-700' },
          { label: 'Pending',     value: stats.pending,    icon: '⏳', color: 'from-yellow-500 to-orange-500' },
        ].map(s => (
          <div key={s.label} className="glass-card p-5 hover:shadow-card-hover transition-all duration-300">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 text-base`}>
              {s.icon}
            </div>
            <p className="text-white font-bold text-2xl">{s.value}</p>
            <p className="text-white/40 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Recent complaints */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">Recent Complaints</h3>
          <button onClick={() => setActiveTab('complaints')} className="text-brand-400 text-sm hover:text-brand-300 transition">View all →</button>
        </div>
        <div className="space-y-3">
          {recent.length > 0 ? recent.map(c => (
            <div key={c.id} className="glass-card p-4 flex items-center justify-between gap-4 hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center gap-3 min-w-0">
                <PriorityDot priority={c.priority} />
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium truncate">{c.title}</p>
                  <p className="text-white/40 text-xs">{c.trackingId} · {formatDate(c.createdAt)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="hidden sm:block text-white/30 text-xs">{c.category}</span>
                <StatusBadge status={c.status} />
              </div>
            </div>
          )) : (
            <div className="glass-card p-6 text-center text-white/40 text-sm">No recent complaints.</div>
          )}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: '📝', title: 'File New Complaint', desc: 'Report a civic issue', action: () => setActiveTab('submit'), color: 'from-brand-500 to-brand-700' },
          { icon: '🔍', title: 'Track Existing',     desc: 'Check complaint status', action: () => setActiveTab('track'),  color: 'from-purple-500 to-purple-700' },
        ].map(a => (
          <button key={a.title} onClick={a.action} className="glass-card p-5 flex items-start gap-4 hover:shadow-card-hover transition-all duration-300 group cursor-pointer text-left w-full">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0`}>
              {a.icon}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{a.title}</p>
              <p className="text-white/40 text-xs mt-0.5">{a.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Complaints Tab ────────────────────────────────────────────────────────────
function ComplaintsTab({ setActiveTab }) {
  const [complaints, setComplaints] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    complaintService.getUserComplaints()
      .then(res => setComplaints(res.data.data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white font-display font-bold text-xl">My Complaints</h2>
        <button onClick={() => setActiveTab('submit')} className="btn-primary text-sm px-5 py-2.5">+ New Complaint</button>
      </div>
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/8">
                {['Tracking ID','Title','Category','Status','Priority','Date'].map(h => (
                  <th key={h} className="text-left px-5 py-4 text-white/40 text-xs font-semibold uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr><td colSpan="6" className="px-5 py-8 text-center text-white/50">Loading complaints...</td></tr>
              ) : complaints.length > 0 ? complaints.map(c => (
                <tr key={c.id} className="hover:bg-white/3 transition-colors group">
                  <td className="px-5 py-4"><span className="font-mono text-brand-400 text-sm">{c.trackingId}</span></td>
                  <td className="px-5 py-4"><p className="text-white text-sm font-medium max-w-[200px] truncate" title={c.title}>{c.title}</p></td>
                  <td className="px-5 py-4"><span className="text-white/50 text-xs">{c.category}</span></td>
                  <td className="px-5 py-4"><StatusBadge status={c.status} /></td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <PriorityDot priority={c.priority} />
                      <span className="text-white/50 text-xs capitalize">{c.priority}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4"><span className="text-white/40 text-xs whitespace-nowrap">{formatDate(c.createdAt)}</span></td>
                </tr>
              )) : (
                <tr><td colSpan="6" className="px-5 py-12 text-center text-white/50">No complaints filed yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ── Submit Complaint Tab ──────────────────────────────────────────────────────
function SubmitTab({ setActiveTab }) {
  const [form, setForm] = useState({ title: '', category: CATEGORIES[0], priority: 'medium', location: '', description: '' })
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const fd = new FormData()
      Object.keys(form).forEach(k => fd.append(k, form[k]))
      if (image) fd.append('image', image)

      await complaintService.createComplaint(fd)
      setActiveTab('complaints')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit complaint')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl animate-fade-in">
      <h2 className="text-white font-display font-bold text-xl mb-6">File New Complaint</h2>
      <div className="glass-card p-6 sm:p-8">
        {error && <div className="p-4 bg-red-500/10 text-red-400 text-sm rounded-xl mb-6 border border-red-500/20">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm text-white/60">Title *</label>
            <input required type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="Brief description of the issue" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500/60" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-sm text-white/60">Category *</label>
              <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full bg-surface-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500/60 appearance-none">
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-white/60">Priority</label>
              <select value={form.priority} onChange={e => setForm({...form, priority: e.target.value})} className="w-full bg-surface-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500/60 appearance-none capitalize">
                {['low', 'medium', 'high', 'urgent'].map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-white/60">Location / Address</label>
            <input type="text" value={form.location} onChange={e => setForm({...form, location: e.target.value})} placeholder="Where is this happening?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500/60" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-white/60">Detailed Description *</label>
            <textarea required rows="4" value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Provide more details about the issue..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500/60 resize-none" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-white/60">Attach Photo (optional)</label>
            <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} className="w-full text-sm text-white/40 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-white/5 file:text-white hover:file:bg-white/10 transition file:cursor-pointer cursor-pointer border border-white/10 rounded-xl p-1" />
          </div>
          <button disabled={loading} type="submit" className="btn-primary w-full justify-center py-3.5 mt-4 disabled:opacity-50">
            {loading ? 'Submitting...' : 'Submit Complaint →'}
          </button>
        </form>
      </div>
    </div>
  )
}

// ── Track Tab ─────────────────────────────────────────────────────────────────
function TrackTab() {
  const [tid, setTid] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTrack = async (e) => {
    e.preventDefault()
    if (!tid) return
    setLoading(true)
    setError('')
    setData(null)
    try {
      const res = await complaintService.trackComplaint(tid)
      setData(res.data.data)
    } catch (err) {
      setError('Complaint not found. Please check your tracking ID.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl animate-fade-in">
      <h2 className="text-white font-display font-bold text-xl mb-6">Track Status</h2>
      <div className="glass-card p-6 sm:p-8 mb-6">
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
          <input type="text" placeholder="Enter Tracking ID (e.g. MSC-XXXXXX)" value={tid} onChange={e => setTid(e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500/60" />
          <button disabled={loading} className="btn-primary py-3 px-6 justify-center">
            {loading ? 'Searching...' : 'Track'}
          </button>
        </form>
        {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
      </div>

      {data && (
        <div className="glass-card p-6 sm:p-8 animate-fade-in">
          <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/8">
            <div>
              <p className="text-brand-400 font-mono text-sm mb-1">{data.trackingId}</p>
              <h3 className="text-white text-lg font-semibold">{data.title}</h3>
              <p className="text-white/50 text-sm mt-1">{formatDate(data.createdAt)}</p>
            </div>
            <StatusBadge status={data.status} />
          </div>

          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div><p className="text-white/40">Category</p><p className="text-white mt-1">{data.category}</p></div>
              <div><p className="text-white/40">Priority</p><p className="text-white mt-1 capitalize"><PriorityDot priority={data.priority}/> {data.priority}</p></div>
            </div>
            {data.location && <div><p className="text-white/40">Location</p><p className="text-white mt-1">{data.location}</p></div>}
            <div><p className="text-white/40">Description</p><p className="text-white mt-1 text-sm leading-relaxed">{data.description}</p></div>
            {data.imageUrl && (
              <div className="mt-4">
                <p className="text-white/40 mb-2">Attachment</p>
                <img src={data.imageUrl} alt="Complaint Attachment" className="w-full max-w-sm rounded-xl border border-white/10" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Profile Tab ───────────────────────────────────────────────────────────────
function ProfileTab({ user }) {
  return (
    <div className="max-w-xl space-y-6 animate-fade-in">
      <h2 className="text-white font-display font-bold text-xl">My Profile</h2>
      <div className="glass-card p-6">
        <div className="flex items-center gap-5 mb-8 pb-6 border-b border-white/8">
          <div className="w-20 h-20 rounded-2xl bg-brand-gradient flex items-center justify-center text-4xl shadow-brand font-bold text-white">
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>
          <div>
            <p className="text-white font-bold text-xl">{user?.name}</p>
            <p className="text-white/50 text-sm">{user?.email}</p>
            <span className="mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-500/15 border border-brand-500/30 text-brand-400 capitalize">{user?.role} Account</span>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Full Name',  value: user?.name,  icon: '👤' },
            { label: 'Email',      value: user?.email, icon: '✉️' },
            { label: 'Phone',      value: user?.phone || 'Not provided', icon: '📞' },
            { label: 'Account ID', value: user?.id?.slice(0, 8) + '…', icon: '🔑' },
          ].map(field => (
            <div key={field.label} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
              <span className="text-base">{field.icon}</span>
              <div><p className="text-white/40 text-xs">{field.label}</p><p className="text-white text-sm">{field.value}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const { user, logout }  = useAuth()
  const navigate          = useNavigate()
  const [activeTab,  setActiveTab]  = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = async () => {
    await logout()
    navigate('/login', { replace: true })
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':   return <OverviewTab user={user} setActiveTab={setActiveTab} />
      case 'complaints': return <ComplaintsTab setActiveTab={setActiveTab} />
      case 'submit':     return <SubmitTab setActiveTab={setActiveTab} />
      case 'track':      return <TrackTab />
      case 'profile':    return <ProfileTab user={user} />
      default:           return <div className="text-center py-24 text-white/50">Section under development</div>
    }
  }

  return (
    <div className="min-h-screen bg-surface-900 flex">
      {sidebarOpen && <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <aside className={`fixed top-0 left-0 h-full w-64 z-40 flex flex-col bg-surface-800/95 backdrop-blur-xl border-r border-white/8 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="p-6 border-b border-white/8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand group-hover:scale-110 transition-transform">
              <span className="text-xl">🏙️</span>
            </div>
            <div>
              <p className="text-white font-bold text-base leading-tight">Mardan City</p>
              <p className="gradient-text text-xs font-medium">Dashboard</p>
            </div>
          </Link>
        </div>
        <div className="px-4 py-3 mx-3 mt-4 rounded-xl bg-white/3 border border-white/8 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-lg font-bold text-white flex-shrink-0">{user?.name?.charAt(0)?.toUpperCase()}</div>
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate">{user?.name}</p>
            <p className="text-white/40 text-xs capitalize truncate">{user?.role}</p>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(item => (
            <button key={item.key} onClick={() => { setActiveTab(item.key); setSidebarOpen(false) }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === item.key ? 'bg-brand-500/15 text-brand-300 border border-brand-500/25' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
              <span className="text-base w-5 text-center">{item.icon}</span>{item.label}
              {activeTab === item.key && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-400" />}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/8">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200"><span className="text-base">🚪</span>Sign Out</button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen lg:min-h-0">
        <header className="sticky top-0 z-20 bg-surface-900/90 backdrop-blur-xl border-b border-white/8 px-4 sm:px-6 h-16 flex items-center justify-between">
          <button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-white/5 transition" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span className="block h-0.5 w-5 bg-white" /><span className="block h-0.5 w-5 bg-white" /><span className="block h-0.5 w-3 bg-white self-start ml-1" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">{navItems.find(n => n.key === activeTab)?.icon}</span>
            <h1 className="text-white font-semibold">{navItems.find(n => n.key === activeTab)?.label}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" className="hidden sm:flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm transition px-3 py-2 rounded-lg hover:bg-white/5">🏠 Homepage</Link>
            <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-sm font-bold text-white shadow-brand">{user?.name?.charAt(0)?.toUpperCase()}</div>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
