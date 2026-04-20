"use client";

import { ShieldCheck, SprayCan, PenTool } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ProcessSection() {
  return (
    <section id="process" className="w-full py-24 flex justify-center bg-pest-light/30">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container px-4 md:px-6"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-pest-dark sm:text-4xl lg:text-5xl">Our 3-Step Process</h2>
          <div className="h-1.5 w-24 bg-pest-accent mt-6 rounded-full mb-6"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border/60 z-0"></div>
          
          <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
            <div className="h-24 w-24 rounded-full bg-white border-4 border-pest-light shadow-xl flex items-center justify-center mb-6 relative hover:scale-110 transition-transform">
              <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-pest-accent text-pest-dark font-black flex items-center justify-center">1</div>
              <PenTool className="h-10 w-10 text-pest-green" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Inspection</h3>
            <p className="text-foreground/70 font-medium">Thorough audit to identify pest entry points, scale of infestation, and environmental factors.</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
            <div className="h-24 w-24 rounded-full bg-white border-4 border-pest-light shadow-xl flex items-center justify-center mb-6 relative hover:scale-110 transition-transform">
              <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-pest-accent text-pest-dark font-black flex items-center justify-center">2</div>
              <SprayCan className="h-10 w-10 text-pest-green" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Treatment</h3>
            <p className="text-foreground/70 font-medium">Deployment of customized exact treatments targeting the root species without collateral damage.</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
            <div className="h-24 w-24 rounded-full bg-white border-4 border-pest-light shadow-xl flex items-center justify-center mb-6 relative hover:scale-110 transition-transform">
              <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-pest-accent text-pest-dark font-black flex items-center justify-center">3</div>
              <ShieldCheck className="h-10 w-10 text-pest-green" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Prevention</h3>
            <p className="text-foreground/70 font-medium">Sealing of access points and deploying long-term barriers to keep your property pest-free.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
