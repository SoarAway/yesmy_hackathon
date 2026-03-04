import { useEffect, useState } from "react";
import yesLogo from "./yes_logo.png";
import heroBannerPrimary from "./5g-advanced-deals-banner-desktop.webp";
import heroBannerSecondary from "./ajak-en-offer-banner-en.webp";

const primaryNavItems = ["Devices", "5G Plans", "Broadband", "Gaming", "Support"];
const quickMenuItems = ["Personal", "Enterprise", "Learning"];
const mobileMenuItems = [...primaryNavItems, "Quick Tools", ...quickMenuItems];
const quickPromptItems = [
  "Find best 5G plan for gaming",
  "Compare phone + plan bundles",
  "Check coverage near me",
  "Recommend family broadband setup",
];

const deals = [
  {
    title: "iPhone 17 with YES Infinite",
    price: "From RM139/month",
    description: "Unlimited 5G + device installment",
    imageWebp:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=70&fm=webp",
    imageAvif:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=70&fm=avif",
  },
  {
    title: "Samsung S26 Switch Deal",
    price: "Save up to RM600",
    description: "Port-in bonus with YES 5G plans",
    imageWebp:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=70&fm=webp",
    imageAvif:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=70&fm=avif",
  },
  {
    title: "YES 5G Home Broadband",
    price: "From RM58/month",
    description: "High speed home internet for family streaming",
    imageWebp:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=70&fm=webp",
    imageAvif:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=70&fm=avif",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntroBanner, setShowIntroBanner] = useState(true);

  const getNavHref = (item) => {
    if (item === "Quick Tools") {
      return "#ai-chatbot";
    }
    return "#";
  };

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntroBanner(false);
    }, 3400);

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
    return (
      <div className="fixed inset-0 z-[100] overflow-hidden bg-black">
        <img
          src={heroBannerSecondary}
          alt="YES 5G full-screen promo"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/35 to-black/60" />
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center px-6 text-center">
          <img src={yesLogo} alt="YES logo" className="h-12 w-auto sm:h-14" />
          <p className="mt-4 animate-pulse text-xs font-bold uppercase tracking-[0.26em] text-white/90">
            Loading Offers...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white text-gray-900">
      <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <img src={yesLogo} alt="YES logo" className="h-9 w-auto" />
            <nav className="hide-scrollbar hidden max-w-[52vw] items-center gap-2 overflow-x-auto whitespace-nowrap md:flex">
              {primaryNavItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-full px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  {item}
                </a>
              ))}
              <a
                href="#ai-chatbot"
                className="rounded-full border border-gray-900 bg-gray-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-black"
              >
                Quick Tools
              </a>
            </nav>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700"
            aria-label="Open personal menu"
            aria-expanded={isMenuOpen}
          >
            <span className="text-xl leading-none">{isMenuOpen ? "x" : "≡"}</span>
          </button>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-x-0 top-16 z-50 flex justify-end px-4">
          <nav className="w-full max-w-xs rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
            <div className="mb-2 px-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 md:hidden">
              Menu
            </div>
            {mobileMenuItems.map((item) => (
              <a
                key={item}
                href={getNavHref(item)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            {quickMenuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="hidden rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 md:block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      ) : null}

      <main className="hide-scrollbar min-h-screen overflow-y-auto scroll-smooth md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
        <section className="relative flex h-[58vh] snap-start items-center justify-center px-6 pt-16 sm:h-[62vh]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={heroBannerPrimary}
              alt="YES 5G promo banner"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/45" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-100">
              Yes 5G Hackathon MVP
            </p>
            <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl">
              Uncap Yourself
            </h1>
            <p className="mt-4 max-w-md text-base text-gray-100 sm:text-lg">
              Malaysia&apos;s 5G network without limits
            </p>
            <button
              type="button"
              className="mt-8 rounded-full bg-yesPink px-8 py-3 text-base font-bold text-white shadow-[0_12px_36px_rgba(255,15,138,0.45)]"
            >
              Explore Deals
            </button>
          </div>
        </section>

        <section className="flex min-h-[72vh] snap-start items-center justify-center px-4 py-10 pt-20 sm:min-h-[78vh] md:h-screen md:py-0 md:pt-16">
          <div className="w-full max-w-6xl">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Deals Hub</h2>
              <p className="mt-2 text-sm text-gray-600">
                Swipe horizontally to browse 5G deals
              </p>
            </div>

            <div className="hide-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-6 px-1 pb-4">
              {deals.map((deal) => (
                <article
                  key={deal.title}
                  className="w-[88vw] shrink-0 snap-start rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:w-[420px]"
                >
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <picture>
                      <source srcSet={deal.imageAvif} type="image/avif" />
                      <source srcSet={deal.imageWebp} type="image/webp" />
                      <img
                        src={deal.imageWebp}
                        alt={deal.title}
                        loading="lazy"
                        decoding="async"
                        className="h-48 w-full object-cover"
                      />
                    </picture>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900">{deal.title}</h3>
                    <p className="mt-1 text-base font-semibold text-yesPink">{deal.price}</p>
                    <p className="mt-2 text-sm text-gray-600">{deal.description}</p>
                    <button
                      type="button"
                      className="mt-4 rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-900"
                    >
                      Buy Now
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="ai-chatbot"
          className="flex min-h-[72vh] snap-start items-center justify-center bg-gray-50 px-4 py-12 md:h-screen md:px-6"
        >
          <div className="w-full max-w-6xl rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Quick Tools</p>
                <h2 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">YES AI Assistant</h2>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  Ask once and get the right plan, bundle, and coverage guidance instantly.
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                Live Advisor
              </span>
            </div>

            <div className="mb-5 flex flex-wrap gap-2">
              {quickPromptItems.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-100 sm:text-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3 sm:p-4">
              <div className="space-y-3">
                <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white px-3 py-2 text-sm text-gray-700 shadow-sm sm:max-w-[70%]">
                  I stream, game, and work remotely. What&apos;s the best YES plan for me?
                </div>
                <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-gray-900 px-3 py-2 text-sm text-white shadow-sm sm:max-w-[72%]">
                  I recommend YES Infinite Plus: high-priority 5G data, hotspot support, and device bundle savings.
                </div>
                <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white px-3 py-2 text-sm text-gray-700 shadow-sm sm:max-w-[70%]">
                  Great. Can you compare it with a budget option under RM60?
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <input
                  type="text"
                  placeholder="Ask YES AI anything about plans, coverage, and devices..."
                  className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none ring-0 placeholder:text-gray-400 focus:border-gray-400"
                />
                <button
                  type="button"
                  className="h-11 shrink-0 rounded-xl bg-gray-900 px-5 text-sm font-bold text-white transition hover:bg-black"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex min-h-[62vh] snap-start items-center justify-center px-6 py-12 pt-20 md:h-screen md:py-0 md:pt-16">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">YES 5G Ecosystem</h2>
            <p className="mt-4 max-w-xl text-gray-600">
              Broadband, cloud gaming, and always-on 5G experiences built around your
              daily digital life.
            </p>
            <button
              type="button"
              className="mt-8 rounded-full border border-gray-300 px-7 py-3 text-sm font-bold text-gray-900"
            >
              Discover More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
