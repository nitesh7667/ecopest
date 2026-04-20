import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Services - Punjab Ecopest Control",
  description: "Explore our eco-friendly pest control services",
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
