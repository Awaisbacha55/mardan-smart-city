import { motion } from 'framer-motion'
import { FileEdit, Send, Search, CheckCircle, MessageSquareHeart } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { title: 'Submit Complaint', desc: 'Log your issue via the portal.', icon: FileEdit },
    { title: 'Request Received', desc: 'Routed to the correct department.', icon: Send },
    { title: 'Investigation', desc: 'Officials inspect the issue.', icon: Search },
    { title: 'Resolution', desc: 'The problem is fixed on-site.', icon: CheckCircle },
    { title: 'Feedback', desc: 'Citizen rates the service.', icon: MessageSquareHeart },
  ]

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <div className="section-badge mb-6">Simple Process</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A transparent and efficient workflow designed to get your community issues resolved as quickly as possible.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-brand-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-2 w-8 h-8 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center z-20 shadow-md">
                  {index + 1}
                </div>

                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-brand-100 flex items-center justify-center mb-6 group-hover:border-brand-500 group-hover:bg-brand-50 transition-all duration-300 shadow-md">
                  <step.icon className="w-10 h-10 text-brand-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed px-2">
                  {step.desc}
                </p>

                {/* Mobile downward arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-1 h-12 bg-brand-100 my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
