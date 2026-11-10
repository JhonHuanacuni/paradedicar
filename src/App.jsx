import AmbientBackground from "./components/AmbientBackground.jsx";
import Profile from "./components/Profile.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import ActionLinks from "./components/ActionLinks.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <AmbientBackground />
      <main className="stage" id="inicio">
        <article className="sheet">
          <Profile />
          <SocialLinks />
          <ActionLinks />
          <Footer />
        </article>
      </main>
    </>
  );
}
