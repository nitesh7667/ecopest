import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919798563175"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 sm:p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -inset-2 rounded-full bg-green-500/20 animate-ping group-hover:hidden"></div>
      <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
    </a>
  );
}
