import { useEffect, useState } from "react";
import HeaderNav from "./components/HeaderNav";
import IntroSplash from "./components/IntroSplash";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import AiChatbotSection from "./components/sections/AiChatbotSection";
import DealsSection from "./components/sections/DealsSection";
import EcosystemSection from "./components/sections/EcosystemSection";
import HeroSection from "./components/sections/HeroSection";
import {
  desktopNavItems,
  deals,
  footerLinkGroups,
  mobileNavItems,
  quickPromptItems,
} from "./data/landingContent";
import yesLogo from "./yes_logo.png";
import heroBannerPrimary from "./5g-advanced-deals-banner-desktop.webp";
import heroBannerSecondary from "./ajak-en-offer-banner-en.webp";

const INTRO_SPLASH_MS = 3400;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntroBanner, setShowIntroBanner] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntroBanner(false);
    }, INTRO_SPLASH_MS);

    return () => {
      clearTimeout(introTimer);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  if (showIntroBanner) {
    return <IntroSplash bannerImage={heroBannerSecondary} logoImage={yesLogo} />;
  }

  return (
    <div className="relative bg-white text-gray-900">
      <HeaderNav
        logoImage={yesLogo}
        navItems={desktopNavItems}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
      />

      {isMenuOpen ? (
        <MobileMenu
          items={mobileNavItems}
          onClose={() => setIsMenuOpen(false)}
        />
      ) : null}

      <main className="hide-scrollbar min-h-screen overflow-y-auto scroll-smooth md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
        <HeroSection bannerImage={heroBannerPrimary} />
        <DealsSection deals={deals} />
        <AiChatbotSection quickPromptItems={quickPromptItems} />
        <EcosystemSection />
        <Footer linkGroups={footerLinkGroups} />
      </main>
    </div>
  );
}
