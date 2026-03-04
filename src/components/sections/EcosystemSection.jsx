export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="flex min-h-[58vh] snap-start items-center justify-center px-4 py-10 pt-20 sm:px-6 md:h-screen md:py-0 md:pt-16"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <h2 className="text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">YES 5G Ecosystem</h2>
        <p className="mt-4 max-w-xl text-sm text-gray-600 sm:text-base">
          Broadband, cloud gaming, and always-on 5G experiences built around your daily digital
          life.
        </p>
        <button
          type="button"
          className="mt-8 rounded-full border border-gray-300 px-7 py-3 text-sm font-bold text-gray-900"
        >
          Discover More
        </button>
      </div>
    </section>
  );
}
