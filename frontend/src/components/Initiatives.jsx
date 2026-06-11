import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Initiatives() {
  const initiatives = [
    {
      title: 'Digital Public Services',
      desc: 'Bringing essential services to your fingertips. Apply for permits, pay bills, and track requests online without standing in long queues.',
      image: '/media__1780421511809.png'
    },
    {
      title: 'Cleaner Streets & Sustainable Development',
      desc: 'Partnering with the community to ensure efficient waste management, clean public spaces, and environmentally sustainable practices across Mardan.',
      image: '/media__1780243407522.png'
    },
    {
      title: 'Smart Governance & Citizen Participation',
      desc: 'Your voice matters. Through our digital feedback loop, we ensure that every citizen can actively participate in building a better city.',
      image: '/media__1780415706887.png'
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <div className="section-badge mb-6">Key Initiatives</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6"
          >
            Driving Progress in Mardan
          </motion.h2>
        </div>

        <div className="space-y-32">
          {initiatives.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                    <div className="absolute inset-0 bg-brand-600/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  
                  <button className="flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors group">
                    Discover More 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
