import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

export const metadata = {
  title: "About Us - Punjab Ecopest Control",
  description: "Learn why choose Punjab Ecopest Control for your pest management needs",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-green-50 w-full overflow-x-hidden">
      <div className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-4">Why Choose Us</h1>
        <p className="text-center text-gray-600 mb-12">Discover what makes us the best choice for pest control</p>
      </div>
      <WhyChooseUsSection />
    </div>
  );
}
