/**
 * Configuración central de Dreamsaph.
 *
 * TikTok ya usa el perfil real.
 * PROVISIONAL: los cuatro botones de venta apuntan a destinos temporales
 * hasta que reemplaces estas URL por las páginas y el grupo definitivos.
 *
 * Código personalizado: "https://tu-pagina-de-dedicatorias"
 * Códigos gratis:       "https://tu-pagina-de-codigos"
 * Link personalizado:   "https://tu-pagina-para-crear-link"
 * Grupo de WhatsApp:    "https://chat.whatsapp.com/TU_GRUPO"
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
  codigoPersonalizado: "https://www.tiktok.com/@dreamsaph",
  codigosGratis: "https://www.tiktok.com/@dreamsaph",
  linkPersonalizado: "https://www.tiktok.com/@dreamsaph",
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
    label: "Código Personalizado",
    hint: "(Link listo para enviar)",
    href: destinations.codigoPersonalizado,
    icon: "gift",
    accent: "red",
    hintIcons: [
      { icon: "spark", accent: "gold" },
      { icon: "heart", accent: "red" },
    ],
    pulse: true,
  },
  {
    id: "free",
    label: "Códigos Completos GRATIS",
    href: destinations.codigosGratis,
    icon: "spark",
    accent: "gold",
    trailing: { icon: "star", accent: "gold" },
  },
  {
    id: "create",
    label: "Crea tu link personalizado",
    href: destinations.linkPersonalizado,
    icon: "tree",
    accent: "green",
    trailing: { icon: "check", accent: "green" },
  },
  {
    id: "group",
    label: "Grupo de WhatsApp",
    href: destinations.grupoWhatsapp,
    icon: "bell",
    accent: "gold",
    trailing: { icon: "whatsapp", accent: "green" },
  },
];
