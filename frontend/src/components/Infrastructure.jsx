import { motion } from 'framer-motion'
import { Server, Database, Cloud, Shield, Activity, Users, ArrowDown } from 'lucide-react'

const TechNode = ({ icon: Icon, title, desc, delay, isCore = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`p-6 rounded-2xl border ${isCore ? 'bg-brand-500/10 border-brand-500/30 shadow-[0_0_30px_rgba(139,92,246,0.15)]' : 'bg-white/5 border-white/10'} backdrop-blur-xl flex flex-col items-center text-center max-w-sm w-full mx-auto relative z-10`}
  >
    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${isCore ? 'bg-brand-500 text-white' : 'bg-white/10 text-white/70'}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
  </motion.div>
)

export default function Infrastructure() {
  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 mb-6 text-brand-400 text-sm font-semibold tracking-wide uppercase"
          >
            <Cloud className="w-4 h-4" /> Cloud-Native Architecture
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-white mb-6"
          >
            Built for Scale & Resilience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Mardan Smart City is powered by an enterprise-grade Kubernetes stack, ensuring zero downtime and infinite scalability.
          </motion.p>
        </div>

        {/* Architecture Flow */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-8">
          
          {/* Animated connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-brand-500/30 to-transparent z-0" />
          
          <TechNode 
            icon={Users}
            title="Citizens & Officials"
            desc="Web and mobile access from anywhere"
            delay={0.1}
          />

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }} 
            className="bg-black p-1 rounded-full relative z-10 text-white/30"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>

          <TechNode 
            icon={Shield}
            title="React Frontend Edge"
            desc="Vite-powered SPA hosted globally for sub-second delivery"
            delay={0.2}
            isCore={true}
          />

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} 
            className="bg-black p-1 rounded-full relative z-10 text-white/30"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
            <TechNode 
              icon={Server}
              title="Node.js Microservices"
              desc="Stateless REST APIs orchestrated by Kubernetes (K3s)"
              delay={0.3}
            />
            <TechNode 
              icon={Database}
              title="Stateful Data Layer"
              desc="PostgreSQL for persistent data, Redis for caching"
              delay={0.4}
            />
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity, delay: 1 }} 
            className="bg-black p-1 rounded-full relative z-10 text-white/30"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>

          <TechNode 
            icon={Activity}
            title="Observability Stack"
            desc="Prometheus metrics collection visualized in Grafana dashboards"
            delay={0.5}
          />

        </div>
      </div>
    </section>
  )
}
