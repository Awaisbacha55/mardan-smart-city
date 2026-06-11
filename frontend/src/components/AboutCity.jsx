import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function AboutCity() {
  const benefits = [
    "Direct communication with government departments",
    "Real-time tracking of civic issues and complaints",
    "Transparent and accountable service delivery",
    "Digital access to essential public utilities"
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background decorative shape */}
            <div className="absolute inset-0 bg-brand-50 rounded-[3rem] -rotate-6 scale-105 z-0" />
            
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] bg-white p-2">
              <img 
                src="/media__1780299097444.png" 
                alt="About Mardan Smart City" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Small floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-xl">
                  #1
                </div>
                <div>
                  <p className="font-bold text-slate-800">Digital Initiative</p>
                  <p className="text-xs text-slate-500">KPK Government</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-badge mb-6">About The Initiative</div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
              What is Mardan Smart City?
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mardan Smart City is a citizen-focused initiative designed to improve communication between residents and public departments. Through digital transformation, the platform makes government services more accessible, transparent, and efficient.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary">
              Learn More About Our Work
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
