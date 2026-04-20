"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, AlertTriangle, ShieldCheck, Wrench, Phone } from "lucide-react";

interface Cause {
  title: string;
  description: string;
}

interface Solution {
  title: string;
  description: string;
}

interface ServiceDetailPageProps {
  title: string;
  badge: string;
  image: string;
  overview: string;
  causes: Cause[];
  prevention: string[];
  solutions: Solution[];
  accentColor?: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function ServiceDetailPage({
  title,
  badge,
  image,
  overview,
  causes,
  prevention,
  solutions,
}: ServiceDetailPageProps) {
  return (
    <div className="w-full bg-green-50 min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-pest-dark via-green-800 to-pest-green pt-10 pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1"
            >
              <span className="inline-block bg-pest-accent text-pest-dark text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                {badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                {overview}
              </p>
              <a
                href="tel:+919798563175"
                className="inline-flex items-center gap-2 bg-pest-accent hover:bg-yellow-400 text-pest-dark font-bold px-7 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Book This Service
              </a>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="w-52 h-52 md:w-64 md:h-64 flex items-center justify-center bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl flex-shrink-0"
            >
              <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className="object-contain drop-shadow-xl"
                style={{ width: "auto", height: "auto", maxWidth: "180px", maxHeight: "180px" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container px-4 md:px-6 mx-auto py-16 space-y-16">

        {/* Causes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-pest-dark">Causes</h2>
              <p className="text-foreground/60 text-sm">What leads to this infestation?</p>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {causes.map((cause, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-red-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-xl bg-red-50 text-red-500 font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{cause.title}</h3>
                    <p className="text-foreground/65 text-sm leading-relaxed">{cause.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prevention */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-100">
              <ShieldCheck className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-pest-dark">Prevention Tips</h2>
              <p className="text-foreground/60 text-sm">How to keep pests away naturally</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm"
          >
            <ul className="space-y-4">
              {prevention.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-foreground/75 text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-green-100">
              <Wrench className="h-6 w-6 text-pest-green" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-pest-dark">Our Solutions</h2>
              <p className="text-foreground/60 text-sm">Professional treatments we provide</p>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-xl bg-pest-light text-pest-green font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{solution.title}</h3>
                    <p className="text-foreground/65 text-sm leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-pest-dark to-pest-green rounded-3xl p-10 text-center shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Ready to get rid of pests for good?
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Contact our experts today for a free inspection and customized treatment plan. We serve residential and commercial clients across Amritsar and Punjab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919798563175"
              className="inline-flex items-center justify-center gap-2 bg-pest-accent hover:bg-yellow-400 text-pest-dark font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="h-4 w-4" />
              Call Us Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Send Enquiry
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
