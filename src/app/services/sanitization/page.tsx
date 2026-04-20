import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "Sanitization & Disinfection - Punjab Ecopest Control",
  description: "Comprehensive microbial protection for homes and businesses. Keep your spaces hygienic and completely safe.",
};

export default function SanitizationPage() {
  return (
    <ServiceDetailPage
      title="Sanitization & Disinfection"
      badge="Homes, Offices & Clinics"
      image="/images/sanitization.png"
      overview="In today's world, thorough sanitization and disinfection go beyond just cleaning — they are essential for protecting your family, employees, and customers from harmful bacteria, viruses, and fungi. Our professional disinfection service uses hospital-grade, WHO-approved disinfectants applied with electrostatic spraying technology to cover every surface comprehensively."
      causes={[
        { title: "High-Touch Surfaces", description: "Door handles, switches, countertops, and shared equipment accumulate pathogens rapidly in busy homes, offices, and commercial spaces." },
        { title: "Poor Hygiene Practices", description: "Infrequent hand washing, improper food handling, and lack of routine surface cleaning allow microbial populations to build up significantly." },
        { title: "HVAC & Air Circulation", description: "Contaminated air conditioning units and poor ventilation can spread airborne pathogens throughout an entire building." },
        { title: "Post-Illness or Event Contamination", description: "Spaces occupied by sick individuals or following large gatherings harbour elevated pathogen loads requiring professional disinfection." },
      ]}
      prevention={[
        "Maintain regular cleaning routines for all surfaces, especially high-touch areas",
        "Ensure adequate ventilation and schedule regular HVAC filter cleaning",
        "Promote hand hygiene with hand sanitizer stations at key access points",
        "Use disinfectant wipes or sprays on shared equipment daily",
        "Educate household members and staff on proper sanitization protocols",
        "Schedule periodic professional disinfection treatments for high-risk areas",
        "Dispose of waste promptly and hygienically to prevent microbial growth",
      ]}
      solutions={[
        { title: "Electrostatic Disinfection Spraying", description: "Our electrostatic sprayers charge the disinfectant droplets so they wrap around and coat all surfaces evenly — including hard-to-reach areas." },
        { title: "Fogging & Misting Disinfection", description: "Chemical fogging delivers fine disinfectant mist that settles on all surfaces throughout the room, achieving complete coverage quickly." },
        { title: "Surface Wipe-Down Treatment", description: "Manual application of hospital-grade disinfectant on all high-touch surfaces including furniture, fixtures, and equipment." },
        { title: "HVAC & Duct Disinfection", description: "Treatment of air handling units and ductwork with antimicrobial agents to prevent the circulation of airborne pathogens." },
      ]}
      accentColor="#16a34a"
    />
  );
}
