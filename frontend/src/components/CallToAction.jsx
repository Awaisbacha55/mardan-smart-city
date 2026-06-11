import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, LayoutGrid } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-24 bg-brand-50 relative border-t border-brand-100 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-60 z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6"
        >
          Ready to Improve Your Community?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 mb-10"
        >
          Join thousands of citizens actively participating in making Mardan cleaner, safer, and smarter.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/register" className="w-full sm:w-auto btn-primary py-4 px-8 text-lg">
            Submit Complaint <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/login" className="w-full sm:w-auto btn-outline py-4 px-8 text-lg bg-white">
            <Search className="w-5 h-5 mr-1" /> Track Complaint
          </Link>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-slate-600 hover:text-brand-600 transition-colors flex items-center justify-center gap-2">
            <LayoutGrid className="w-5 h-5" /> Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}
