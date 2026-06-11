import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmad Khan',
      role: 'Local Business Owner',
      text: 'The process was incredibly smooth. I reported a broken streetlight outside my shop, and it was fixed within 24 hours. This level of transparency is exactly what Mardan needed.',
      rating: 5,
      avatar: 'AK'
    },
    {
      name: 'Fatima Ali',
      role: 'Resident, Sheikh Maltoon',
      text: 'I used to struggle to get water supply issues addressed. Now, I just log a complaint on my phone and get real-time tracking updates. Highly recommended!',
      rating: 5,
      avatar: 'FA'
    },
    {
      name: 'Usman Tariq',
      role: 'University Student',
      text: 'The mobile responsiveness of this platform is amazing. It’s easy to use, and seeing the success stories gives me confidence in our city’s administration.',
      rating: 4,
      avatar: 'UT'
    }
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="section-badge mb-6">Citizen Voices</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6"
          >
            What Our Citizens Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="premium-card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-100/50" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`} />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed relative z-10">"{t.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
