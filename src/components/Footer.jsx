import { site } from "../config/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {site.year} {site.name}. Todos los derechos reservados.</p>
    </footer>
  );
}
