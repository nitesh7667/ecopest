import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "General Pest Control",
  description: "Comprehensive residential and commercial pest control for mosquitoes, cockroaches, ants, houseflies, and more in Amritsar.",
};

export default function GeneralPestControlPage() {
  return (
    <ServiceDetailPage
      title="General Pest Control"
      badge="Residential & Commercial"
      image="/images/generalpestcontrol.png"
      overview="General pests like cockroaches, mosquitoes, ants, and houseflies are a constant threat to health and hygiene in both homes and businesses. Our General Pest Control service uses targeted, eco-safe treatments to eliminate current infestations and create a long-term protection barrier — keeping your space pest-free year-round."
      causes={[
        { title: "Poor Sanitation", description: "Dirty kitchens, unwashed dishes, and food spills attract cockroaches, ants, and houseflies looking for easy food sources." },
        { title: "Standing Water", description: "Stagnant water in pots, drains, and gutters serves as a breeding ground for mosquitoes, enabling rapid population growth." },
        { title: "Cracks & Gaps", description: "Small openings in walls, floors, and around pipes allow ants, cockroaches, and other pests easy entry into your premises." },
        { title: "Waste & Organic Matter", description: "Garbage, food waste, and decaying organic matter attract a wide variety of pests seeking a food and nesting source." },
      ]}
      prevention={[
        "Keep kitchen surfaces, sinks, and floors clean and dry at all times",
        "Empty and clean dustbins regularly; use sealed bin lids",
        "Eliminate all sources of standing water around your home or business",
        "Seal gaps in walls, floors, and around plumbing entry points",
        "Store leftover food in airtight containers in the refrigerator",
        "Install window screens and door sweeps to prevent flying insect entry",
        "Keep drains clean and unclogged to prevent cockroach harborage",
      ]}
      solutions={[
        { title: "Residual Chemical Spraying", description: "Application of WHO-approved residual insecticides on walls, floors, and surfaces to create a long-lasting killing barrier." },
        { title: "Gel Baiting for Cockroaches", description: "Highly effective gel baits applied in cracks, crevices, and under appliances to eliminate cockroach colonies at the source." },
        { title: "Mosquito larviciding & adulticiding", description: "Treatment of water bodies with eco-safe larvicides combined with space spraying to knock down adult mosquito populations." },
        { title: "ULV (Ultra-Low Volume) Spraying", description: "Fine mist application of insecticide covering large areas of the premises to rapidly eliminate flying and crawling pests." },
      ]}
      accentColor="#16a34a"
    />
  );
}
