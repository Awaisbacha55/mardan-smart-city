import { motion } from 'framer-motion'
import { TrendingUp, Activity, ShieldAlert, Cpu } from 'lucide-react'

export default function AnalyticsShowcase() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-bold text-white mb-6"
          >
            City Analytics Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Enterprise-grade analytics giving city officials deep insights into infrastructure performance and citizen engagement.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 shadow-2xl relative"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">System Analytics</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest">Live Overview</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/60 text-sm">24h</div>
              <div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/60 text-sm">7d</div>
              <div className="px-3 py-1.5 rounded-md bg-brand-500/20 border border-brand-500/30 text-brand-400 text-sm font-medium">30d</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-[#111] rounded-xl border border-white/5 p-6 relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-white/50 text-sm mb-1">Total Complaints Resolved</p>
                  <h4 className="text-3xl font-bold text-white">14,239</h4>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded text-xs font-semibold">
                  <TrendingUp className="w-3 h-3" /> +12.5%
                </div>
              </div>
              
              {/* Mock Bar Chart */}
              <div className="h-48 flex items-end gap-2 sm:gap-4 mt-auto">
                {[30, 45, 25, 60, 40, 75, 50, 85, 55, 90, 65, 100].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-brand-500/50 to-brand-400 hover:opacity-80 transition-opacity rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            {/* Side KPI Indicators */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#111] rounded-xl border border-white/5 p-6 flex-1">
                <ShieldAlert className="w-6 h-6 text-rose-400 mb-4" />
                <p className="text-white/50 text-sm mb-1">Critical Alerts</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-bold text-white">3</h4>
                  <span className="text-xs text-rose-400">-2 from yesterday</span>
                </div>
              </div>

              <div className="bg-[#111] rounded-xl border border-white/5 p-6 flex-1 relative overflow-hidden">
                <Cpu className="w-6 h-6 text-blue-400 mb-4" />
                <p className="text-white/50 text-sm mb-1">Compute Load</p>
                <h4 className="text-2xl font-bold text-white mb-4">42%</h4>
                
                {/* Mock Sparkline */}
                <div className="absolute bottom-0 left-0 w-full h-12 flex items-end opacity-30">
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full stroke-blue-500 fill-none" strokeWidth="2">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5 }}
                      d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,5 L60,10 L70,2 L80,15 L90,8 L100,20" 
                    />
                  </svg>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
