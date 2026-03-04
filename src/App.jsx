const deals = [
  {
    title: "YES Infinite 5G 58",
    detail: "Unlimited 5G data + hotspot from RM58/month",
    cta: "View Plan",
  },
  {
    title: "Switch to YES",
    detail: "Keep your number and enjoy up to 6 months rebates",
    cta: "Switch Now",
  },
];

const topTasks = [
  { label: "Pay Bill", value: "01" },
  { label: "Top Up", value: "02" },
  { label: "Coverage", value: "03" },
  { label: "Support", value: "04" },
];

const utilities = [
  "Coverage Checker",
  "Speed Test",
  "Reload",
  "Switch to YES",
  "Store Locator",
  "Track Order",
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">YES</div>
        <nav className="header-nav">
          <button type="button" className="ghost-btn">
            Plans
          </button>
          <button type="button" className="ghost-btn">
            Devices
          </button>
          <button type="button" className="ghost-btn">
            Support
          </button>
          <button type="button" className="menu-btn" aria-label="Open Menu">
            Menu
          </button>
        </nav>
      </header>

      <main className="snap-shell">
        <section className="snap-section hero">
          <p className="eyebrow">YES 5G POC LANDING</p>
          <h1>Uncap Yourself with Malaysia's Fast Everyday 5G</h1>
          <p className="hero-copy">
            A cleaner, conversion-first homepage concept built for speed, clarity,
            and one-tap actions.
          </p>
          <div className="hero-ctas">
            <button type="button" className="cta-primary">
              Shop Plans
            </button>
            <button type="button" className="cta-secondary">
              Top Up
            </button>
            <button type="button" className="cta-secondary">
              Pay Bill
            </button>
          </div>
        </section>

        <section className="snap-section tasks-section">
          <h2>Top Tasks</h2>
          <div className="tasks-row">
            {topTasks.map((task) => (
              <button key={task.label} type="button" className="task-tile">
                <span className="task-index">{task.value}</span>
                <span>{task.label}</span>
              </button>
            ))}
          </div>

          <div className="trust-strip" role="note" aria-label="Trust Signals">
            <span>Widest 5G coverage*</span>
            <span>Secure payments</span>
            <span>24/7 support</span>
          </div>
        </section>

        <section className="snap-section deals-section">
          <h2>Featured Offers</h2>
          <div className="deals-grid">
            {deals.map((deal) => (
              <article key={deal.title} className="deal-card">
                <h3>{deal.title}</h3>
                <p>{deal.detail}</p>
                <button type="button" className="cta-primary small">
                  {deal.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="snap-section utility-section">
          <h2>Everything in One Scroll</h2>
          <p>Flat navigation. Large touch targets. Zero nested dropdown clutter.</p>
          <div className="utility-grid">
            {utilities.map((item) => (
              <button key={item} type="button" className="utility-tile">
                {item}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="mobile-sticky">
        <button type="button">Pay Bill</button>
        <button type="button">Top Up</button>
        <button type="button">Coverage</button>
        <button type="button">Support</button>
      </footer>
    </div>
  );
}
