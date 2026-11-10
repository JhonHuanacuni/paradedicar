/**
 * Configuración central de Dreamsaph.
 *
 * TikTok ya usa el perfil real.
 * La venta vive en Buy Me a Coffee de Dreamsaph.
 * El grupo de WhatsApp sigue provisional hasta el enlace chat.whatsapp.com.
 */
export const site = {
  name: "Dreamsaph",
  title: "Dreamsaph | Software Engineer",
  role: "Software Engineer",
  phrase: "Códigos y cartas listos para dedicar.",
  description:
    "Dreamsaph. Códigos personalizados, cartas y links listos para dedicar y enviar.",
  year: 2026,
};

export const destinations = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com",
  facebook: "https://www.facebook.com",
  whatsapp: "https://www.whatsapp.com",
  tiktok: "https://www.tiktok.com/@dreamsaph",
  codigoPersonalizado: "https://buymeacoffee.com/dreamsaph/membership",
  codigosGratis: "https://buymeacoffee.com/dreamsaph/extras",
  linkPersonalizado: "https://buymeacoffee.com/dreamsaph/extras",
  grupoWhatsapp: "https://www.whatsapp.com",
};

export const socialLinks = [
  { id: "github", label: "GitHub", href: destinations.github },
  { id: "linkedin", label: "LinkedIn", href: destinations.linkedin },
  { id: "facebook", label: "Facebook", href: destinations.facebook },
  { id: "whatsapp", label: "WhatsApp", href: destinations.whatsapp },
  { id: "tiktok", label: "TikTok", href: destinations.tiktok },
];

export const actionLinks = [
  {
    id: "custom",
    kicker: "A medida",
    label: "Código Personalizado",
    hint: "Link listo para enviar",
    href: destinations.codigoPersonalizado,
    icon: "pen",
  },
  {
    id: "free",
    kicker: "Sin costo",
    label: "Códigos Completos GRATIS",
    href: destinations.codigosGratis,
    icon: "files",
  },
  {
    id: "create",
    kicker: "Herramienta",
    label: "Crea tu link personalizado",
    href: destinations.linkPersonalizado,
    icon: "link",
  },
  {
    id: "group",
    kicker: "Comunidad",
    label: "Grupo de WhatsApp",
    href: destinations.grupoWhatsapp,
    icon: "messages",
  },
];
