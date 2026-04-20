import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "Product Insects & Fogging - Punjab Ecopest Control",
  description: "Intensive fogging services to eliminate flying insects and protect stored products from infestations.",
};

export default function InsectsFoggingPage() {
  return (
    <ServiceDetailPage
      title="Product Insects & Fogging"
      badge="Warehouses & Storage Units"
      image="/images/insectsandfogging.png"
      overview="Stored product pests and flying insects can devastate warehouses, food processing units, and commercial kitchens. Our intensive fogging service uses thermal and cold fogging technology to penetrate every corner of your premises, delivering complete knockdown of flying insects and stored product pests with minimal disruption to your operations."
      causes={[
        { title: "Poor Storage Practices", description: "Improperly sealed bags, damaged packaging, and overcrowded storage create ideal conditions for stored product insects like weevils and grain beetles." },
        { title: "Contaminated Raw Materials", description: "Infested incoming goods and raw materials can introduce pests directly into your storage facility, rapidly spreading to clean stock." },
        { title: "High Humidity & Warmth", description: "Warm, humid storage environments accelerate insect breeding cycles, leading to rapid population explosions inside warehouses." },
        { title: "Inadequate Cleaning", description: "Residual food dust, spills, and debris in storage areas provide ample nutrition for product insects to thrive and multiply." },
      ]}
      prevention={[
        "Inspect all incoming goods for signs of insect infestation before storage",
        "Store products in sealed, pest-proof containers or packaging",
        "Maintain good ventilation and humidity control in storage areas",
        "Rotate stock regularly using the FIFO (First In, First Out) method",
        "Clean storage areas thoroughly, removing all food debris and dust",
        "Implement an Integrated Pest Management (IPM) program with regular monitoring",
        "Install insect light traps to monitor and capture flying insects",
      ]}
      solutions={[
        { title: "Thermal Fogging", description: "High-temperature fogging that generates a dense insecticidal smoke cloud penetrating deep into shelves, pallets, and all corners of the storage facility." },
        { title: "Cold (ULV) Fogging", description: "Ultra-low volume misting for sensitive environments where heat cannot be used — delivers fine insecticidal droplets that remain airborne for extended kill time." },
        { title: "Fumigation with Aluminum Phosphide", description: "For severe stored product infestations, controlled phosphine fumigation eliminates all life stages of insects including eggs and larvae." },
        { title: "Residual Spraying", description: "Post-fogging residual insecticide application on walls and surfaces to provide continued protection against re-infestation." },
      ]}
      accentColor="#16a34a"
    />
  );
}
