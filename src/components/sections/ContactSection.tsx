"use client";

import { MapPin, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 flex justify-center bg-white border-t overflow-hidden">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container px-4 md:px-6"
      >
        <div className="bg-pest-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Form Side */}
          <motion.div variants={fadeInUp} className="p-10 lg:p-16 lg:w-1/2 text-white">
            <h2 className="text-3xl font-extrabold mb-2">Request an Inspection</h2>
            <p className="text-pest-light/90 mb-10">Fill out this quick form and we will call you back immediately.</p>
            
            <form className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-pest-light/90 mb-2 block">Your Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pest-accent text-white placeholder-white/40" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-pest-light/90 mb-2 block">Phone Number</label>
                  <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pest-accent text-white placeholder-white/40" placeholder="9876543210" />
                </div>
                <div>
                  <label htmlFor="service-select" className="text-sm font-semibold text-pest-light/90 mb-2 block">Service</label>
                  <select id="service-select" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pest-accent text-white/80 appearance-none">
                    <option className="text-foreground">General Pest</option>
                    <option className="text-foreground">Termites</option>
                    <option className="text-foreground">Rodents</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-pest-light/90 mb-2 block">Full Address</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pest-accent text-white placeholder-white/40" placeholder="Your location in Amritsar..." />
              </div>
              <button type="button" className="w-full bg-pest-accent hover:bg-yellow-500 text-pest-dark h-14 rounded-xl text-lg font-bold transition-all hover:scale-[1.02] shadow-xl mt-4">
                Submit Request
              </button>
            </form>
          </motion.div>
          
          {/* Info & Map Side */}
          <motion.div variants={fadeInUp} className="bg-pest-light p-10 lg:p-16 lg:w-1/2 flex flex-col justify-between relative">
            <div>
              <h3 className="text-2xl font-extrabold text-pest-dark mb-8">Get In Touch Directly</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-pest-green shadow-sm"><Phone className="h-6 w-6"/></div>
                  <div>
                    <div className="font-bold text-foreground">Call Us Anything</div>
                    <div className="text-lg font-extrabold text-pest-dark">97985-63175</div>
                    <div className="text-lg font-extrabold text-pest-dark">73208-48351</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-pest-green shadow-sm"><MapPin className="h-6 w-6"/></div>
                  <div>
                    <div className="font-bold text-foreground">Visit Us</div>
                    <div className="text-foreground/70 font-medium">Dasmesh Nagar, Gali No.12<br/>Joura Phatak, Amritsar</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 h-48 bg-white/50 border-2 border-dashed border-pest-green/30 rounded-2xl flex items-center justify-center overflow-hidden relative">
              <MapPin className="h-10 w-10 text-pest-green/40 absolute z-0" />
              <span className="font-bold text-pest-dark/50 z-10">Google Maps Integration Here</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
