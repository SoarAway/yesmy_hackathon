export default function IntroSplash({ bannerImage, logoImage }) {
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-black">
      <img src={bannerImage} alt="YES 5G full-screen promo" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/35 to-black/60" />
      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center px-6 text-center">
        <img src={logoImage} alt="YES logo" className="h-12 w-auto sm:h-14" />
        <p className="mt-4 animate-pulse text-xs font-bold uppercase tracking-[0.26em] text-white/90">
          Loading Offers...
        </p>
      </div>
    </div>
  );
}
