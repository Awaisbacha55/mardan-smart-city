import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function CountUp({ to, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = parseInt(to.replace(/\D/g, ''))
    const suffix = to.replace(/[0-9]/g, '')
    if (start === end || isNaN(end)) {
      // If it's something like "24/7", don't count it, just display
      return
    }
    
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

  if (isNaN(parseInt(to.replace(/\D/g, '')))) return <span>{to}</span>

  return <span ref={ref}>{count.toLocaleString()}{to.replace(/[0-9.]/g, '')}</span>
}

export default function Impact() {
  const stats = [
    { label: 'Citizens Served', value: '50000+' },
    { label: 'Complaints Resolved', value: '15000+' },
    { label: 'Connected Departments', value: '30+' },
    { label: 'Digital Services', value: '24/7' },
    { label: 'Citizen Satisfaction', value: '99%' },
    { label: 'Transparent Tracking', value: '100%' },
  ]

  return (
    <section className="py-24 bg-brand-600 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-white mb-6"
          >
            Our Impact on Mardan
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                <CountUp to={stat.value} />
              </h3>
              <p className="text-brand-100 font-medium text-sm sm:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
