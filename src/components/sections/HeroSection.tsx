"use client";

import { ArrowRight, ShieldCheck, Leaf, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HeroSection() {
  return (
    <section className="w-full bg-green-50 py-16 md:py-24 ">
      <div className="container px-4 md:px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6 order-2 md:order-1"
        >
          {/* Badge */}
         

          {/* Heading */}
          <h1 className="text-2xl sm:text-5xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Safe & Eco-Friendly <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Pest Control Services
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-xl">
            Protect your home and business with certified pest control solutions.
            Fast, reliable, and completely safe for your family and environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="tel:+919798563175"
              className="hidden sm:inline-flex items-center justify-center rounded-full font-semibold bg-yellow-400 text-black hover:bg-yellow-500 h-12 px-6 shadow-md transition"
            >
              Call Now: 97985-63175
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full w-full md:w-auto max-w-[220px] md:max-w-none font-semibold border-2 border-green-700 text-green-700 active:bg-green-50 sm:border-none sm:bg-green-700 sm:text-white sm:hover:bg-green-800 sm:active:bg-green-800 h-16 sm:h-12 px-6 shadow-md transition"
            >
              Book Inspection
              <ArrowRight className="ml-2 h-7 w-7 -rotate-45 sm:h-5 sm:w-5 sm:rotate-0 transition-transform" />
            </a>
          </div>

          {/* Trust Points */}
          {/* <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-600 w-5 h-5" />
              Certified Experts
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="text-green-600 w-5 h-5" />
              Eco-Friendly
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-green-600 w-5 h-5" />
              Same Day Service
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT SIDE (IMAGE / ILLUSTRATION) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            {/* Background shape */}
         

            {/* Main Image */}
            <img
              src="/illustration1.png"
              alt="Pest Control Service"
              width="600"
              height="600"
              className="relative z-10   w-full max-w-sm md:max-w-xl object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}