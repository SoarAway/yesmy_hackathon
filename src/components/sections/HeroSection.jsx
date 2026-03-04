export default function HeroSection({ bannerImage }) {
  return (
    <section
      id="hero"
      className="relative flex h-[52vh] snap-start items-center justify-center px-4 pt-16 sm:h-[58vh] sm:px-6"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img src={bannerImage} alt="YES 5G promo banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/45" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-100">
          Yes 5G Hackathon MVP
        </p>
        <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
          Uncap Yourself
        </h1>
        <p className="mt-3 max-w-md px-1 text-sm text-gray-100 sm:text-base md:text-lg">
          Malaysia&apos;s 5G network without limits
        </p>
        <button
          type="button"
          className="mt-6 rounded-full bg-yesPink px-6 py-2.5 text-sm font-bold text-white shadow-[0_12px_36px_rgba(255,15,138,0.45)] sm:mt-8 sm:px-8 sm:py-3 sm:text-base"
        >
          Explore Deals
        </button>
      </div>
    </section>
  );
}
