import { site } from "../config/site.js";
import Logo from "./Logo.jsx";

export default function Profile() {
  return (
    <header className="profile">
      <div className="lockup">
        <Logo />
        <div>
          <p className="eyebrow">Estudio de dedicatorias</p>
          <h1 className="profile__title">{site.name}</h1>
        </div>
      </div>
      <p className="profile__phrase">{site.phrase}</p>
    </header>
  );
}
