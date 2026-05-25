import ProcessSection from "@/components/sections/ProcessSection";

export const metadata = {
  title: "Our Process",
  description: "Understand our step-by-step eco-friendly pest control and management process at Rudra Shield Eco Pest Management.",
};

export default function ProcessPage() {
  return (
    <div className="flex flex-col items-center bg-green-50 w-full overflow-x-hidden">
      <div className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-4">Our Process</h1>
        <p className="text-center text-gray-600 mb-12">How we deliver effective pest control solutions</p>
      </div>
      <ProcessSection />
    </div>
  );
}
