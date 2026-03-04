export default function Footer({ linkGroups }) {
  return (
    <footer className="snap-start border-t border-gray-800 bg-gray-950 text-gray-200">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {linkGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-gray-300">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} YES. All rights reserved.</p>
          <p>Built for YES 5G Hackathon prototype experience.</p>
        </div>
      </div>
    </footer>
  );
}
