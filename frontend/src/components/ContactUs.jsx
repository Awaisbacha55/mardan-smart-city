import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from 'lucide-react'

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="section-badge mb-6">Get In Touch</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6">
            Contact Mardan Smart City
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information & Map */}
          <div>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-4 text-brand-600 font-bold">
                  <MapPin className="w-5 h-5" /> Office Address
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Mardan Smart City HQ<br />
                  Nowshera Road, Mardan<br />
                  Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4 text-brand-600 font-bold">
                  <Phone className="w-5 h-5" /> Phone & Email
                </div>
                <p className="text-slate-600 leading-relaxed mb-2">
                  +92 300 1234567<br />
                  support@mardansmartcity.gov.pk
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 text-brand-600 font-bold">
                  <Clock className="w-5 h-5" /> Support Hours
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Mon - Fri: 9:00 AM - 5:00 PM<br />
                  Emergency Services: 24/7
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 text-brand-600 font-bold">
                  <Mail className="w-5 h-5" /> Social Media
                </div>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden border border-slate-300 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105634.34151772154!2d71.9749102!3d34.1989472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38decb29e00ebdf3%3A0x86bd615e4f4fb38e!2sMardan%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717616142617!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="premium-card p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="How can we help?" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button className="btn-primary w-full justify-center py-4 text-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
