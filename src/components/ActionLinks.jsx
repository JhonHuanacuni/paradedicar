import {
  Bell,
  CircleCheck,
  Gift,
  Heart,
  Star,
  TreePine,
  WandSparkles,
} from "lucide-react";
import { actionLinks } from "../config/site.js";
import { BrandIcon } from "./BrandIcon.jsx";

const ICONS = {
  gift: Gift,
  spark: WandSparkles,
  heart: Heart,
  star: Star,
  tree: TreePine,
  check: CircleCheck,
  bell: Bell,
};

function isExternal(href) {
  return /^https?:\/\//i.test(href);
}

function ActionIcon({ name, accent, size = 18 }) {
  if (name === "whatsapp") {
    return (
      <span className={`action-brand action-icon--${accent}`} aria-hidden="true">
        <BrandIcon name="whatsapp" />
      </span>
    );
  }

  const Icon = ICONS[name];
  return (
    <Icon
      className={`action-icon action-icon--${accent}`}
      size={size}
      strokeWidth={2.25}
      aria-hidden="true"
    />
  );
}

function RoofSnow() {
  return (
    <svg
      className="roof-snow"
      viewBox="0 0 300 36"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#c5d9ee"
        d="M6 24 C18 12 38 7 62 11 C86 15 104 5 130 8 C156 11 174 18 198 13 C224 8 246 4 272 10 C292 15 298 18 298 24 C298 30 286 33 272 29 C254 24 238 20 216 23 C194 26 176 18 152 20 C128 22 112 26 90 22 C68 18 48 23 30 25 C18 27 10 28 6 24 Z"
      />
      <path
        fill="#ffffff"
        d="M6 21 C18 9 38 4 62 8 C86 12 104 2 130 5 C156 8 174 15 198 10 C224 5 246 1 272 7 C292 12 298 15 298 21 C298 26 286 29 272 25 C254 20 238 16 216 19 C194 22 176 14 152 16 C128 18 112 22 90 18 C68 14 48 19 30 21 C18 23 10 24 6 21 Z"
      />
    </svg>
  );
}

export default function ActionLinks() {
  return (
    <nav className="actions" aria-label="Códigos y dedicatorias">
      {actionLinks.map((link) => {
        const external = isExternal(link.href);

        return (
          <a
            key={link.id}
            className={`action-link${link.pulse ? " action-link--pulse" : ""}`}
            href={link.href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <RoofSnow />
            <span className="action-link__content">
              <span className="action-link__line">
                <ActionIcon name={link.icon} accent={link.accent} />
                {link.label}
                {link.trailing ? (
                  <ActionIcon
                    name={link.trailing.icon}
                    accent={link.trailing.accent}
                    size={16}
                  />
                ) : null}
              </span>
              {link.hint ? (
                <span className="action-link__hint">
                  {link.hint}
                  {link.hintIcons?.map((item) => (
                    <ActionIcon
                      key={item.icon}
                      name={item.icon}
                      accent={item.accent}
                      size={14}
                    />
                  ))}
                </span>
              ) : null}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
