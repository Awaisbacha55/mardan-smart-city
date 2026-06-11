import { motion } from 'framer-motion'
import { ArrowRight, Search, MapPin, ShieldCheck, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-50">
      
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 z-10" />
        
        {/* Soft decorative blur circles */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-100 rounded-full blur-[120px] opacity-60 mix-blend-multiply z-10 animate-pulse" />
        <div className="absolute bottom-0 left-20 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 mix-blend-multiply z-10" />

        {/* Placeholder image for aerial view of city */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pic-1.png')" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 text-brand-700 font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
              Citizen Services Portal
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Building a <span className="text-brand-600">Smarter Future</span> for Mardan
            </h1>
            
            <p className="text-xl text-slate-700 font-medium mb-4">
              Connecting citizens with public services through technology, transparency, and innovation.
            </p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Mardan Smart City is a modern digital platform that empowers citizens to access services, report issues, track requests, and contribute to a better community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/register" className="w-full sm:w-auto btn-primary py-4 px-8 text-lg hover:-translate-y-1">
                Submit Complaint <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/login" className="w-full sm:w-auto btn-outline py-4 px-8 text-lg bg-white">
                <Search className="w-5 h-5 mr-1" /> Track Complaint
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" /> Secure Platform
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" /> 24/7 Support
              </div>
            </div>
          </motion.div>

          {/* Right Content - Floating Elements Image Composition */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img src="/media__1780243226974.png" alt="Mardan Citizens" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Floating Card 1 - Request Status */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-20 bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 z-20 w-64"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Issue Resolved</p>
                  <p className="text-xs text-slate-500">Water Supply Fixed</p>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-full h-full bg-emerald-500" />
              </div>
            </motion.div>

            {/* Floating Card 2 - Citizen Count */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-32 bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">50k+</p>
                  <p className="text-sm text-slate-500 font-medium">Citizens Connected</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
