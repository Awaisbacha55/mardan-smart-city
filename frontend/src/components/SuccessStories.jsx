import { motion } from 'framer-motion'
import { CheckCircle2, Clock } from 'lucide-react'

export default function SuccessStories() {
  const stories = [
    { title: 'Road Repair Completed', location: 'Sheikh Maltoon Town', time: 'Resolved in 48 Hours', img: '/media__1780425848316.png' },
    { title: 'Street Lighting Restored', location: 'Bank Road', time: 'Resolved in 24 Hours', img: '/media__1780251282877.png' },
    { title: 'Water Supply Issue Fixed', location: 'Shamsi Road', time: 'Resolved in 12 Hours', img: '/media__1780422540692.png' },
  ]

  return (
    <section id="success" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="section-badge mb-6">Real Results</div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4"
            >
              Success Stories
            </motion.h2>
            <p className="text-lg text-slate-600 max-w-xl">
              See how citizen reports are turning into real improvements across the city.
            </p>
          </div>
          <button className="btn-outline whitespace-nowrap hidden sm:inline-flex">View All Stories</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="premium-card overflow-hidden group cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-emerald-600 flex items-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-4 h-4" /> Fixed
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{story.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{story.location}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-600 bg-brand-50 px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4" /> {story.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <button className="btn-outline w-full justify-center">View All Stories</button>
        </div>

      </div>
    </section>
  )
}
