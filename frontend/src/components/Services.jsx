import { motion } from 'framer-motion'
import { Droplets, Car, Trash2, Shield, MessageSquare, Heart, Bell, Bus } from 'lucide-react'

export default function Services() {
  const services = [
    { title: 'Water Management', desc: 'Real-time monitoring of city water supply, quality metrics, and leak detection.', icon: Droplets, color: 'from-blue-500/20 to-cyan-500/5', border: 'group-hover:border-blue-500/50', iconColor: 'text-blue-400' },
    { title: 'Traffic Monitoring', desc: 'AI-powered traffic flow analysis and automated signal optimization.', icon: Car, color: 'from-amber-500/20 to-orange-500/5', border: 'group-hover:border-amber-500/50', iconColor: 'text-amber-400' },
    { title: 'Waste Management', desc: 'Smart bin tracking and optimized automated collection routing.', icon: Trash2, color: 'from-emerald-500/20 to-green-500/5', border: 'group-hover:border-emerald-500/50', iconColor: 'text-emerald-400' },
    { title: 'Public Safety', desc: 'Integrated surveillance and intelligent threat detection systems.', icon: Shield, color: 'from-indigo-500/20 to-blue-500/5', border: 'group-hover:border-indigo-500/50', iconColor: 'text-indigo-400' },
    { title: 'Citizen Complaints', desc: 'Direct portal for logging, tracking, and resolving civic issues.', icon: MessageSquare, color: 'from-brand-500/20 to-purple-500/5', border: 'group-hover:border-brand-500/50', iconColor: 'text-brand-400' },
    { title: 'Healthcare', desc: 'Centralized public health monitoring and hospital resource tracking.', icon: Heart, color: 'from-rose-500/20 to-red-500/5', border: 'group-hover:border-rose-500/50', iconColor: 'text-rose-400' },
    { title: 'Emergency Response', desc: 'Rapid deployment coordination for police, fire, and medical teams.', icon: Bell, color: 'from-red-500/20 to-orange-500/5', border: 'group-hover:border-red-500/50', iconColor: 'text-red-400' },
    { title: 'Public Transport', desc: 'Live bus tracking, route optimization, and digital ticketing.', icon: Bus, color: 'from-teal-500/20 to-emerald-500/5', border: 'group-hover:border-teal-500/50', iconColor: 'text-teal-400' },
  ]

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-display font-bold text-white mb-6"
            >
              Unified City Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/50"
            >
              Access a comprehensive suite of digital infrastructure tools designed to make Mardan safer, cleaner, and more efficient.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:bg-[#111] transition-all duration-500 ${service.border} overflow-hidden cursor-pointer flex flex-col h-full`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">
                  {service.desc}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/30 group-hover:text-white/80 transition-colors">
                  Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
