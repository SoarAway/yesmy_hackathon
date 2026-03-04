export default function MobileMenu({ items, onClose }) {
  return (
    <div className="fixed inset-x-0 top-16 z-50 flex justify-end px-4">
      <nav className="max-h-[calc(100vh-5rem)] w-full max-w-xs overflow-y-auto rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
        <div className="mb-2 px-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 md:hidden">
          Menu
        </div>
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 md:hidden"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
