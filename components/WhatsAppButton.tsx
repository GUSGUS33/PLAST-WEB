import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const wsNumber = "5491130213258";
  const wMessage = "Hola! Quiero cotizar discos soporte y saber más sobre envíos.";
  const url = `https://wa.me/${wsNumber}?text=${encodeURIComponent(wMessage)}`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-green-200 transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8 group-hover:animate-bounce" />
    </a>
  );
}
