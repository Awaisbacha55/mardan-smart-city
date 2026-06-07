import { motion } from 'framer-motion'

export default function About() {
  const features = [
    {
      title: 'Real-Time Infrastructure Monitoring',
      desc: 'Centralized oversight of city utilities. Our IoT-enabled sensors track water flow, traffic density, and air quality in real-time, allowing officials to proactively manage city resources before critical failures occur.',
      image: '/pic-1.png',
      reverse: false
    },
    {
      title: 'Seamless Citizen Engagement',
      desc: 'A unified digital portal for all civic needs. Citizens can log complaints, track progress, pay utility bills, and participate in local governance through a single, secure application.',
      image: '/pic-2.png',
      reverse: true
    },
    {
      title: 'Cloud-Native Resilience',
      desc: 'Built on Kubernetes (K3s) and Docker, the Mardan Smart City platform guarantees 99.9% uptime. Our self-healing infrastructure automatically scales during high-traffic events like emergency broadcasts.',
      image: '/pic-3.png',
      reverse: false
    }
  ]

  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-bold text-white mb-6"
          >
            Powering the Modern Metropolis
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            How Mardan is using next-generation technology to create a sustainable, efficient, and highly responsive urban environment.
          </motion.p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              
              {/* Image side */}
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  {/* Decorative Border */}
                  <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 pointer-events-none" />
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-white/50 leading-relaxed mb-8">
                  {feature.desc}
                </p>
                <button className="text-brand-400 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                  Learn more about this capability <span>→</span>
                </button>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
