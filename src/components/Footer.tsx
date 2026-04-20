import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-pest-dark text-pest-light pt-16 pb-8">
      <div className="container grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex gap-2 items-center mb-4">
            <span className="font-extrabold text-2xl text-white">Rudra Shield Eco Pest Management</span>
          </div>
          <p className="text-sm text-pest-light/90 max-w-sm mb-6 leading-relaxed">
            Professional & eco-friendly pest control services serving Amritsar. Your safety and peace of mind are our top priorities.
          </p>
        </div>
        
        <div>
          <h2 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Our Services</h2>
          <ul className="space-y-3 text-sm text-pest-light/90">
            <li><Link href="/services/termite-control" className="hover:text-pest-accent transition-colors">Termite Treatment</Link></li>
            <li><Link href="/services/rodent-control" className="hover:text-pest-accent transition-colors">Rodent Control</Link></li>
            <li><Link href="/services/general-pest-control" className="hover:text-pest-accent transition-colors">General Pest Control</Link></li>
            <li><Link href="/services/insects-fogging" className="hover:text-pest-accent transition-colors">Fogging Services</Link></li>
            <li><Link href="/services/sanitization" className="hover:text-pest-accent transition-colors">Sanitization</Link></li>
          </ul>
        </div>
        
        <div>
          <h2 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Contact Us</h2>
          <ul className="space-y-4 text-sm text-pest-light/90">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-pest-accent shrink-0 mt-0.5" />
              <span>Dasmesh Nagar, Gali No.12, Joura Phatak, Amritsar</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-pest-accent shrink-0 mt-0.5" />
              <span>support@rudrashieldpestmanagement.in</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-pest-accent shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span>+91 97985-63175</span>
                <span>+91 73208-48351</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-pest-light/80">
        <p>&copy; {new Date().getFullYear()} Rudra Shield Eco Pest Management. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Developed by{" "}
          <a
            href="https://www.sorabyte.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pest-accent hover:underline font-semibold"
          >
            Sorabyte
          </a>
        </p>
      </div>
    </footer>
  );
}
