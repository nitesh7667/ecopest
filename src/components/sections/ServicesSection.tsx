"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  {
    href: "/services/termite-control",
    image: "/images/termite.png",
    alt: "Anti Termite",
    title: "Anti Termite Treatment",
    badge: "Pre & Post Construction",
    description: "Protect your property foundation. We provide long-lasting barriers against destructive termite colonies.",
    list: null,
  },
  {
    href: "/services/rodent-control",
    image: "/images/rodentcontrol.png",
    alt: "Rodent Control",
    title: "Rodent Control Treatment",
    badge: null,
    description: "Advanced baiting and strategic trapping solutions to quickly eradicate mice and rats from your premises.",
    list: null,
  },
  {
    href: "/services/general-pest-control",
    image: "/images/generalpestcontrol.png",
    alt: "General Pest Control",
    title: "General Pest Control",
    badge: "Residential & Commercial",
    description: null,
    list: ["Mosquitoes", "Cockroaches", "Ants & Houseflies"],
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    href: "/services/insects-fogging",
    image: "/images/insectsandfogging.png",
    alt: "Product Insects & Fogging",
    title: "Product Insects & Fogging",
    badge: null,
    description: "Intensive fogging services to eliminate flying insects and protect stored products from infestations.",
    list: null,
    wide: true,
  },
  {
    href: "/services/sanitization",
    image: "/images/sanitization.png",
    alt: "Sanitization & Disinfection",
    title: "Sanitization & Disinfection",
    badge: null,
    description: "Comprehensive microbial protection to ensure your living spaces remain hygienic and extremely safe.",
    list: null,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 flex justify-center bg-background relative">
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
          {services.map((service) => (
            <motion.div
              key={service.href}
              variants={fadeInUp}
              className={(service as any).colSpan ? (service as any).colSpan : ""}
            >
              <Link
                href={service.href}
                className="group bg-green-50 flex flex-col p-8 border border-green-700/60 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full block"
              >
                <div className={`flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative ${(service as any).wide ? "h-32 w-42" : "h-32 w-32"}`}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={(service as any).wide ? 150 : 110}
                    height={110}
                    className="object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">{service.title}</h3>
                {service.badge ? (
                  <p className="text-xs font-semibold text-pest-green mb-2">{service.badge}</p>
                ) : (
                  <p className="text-xs font-semibold text-transparent mb-2">-</p>
                )}
                {service.description && (
                  <p className="text-foreground/70 leading-relaxed flex-grow text-sm">{service.description}</p>
                )}
                {service.list && (
                  <ul className="text-foreground/70 leading-relaxed flex-grow space-y-2 mb-2 font-medium text-sm">
                    {service.list.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pest-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex items-center gap-1 text-pest-green text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
