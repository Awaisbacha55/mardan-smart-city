import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, FileText, Activity, Car, Droplets, Bell } from 'lucide-react'

// CountUp component for animating numbers
function CountUp({ to, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = parseInt(to.replace(/\D/g, ''))
    const suffix = to.replace(/[0-9]/g, '')
    if (start === end) return
    
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * (end - start) + start))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [isInView, to, duration])

  return <span ref={ref}>{count.toLocaleString()}{to.replace(/[0-9.]/g, '')}</span>
}

export default function Statistics() {
  const stats = [
    { icon: Users, label: 'Citizens Served', value: '150k+', color: 'text-brand-400', bg: 'bg-brand-400/10' },
    { icon: FileText, label: 'Active Requests', value: '2.4k', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { icon: Activity, label: 'Infrastructure Health', value: '98%', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { icon: Car, label: 'Traffic Monitored', value: '45k', color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { icon: Droplets, label: 'Water Systems', value: '120', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { icon: Bell, label: 'Emergency Alerts', value: '12', color: 'text-red-400', bg: 'bg-red-400/10' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="statistics" className="py-24 bg-black relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-black to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 border border-white/10 px-3 py-1 rounded-full bg-white/5">
              Live City Metrics
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-white"
          >
            Real-Time City Performance
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 relative group overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${stat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-6`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
                  <CountUp to={stat.value} />
                </h3>
                <p className="text-sm sm:text-base text-white/50 font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Decorative background glow */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${stat.bg} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
