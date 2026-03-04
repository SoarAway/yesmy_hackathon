function DealCard({ deal }) {
  return (
    <article className="w-[90vw] shrink-0 snap-start rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:w-[420px]">
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
  );
}

export default function DealsSection({ deals }) {
  return (
    <section
      id="deals"
      className="flex min-h-[68vh] snap-start items-center justify-center px-3 py-8 pt-20 sm:min-h-[78vh] sm:px-4 md:h-screen md:py-0 md:pt-16"
    >
      <div className="w-full max-w-6xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">Deals Hub</h2>
          <p className="mt-2 text-sm text-gray-600">Swipe horizontally to browse 5G deals</p>
        </div>

        <div className="hide-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-6 px-1 pb-4">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}
