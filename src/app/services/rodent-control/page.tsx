import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "Rodent Control Treatment - Punjab Ecopest Control",
  description: "Advanced baiting and trapping solutions to eradicate mice and rats from your home or business.",
};

export default function RodentControlPage() {
  return (
    <ServiceDetailPage
      title="Rodent Control Treatment"
      badge="Homes & Businesses"
      image="/images/rodentcontrol.png"
      overview="Rodents like rats and mice are not just a nuisance — they carry dangerous diseases, contaminate food supplies, and cause serious structural damage by gnawing through wires, insulation, and pipes. Our Rodent Control Treatment uses a multi-pronged approach to completely eliminate infestations and prevent their return."
      causes={[
        { title: "Food & Water Sources", description: "Unsecured food storage, open garbage bins, and standing water attract rodents seeking sustenance inside your premises." },
        { title: "Entry Gaps & Holes", description: "Mice can squeeze through gaps as small as a dime. Cracks in walls, gaps around pipes, and unsealed vents provide easy access." },
        { title: "Clutter & Harborage", description: "Accumulated clutter, cardboard boxes, and unused furniture provide warm nesting sites that rodents readily exploit." },
        { title: "Seasonal Migration", description: "As temperatures drop, rodents actively seek warm shelter indoors, leading to increased infestations in colder months." },
      ]}
      prevention={[
        "Store all food in airtight, rodent-proof containers",
        "Seal gaps, cracks, and holes in walls, floors, and around pipes with steel wool or concrete",
        "Keep your premises clean and clutter-free, especially storage areas",
        "Dispose of garbage regularly in sealed bins so it does not attract rodents",
        "Trim trees and shrubs away from the building to eliminate climbing routes",
        "Install door sweeps and rodent-proof mesh on vents and openings",
        "Inspect deliveries and incoming goods for signs of rodent presence",
      ]}
      solutions={[
        { title: "Rodent Baiting Stations", description: "Strategically placed tamper-resistant bait stations containing highly effective rodenticide to eliminate entire rodent populations." },
        { title: "Snap & Electronic Trapping", description: "Professional-grade traps placed in rodent runways and activity zones for quick, humane capture and removal." },
        { title: "Exclusion & Proofing", description: "Identifying and sealing all entry points using professional-grade materials to permanently block rodent access." },
        { title: "Fumigation for Severe Infestations", description: "For large-scale commercial infestations, controlled fumigation treatments deliver immediate and thorough results." },
      ]}
      accentColor="#16a34a"
    />
  );
}
