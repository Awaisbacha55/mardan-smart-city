import { motion } from 'framer-motion'
import { Building2, ShieldAlert, Droplet, Stethoscope, Ambulance, TramFront } from 'lucide-react'

export default function Departments() {
  const departments = [
    { name: 'Municipal Services', icon: Building2 },
    { name: 'Traffic Police', icon: ShieldAlert },
    { name: 'Water Authority', icon: Droplet },
    { name: 'Health Department', icon: Stethoscope },
    { name: 'Emergency Services', icon: Ambulance },
    { name: 'Transport Authority', icon: TramFront },
  ]

  return (
    <section id="departments" className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="section-badge mb-6">Partnering Entities</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6"
          >
            Connected Departments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Mardan Smart City integrates with key government sectors to ensure your complaints reach the right authority instantly.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300 flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                <dept.icon className="w-6 h-6 text-slate-500 group-hover:text-brand-600 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                {dept.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
