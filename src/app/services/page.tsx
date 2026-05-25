import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Our Services",
  description: "Explore our wide range of eco-friendly, organic pest control and sanitization services at Rudra Shield Eco Pest Management.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center bg-green-50 w-full overflow-x-hidden">
      <div className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-center text-gray-600 mb-12">Comprehensive pest control solutions tailored to your needs</p>
      </div>
      <ServicesSection />
    </div>
  );
}
