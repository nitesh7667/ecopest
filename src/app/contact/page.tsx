import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us - Punjab Ecopest Control",
  description: "Get in touch with Punjab Ecopest Control for your pest control needs",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center bg-green-50 w-full overflow-x-hidden">
      <div className="pt-20">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">Reach out to us for any inquiries or service requests</p>
      </div>
      <ContactSection />
    </div>
  );
}
