import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'

export default function VisionMission() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-10 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-2xl bg-brand-50 flex items-center justify-center mb-8 group-hover:bg-brand-500 transition-colors duration-500">
              <Eye className="w-10 h-10 text-brand-500 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-sm">
              To build a connected, transparent, and citizen-centered city where public services are accessible to everyone.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="premium-card p-10 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors duration-500">
              <Target className="w-10 h-10 text-blue-500 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-sm">
              To improve the quality of life in Mardan by using technology to strengthen service delivery, accountability, and community engagement.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
