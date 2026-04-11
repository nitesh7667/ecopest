"use client";

import { Leaf, ShieldCheck, Clock, DollarSign } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-24 flex justify-center bg-pest-dark text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container px-4 md:px-6"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-6">Why Choose Us?</h2>
            <div className="h-1.5 w-24 bg-pest-accent mb-8 rounded-full"></div>
            <p className="text-lg text-pest-light/80 mb-8 leading-relaxed">
              We do not just kill pests; we implement sustainable solutions. Our operations strictly utilize approved materials ensuring absolute safety.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/10 hover:bg-white/20 transition-colors">
              <Leaf className="h-8 w-8 text-pest-accent mb-4" />
              <h4 className="font-bold text-xl mb-2">Eco-Friendly</h4>
              <p className="text-sm text-pest-light/70">100% safe chemicals that are harsh on pests, soft on earth.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/10 hover:bg-white/20 transition-colors">
              <ShieldCheck className="h-8 w-8 text-pest-accent mb-4" />
              <h4 className="font-bold text-xl mb-2">Family Safe</h4>
              <p className="text-sm text-pest-light/70">Completely secure for your children and pets across the house.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/10 hover:bg-white/20 transition-colors">
              <Clock className="h-8 w-8 text-pest-accent mb-4" />
              <h4 className="font-bold text-xl mb-2">Quick Response</h4>
              <p className="text-sm text-pest-light/70">Same day reliable service to handle urgent infestations.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/10 hover:bg-white/20 transition-colors">
              <DollarSign className="h-8 w-8 text-pest-accent mb-4" />
              <h4 className="font-bold text-xl mb-2">Affordable</h4>
              <p className="text-sm text-pest-light/70">Premium service quality that fits well within your budget.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
