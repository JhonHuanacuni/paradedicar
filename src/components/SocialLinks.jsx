import { Github } from "lucide-react";
import { socialLinks } from "../config/site.js";
import { BrandIcon } from "./BrandIcon.jsx";

function isExternal(href) {
  return /^https?:\/\//i.test(href);
}

export default function SocialLinks() {
  return (
    <nav className="social" aria-label="Redes sociales">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          className={`social__link social__link--${link.id}`}
          href={link.href}
          aria-label={link.label}
          {...(isExternal(link.href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {link.id === "github" ? (
            <Github strokeWidth={2.25} aria-hidden="true" />
          ) : (
            <BrandIcon name={link.id} />
          )}
        </a>
      ))}
    </nav>
  );
}
