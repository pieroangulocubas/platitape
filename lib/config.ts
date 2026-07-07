// Central config — change these values before launch

export const WA_PHONE = "51999999999"; // reemplaza con tu número real (+51 XXX XXX XXX)
export const WA_BASE_URL = `https://wa.me/${WA_PHONE}`;
export const WA_CHANNEL_URL = "https://whatsapp.com/channel/platitape";

export const WA_CONTACT_MSG = encodeURIComponent(
  "Hola, me interesa saber más sobre Platita.pe y cómo puedo invertir en bienes raíces."
);
export const WA_CONTACT_URL = `${WA_BASE_URL}?text=${WA_CONTACT_MSG}`;
