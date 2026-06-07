import { motion } from 'framer-motion'
import { ArrowRight, Activity, Shield, Users, Server } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50" />
        {/* Placeholder image for city background - in real app, use a high quality WebP */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/pic-2.png')" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left pt-10 lg:pt-0"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Mardan Smart City v2.0 Live</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Building the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">
                Digital Future
              </span> <br className="hidden sm:block" />
              of Mardan.
            </h1>
            
            <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              A unified smart city platform connecting citizens, infrastructure, public services, analytics, and real-time monitoring.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center justify-center">
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Right Content - Floating Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Main Dashboard Card */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-[85%] h-[80%] bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              >
                {/* Mac window controls */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <div className="mx-auto text-[10px] text-white/30 font-medium uppercase tracking-widest">System Overview</div>
                </div>
                {/* Dashboard mock content */}
                <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 h-32 rounded-xl bg-gradient-to-r from-brand-500/20 to-blue-500/20 border border-white/5 flex items-end p-4">
                    <div className="w-full h-16 flex items-end gap-2">
                      {[40, 70, 45, 90, 65, 85, 50, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-400/50 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-[10px] text-white/50 uppercase">Uptime</div>
                    </div>
                  </div>
                  <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
                    <Users className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">12.4k</div>
                      <div className="text-[10px] text-white/50 uppercase">Active Citizens</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 top-20 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Secure Network</div>
                  <div className="text-xs text-white/50">Zero Trust Architecture</div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-8 bottom-32 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <Server className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">K3s Cluster</div>
                  <div className="text-xs text-white/50">4 Nodes Active</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  )
}
