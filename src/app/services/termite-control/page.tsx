import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "Anti Termite Treatment - Punjab Ecopest Control",
  description: "Professional anti-termite treatment for pre and post construction. Long-lasting barriers against destructive termite colonies.",
};

export default function TermiteControlPage() {
  return (
    <ServiceDetailPage
      title="Anti Termite Treatment"
      badge="Pre & Post Construction"
      image="/images/termite.png"
      overview="Termites are silent destroyers that can cause massive structural damage to your property before you even realize they are there. Our Anti Termite Treatment provides powerful, long-lasting protection using government-approved eco-friendly chemicals that create an impenetrable barrier around your property."
      causes={[
        { title: "Moisture & Dampness", description: "Termites are highly attracted to moist wood and soil. Leaking pipes, poor drainage, and high humidity create perfect breeding ground for termite colonies." },
        { title: "Wood-to-Soil Contact", description: "Direct contact between wooden structures and soil provides easy access routes for subterranean termites to enter your building." },
        { title: "Cracks in Foundation", description: "Even tiny cracks in the foundation, walls, or utility pipes serve as entry points for termites to infiltrate your property." },
        { title: "Wooden Debris", description: "Piles of wood, mulch, or timber kept near your home attract and harbour termite colonies that eventually invade your structure." },
      ]}
      prevention={[
        "Fix all plumbing leaks and ensure proper drainage around the property",
        "Avoid stacking firewood or lumber against your home's walls",
        "Keep gutters clean and direct water away from the foundation",
        "Seal all cracks in the foundation, walls, and around utility entry points",
        "Maintain proper ventilation in crawl spaces to reduce moisture",
        "Use treated or naturally resistant wood for construction and renovation",
        "Schedule annual professional inspections to detect early signs of infestation",
      ]}
      solutions={[
        { title: "Pre-Construction Soil Treatment", description: "Chemical barriers applied to soil before slab pouring, preventing termites from ever entering the building structure." },
        { title: "Post-Construction Treatment", description: "Drilling and injecting termiticide into the foundation, walls, and soil around existing structures for complete protection." },
        { title: "Anti-Termite Baiting System", description: "Strategically placed bait stations that attract, infect, and eliminate entire termite colonies at the source." },
        { title: "Wood Treatment", description: "Spraying and injection of wood preservatives to protect furniture and wooden fixtures from termite damage." },
      ]}
      accentColor="#16a34a"
    />
  );
}
