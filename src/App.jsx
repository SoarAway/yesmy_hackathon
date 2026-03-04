import { useEffect, useState } from "react";
import yesLogo from "./yes_logo.png";

const menuItems = ["Devices", "5G Plans", "Broadband", "Gaming", "Support"];

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

  return (
    <div className="relative bg-white text-gray-900">
      <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4">
          <img src={yesLogo} alt="YES logo" className="h-9 w-auto" />
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="text-xl leading-none">{isMenuOpen ? "x" : "≡"}</span>
          </button>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 flex h-screen w-full flex-col bg-white px-6 pt-24">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700"
            aria-label="Close navigation menu"
          >
            <span className="text-xl leading-none">x</span>
          </button>
          <nav className="flex flex-1 flex-col justify-center gap-5">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-2xl border border-gray-200 bg-white px-5 py-4 text-center text-xl font-semibold text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      ) : null}

      <main className="hide-scrollbar h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="relative flex h-screen snap-start items-center justify-center px-6 pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(244,244,245,0.95),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(243,244,246,0.95),transparent_40%)]" />
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
              Yes 5G Hackathon MVP
            </p>
            <h1 className="text-5xl font-black leading-tight text-gray-900 sm:text-6xl">
              Uncap Yourself
            </h1>
            <p className="mt-4 max-w-md text-base text-gray-600 sm:text-lg">
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

        <section className="flex h-screen snap-start items-center justify-center px-4 pt-16">
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
                  className="w-[82vw] shrink-0 snap-start rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:w-[420px]"
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

        <section className="flex h-screen snap-start items-center justify-center px-6 pt-16">
          <div className="mx-auto w-full max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-black text-gray-900 sm:text-4xl">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["Coverage", "Speed Test", "Reload", "Switch to YES"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-2xl border border-gray-200 bg-white px-4 py-8 text-center text-sm font-semibold text-gray-900 shadow-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="flex h-screen snap-start items-center justify-center px-6 pt-16">
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
