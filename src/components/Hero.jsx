export default function Hero({ onExplore }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Maison Intelligente</h2>
        <p>Tous les appareils domotiques que vous cherchez</p>
        <button className="hero-cta" onClick={onExplore}>
          Explorer la Boutique
        </button>
      </div>
    </section>
  );
}
