import { site } from "../config/site.js";
import Logo from "./Logo.jsx";

export default function Profile() {
  return (
    <header className="profile">
      <Logo />
      <h1 className="profile__title">{site.title}</h1>
      <p className="profile__phrase">{site.phrase}</p>
    </header>
  );
}
