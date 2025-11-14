export default function Home({ onDiscover }) {
  return (
    <div className="home">
      <section className="home-intro">
        <h2>Bienvenue sur Boutique Domotique</h2>
        <p>Tous les appareils pour une maison intelligente</p>
      </section>

      <section className="home-features">
        <div className="feature">
          <h3>🏠 Qualité Premium</h3>
          <p>Appareils de marques reconnus</p>
        </div>
        <div className="feature">
          <h3>💳 Paiement Sécurisé</h3>
          <p>Transactions 100% sécurisées</p>
        </div>
        <div className="feature">
          <h3>📦 Livraison Rapide</h3>
          <p>Livraison en 24-48h</p>
        </div>
      </section>

      <section className="home-cta">
        <h2>Prêt à commencer ?</h2>
        <button className="btn-discover" onClick={onDiscover}>
          Voir les produits
        </button>
      </section>
    </div>
  );
}
