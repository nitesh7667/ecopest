"use client";

import { MapPin, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Initialize EmailJS (do this once)
  if (typeof window !== "undefined") {
    emailjs.init("kghY4QmJAaYv1v3q6");
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const result = await emailjs.sendForm(
        "service_ehlj3eg",
        "template_kmic0sn",
        form.current!,
        "kghY4QmJAaYv1v3q6"
      );

      if (result.status === 200) {
        setMessage("✓ Request submitted successfully! We'll call you back soon.");
        form.current?.reset();
        setTimeout(() => setMessage(""), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("✗ Failed to submit. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 flex justify-center bg-white border-t overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container px-4 md:px-6"
      >
        <div className="bg-pest-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <motion.div
            variants={fadeInUp}
            className="p-10 lg:p-16 lg:w-1/2 text-white"
          >
            <h2 className="text-3xl font-extrabold mb-2">
              Request an Inspection
            </h2>

            <p className="text-pest-light/90 mb-10">
              Fill out this quick form and we will call you back immediately.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-pest-light/90 mb-2 block">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pest-accent text-white placeholder-white/40"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone + Service */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-pest-light/90 mb-2 block">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pest-accent text-white placeholder-white/40"
                    placeholder="9876543210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service-select"
                    className="text-sm font-semibold text-pest-light/90 mb-2 block"
                  >
                    Service
                  </label>

                  <select
                    id="service-select"
                    name="service"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pest-accent text-white/80 appearance-none"
                  >
                    <option className="text-black">
                      General Pest
                    </option>

                    <option className="text-black">
                      Termites
                    </option>

                    <option className="text-black">
                      Rodents
                    </option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="text-sm font-semibold text-pest-light/90 mb-2 block">
                  Full Address
                </label>

                <input
                  type="text"
                  name="address"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pest-accent text-white placeholder-white/40"
                  placeholder="Your location..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-pest-light/90 mb-2 block">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pest-accent text-white placeholder-white/40"
                  placeholder="Describe your pest issue..."
                />
              </div>

              {message && (
                <div className={`p-3 rounded-lg text-center font-semibold ${message.includes("✓") ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}>
                  {message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pest-accent hover:bg-yellow-500 disabled:bg-yellow-400 text-pest-dark h-14 rounded-xl text-lg font-bold transition-all hover:scale-[1.02] shadow-xl mt-4"
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            variants={fadeInUp}
            className="bg-pest-light p-10 lg:p-16 lg:w-1/2 flex flex-col justify-between relative"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-pest-dark mb-8">
                Get In Touch Directly
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-pest-green shadow-sm">
                    <Phone className="h-6 w-6" />
                  </div>

                  <div>
                    <div className="font-bold text-foreground">
                      Call Us Anytime
                    </div>

                    <div className="text-lg font-extrabold text-pest-dark">
                      97985-63175
                    </div>

                    <div className="text-lg font-extrabold text-pest-dark">
                      73208-48351
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-pest-green shadow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>

                  <div>
                    <div className="font-bold text-foreground">
                      Visit Us
                    </div>

                    <div className="text-foreground/70 font-medium">
                      Dasmesh Nagar, Gali No.12
                      <br />
                      Joura Phatak, Amritsar
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className=" h-90 bg-white/50 border-2 border-dashed border-pest-green/30 rounded-2xl flex items-center justify-center overflow-hidden relative">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8826999999998!2d74.887478!3d31.6331523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e1b7b5a1c9%3A0x391903e1b7b5a1c9!2sDasmesh%20Nagar%2C%20Joura%20Phatak%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1622000000000"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}