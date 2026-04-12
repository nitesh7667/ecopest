"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 flex justify-center bg-background relative relative">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container px-4 md:px-6"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-pest-dark sm:text-4xl lg:text-5xl">Our Core Services</h2>
          <div className="h-1.5 w-24 bg-pest-accent mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl font-medium">We offer targeted, specialized treatments designed to eliminate pests fast while keeping your premises totally safe.</p>
        </motion.div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Service 1 */}
          <motion.div variants={fadeInUp} className="group bg-green-50 flex flex-col p-8 border border-green-700/60 rounded-3xl  shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-32 w-32 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative">
              <Image src="/images/termite.png" alt="Anti Termite" width={110} height={110} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">Anti Termite Treatment</h3>
            <p className="text-xs font-semibold text-pest-green mb-2">Pre & Post Construction</p>
            <p className="text-foreground/70 leading-relaxed flex-grow text-sm">Protect your property foundation. We provide long-lasting barriers against destructive termite colonies.</p>
          </motion.div>
          
          {/* Service 2 */}
          <motion.div variants={fadeInUp} className="group bg-green-50 flex flex-col p-8 border border-green-700/60 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-32 w-32 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative">
              <Image src="/images/rodentcontrol.png" alt="Rodent Control" width={110} height={110} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">Rodent Control Treatment</h3>
            <p className="text-xs font-semibold text-transparent mb-2">-</p> {/* Spacer */}
            <p className="text-foreground/70 leading-relaxed flex-grow text-sm">Advanced baiting and strategic trapping solutions to quickly eradicate mice and rats from your premises.</p>
          </motion.div>
          
          {/* Service 3 */}
          <motion.div variants={fadeInUp} className="group bg-green-50 flex flex-col p-8 border border-green-700/60 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="h-32 w-32 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative">
              <Image src="/images/generalpestcontrol.png" alt="General Pest Control" width={110} height={110} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">General Pest Control</h3>
            <p className="text-xs font-semibold text-pest-green mb-2">Residential & Commercial</p>
            <ul className="text-foreground/70 leading-relaxed flex-grow space-y-2 mb-2 font-medium text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-pest-accent" /> Mosquitoes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-pest-accent" /> Cockroaches</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-pest-accent" /> Ants & Houseflies</li>
            </ul>
          </motion.div>
          
          {/* Service 4 */}
          <motion.div variants={fadeInUp} className="group bg-green-50 flex flex-col p-8 border border-green-700/60 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-32 w-42 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative">
              <Image src="/images/insectsandfogging.png" alt="Product Insects & Fogging" width={150} height={110} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">Product Insects & Fogging</h3>
            <p className="text-foreground/70 leading-relaxed flex-grow mt-2 text-sm">Intensive fogging services to eliminate flying insects and protect stored products from infestations.</p>
          </motion.div>

          {/* Service 5 */}
          <motion.div variants={fadeInUp} className="group bg-green-50 flex flex-col p-8 border border-green-700/60 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-32 w-32 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative">
              <Image src="/images/sanitization.png" alt="Sanitization & Disinfection" width={110} height={110} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">Sanitization & Disinfection</h3>
            <p className="text-foreground/70 leading-relaxed flex-grow mt-2 text-sm">Comprehensive microbial protection to ensure your living spaces remain hygienic and extremely safe.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
