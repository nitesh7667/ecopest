import Link from "next/link";
import { Bug, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#7373734b] bg-white  border-border/40   shadow-sm ">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Punjab Ecopest" className="h-17 w-auto" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex gap-8">
          <Link href="/" className="text-sm font-semibold transition-colors hover:text-pest-green text-foreground/80">Home</Link>
          <Link href="/services" className="text-sm font-semibold transition-colors hover:text-pest-green text-foreground/80">Services</Link>
          <Link href="/about" className="text-sm font-semibold transition-colors hover:text-pest-green text-foreground/80">About</Link>
          <Link href="/process" className="text-sm font-semibold transition-colors hover:text-pest-green text-foreground/80">Our Process</Link>
          <Link href="/contact" className="text-sm font-semibold transition-colors hover:text-pest-green text-foreground/80">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+919798563175" className="hidden md:flex items-center gap-2 group">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pest-light group-hover:bg-pest-accent/20 transition-colors">
              <Phone className="h-4 w-4 text-pest-dark" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-medium text-foreground/50 uppercase">Call us anytime</span>
              <span className="text-sm font-bold text-pest-dark">+91 97985-63175</span>
            </div>
          </a>
          <a href="tel:+919798563175" className="bg-pest-accent hover:bg-yellow-500 text-pest-dark shadow-sm text-sm font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 inline-flex items-center gap-2">
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
