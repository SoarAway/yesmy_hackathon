export default function HeaderNav({ logoImage, navItems, isMenuOpen, onToggleMenu }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img src={logoImage} alt="YES logo" className="h-9 w-auto" />
          <nav className="hide-scrollbar hidden max-w-[60vw] items-center gap-2 overflow-x-auto whitespace-nowrap md:flex lg:max-w-none">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                {item.label}
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
          onClick={onToggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 md:hidden"
          aria-label="Open personal menu"
          aria-expanded={isMenuOpen}
        >
          <span className="text-xl leading-none">{isMenuOpen ? "x" : "≡"}</span>
        </button>
      </div>
    </header>
  );
}
