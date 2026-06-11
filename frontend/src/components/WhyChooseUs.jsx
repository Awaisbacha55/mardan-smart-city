import { motion } from 'framer-motion'
import { Zap, Eye, Smartphone, Users, ShieldCheck, Cpu } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    { title: 'Fast Responses', icon: Zap },
    { title: 'Transparent Tracking', icon: Eye },
    { title: 'Mobile Friendly', icon: Smartphone },
    { title: 'Citizen Focused', icon: Users },
    { title: 'Secure Services', icon: ShieldCheck },
    { title: 'Modern Technology', icon: Cpu },
  ]

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="section-badge mb-6">Platform Benefits</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6"
          >
            Why Choose Mardan Smart City?
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-8 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-brand-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">{feature.title}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
