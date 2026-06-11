import { motion } from 'framer-motion'

export default function Community() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/media__1780423917754.png" alt="Community" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
          </div>

          <div className="relative z-10 px-8 py-20 lg:px-20 lg:py-28 max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight"
            >
              Together We Build a <span className="text-brand-400">Better Mardan</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed mb-10"
            >
              Every complaint submitted, every issue resolved, and every citizen engaged contributes to building a stronger, smarter, and more connected city.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
