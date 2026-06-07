import { motion } from 'framer-motion'
import { Server, Cpu, HardDrive, Network, Database, Zap } from 'lucide-react'

const MonitorCard = ({ title, value, unit, icon: Icon, trend, colorClass }) => (
  <div className="bg-[#0b0b0b] border border-[#222] p-5 rounded-lg flex flex-col justify-between group hover:border-[#444] transition-colors relative overflow-hidden">
    <div className={`absolute top-0 left-0 w-full h-0.5 ${colorClass} opacity-50`} />
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
        <Icon className="w-4 h-4" />
        {title}
      </div>
      {trend && (
        <span className={`text-xs font-mono ${trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
          {trend}
        </span>
      )}
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-mono font-medium text-white">{value}</span>
      <span className="text-white/40 text-sm">{unit}</span>
    </div>
  </div>
)

export default function LiveMonitoring() {
  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl font-display font-bold text-white mb-4 flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              Live Infrastructure Monitoring
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50"
            >
              Powered by Kubernetes, Prometheus & Grafana.
            </motion.p>
          </div>
        </div>

        {/* Grafana-style Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] p-2 rounded-xl border border-[#222]"
        >
          {/* Top toolbar mockup */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#222] mb-2 bg-[#0a0a0a] rounded-t-lg">
            <div className="flex items-center gap-4 text-xs font-mono text-white/50">
              <span className="flex items-center gap-1"><Server className="w-3 h-3" /> Production Cluster</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:flex items-center gap-1">Last update: Just now</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 bg-[#222] text-white/70 text-xs font-mono rounded">Auto-refresh 5s</div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 p-2">
            <MonitorCard 
              title="CPU Usage" 
              value="42.8" 
              unit="%" 
              icon={Cpu} 
              trend="+2.1%"
              colorClass="bg-blue-500" 
            />
            <MonitorCard 
              title="Memory Usage" 
              value="12.4" 
              unit="GB" 
              icon={HardDrive} 
              trend="+0.4GB"
              colorClass="bg-purple-500" 
            />
            <MonitorCard 
              title="Active Pods" 
              value="18" 
              unit="/ 20" 
              icon={Server} 
              colorClass="bg-emerald-500" 
            />
            <MonitorCard 
              title="Database Health" 
              value="99.9" 
              unit="%" 
              icon={Database} 
              colorClass="bg-emerald-500" 
            />
            <MonitorCard 
              title="Network Traffic" 
              value="845" 
              unit="MB/s" 
              icon={Network} 
              trend="+12MB/s"
              colorClass="bg-brand-500" 
            />
            <MonitorCard 
              title="API Response Time" 
              value="45" 
              unit="ms" 
              icon={Zap} 
              trend="-5ms"
              colorClass="bg-amber-500" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
