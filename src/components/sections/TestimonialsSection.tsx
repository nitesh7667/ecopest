"use client";

import { ThumbsUp, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 flex justify-center bg-background border-t">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container px-4 md:px-6"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-pest-dark sm:text-4xl lg:text-5xl">What Our Customers Say</h2>
          <div className="h-1.5 w-24 bg-pest-accent mt-6 rounded-full mb-6"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-pest-light/30 border border-pest-green/20 relative">
            <ThumbsUp className="absolute top-8 right-8 h-8 w-8 text-pest-green/20" />
            <div className="flex text-pest-accent mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current"/>)}
            </div>
            <p className="text-foreground/80 italic mb-6 leading-relaxed">"Excellent service! They came the same day and got rid of our termite problem quickly. The staff was professional and explained everything."</p>
            <div className="font-bold text-foreground">Rahul S.</div>
            <div className="text-sm text-foreground/50">Amritsar</div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-pest-light/30 border border-pest-green/20 relative">
            <ThumbsUp className="absolute top-8 right-8 h-8 w-8 text-pest-green/20" />
            <div className="flex text-pest-accent mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current"/>)}
            </div>
            <p className="text-foreground/80 italic mb-6 leading-relaxed">"Very happy with their mosquito fogging. Finally, we can sit in our garden in the evening without worrying about bites."</p>
            <div className="font-bold text-foreground">Priya M.</div>
            <div className="text-sm text-foreground/50">Civil Lines</div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-pest-light/30 border border-pest-green/20 relative">
            <ThumbsUp className="absolute top-8 right-8 h-8 w-8 text-pest-green/20" />
            <div className="flex text-pest-accent mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current"/>)}
            </div>
            <p className="text-foreground/80 italic mb-6 leading-relaxed">"Eco-friendly chemicals really made a difference. I have two dogs and was worried, but the team ensured it was completely safe for pets."</p>
            <div className="font-bold text-foreground">Gurpreet K.</div>
            <div className="text-sm text-foreground/50">Ranjit Avenue</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
