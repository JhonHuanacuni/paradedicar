import { ArrowUpRight, Files, Link2, MessagesSquare, PenLine } from "lucide-react";
import { actionLinks } from "../config/site.js";

const ICONS = {
  pen: PenLine,
  files: Files,
  link: Link2,
  messages: MessagesSquare,
};

function isExternal(href) {
  return /^https?:\/\//i.test(href);
}

export default function ActionLinks() {
  return (
    <section className="catalog">
      <h2 className="catalog__label">Catálogo</h2>
      <nav className="actions" aria-label="Códigos y dedicatorias">
        {actionLinks.map((link, index) => {
          const external = isExternal(link.href);
          const Icon = ICONS[link.icon];

          return (
            <a
              key={link.id}
              className="offer"
              href={link.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="offer__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="offer__body">
                <span className="offer__kicker">{link.kicker}</span>
                <span className="offer__title">
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                  {link.label}
                </span>
                {link.hint ? (
                  <span className="offer__hint">{link.hint}</span>
                ) : null}
              </span>
              <ArrowUpRight
                className="offer__arrow"
                size={18}
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
          );
        })}
      </nav>
    </section>
  );
}
