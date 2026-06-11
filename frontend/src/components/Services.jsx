import { motion } from 'framer-motion'
import { FileText, Droplets, Car, Shield, Trash2, Bell, Heart, Bus } from 'lucide-react'

export default function Services() {
  const services = [
    { title: 'Citizen Complaints', desc: 'Direct portal for logging, tracking, and resolving civic issues quickly.', icon: FileText },
    { title: 'Water Services', desc: 'Manage connections, pay bills, and report water supply issues.', icon: Droplets },
    { title: 'Traffic Management', desc: 'Real-time traffic updates and road safety reports.', icon: Car },
    { title: 'Public Safety', desc: 'Connect directly with local police and security departments.', icon: Shield },
    { title: 'Waste Management', desc: 'Schedule pickups and report illegal dumping areas.', icon: Trash2 },
    { title: 'Emergency Assistance', desc: '24/7 access to fire, medical, and rescue services.', icon: Bell },
    { title: 'Healthcare Support', desc: 'Locate nearby hospitals and book public clinic appointments.', icon: Heart },
    { title: 'Public Transport', desc: 'View bus schedules, routes, and transit card services.', icon: Bus },
  ]

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="section-badge mb-6">Digital Services</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6"
          >
            Access Public Services Online
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We've digitized essential city services to make them easily accessible from your computer or smartphone, 24/7.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="premium-card p-8 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                <service.icon className="w-8 h-8 text-brand-500 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>
              
              <div className="text-brand-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Access Service <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
