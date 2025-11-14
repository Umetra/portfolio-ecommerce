import { useState } from 'react';
import ProductGrid from '../components/ProductGrid';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const products = [
    {
      id: 1,
      name: 'Ampoule Connectée WiFi',
      category: 'Éclairage',
      description: 'Contrôle luminosité et couleur via app mobile',
      price: 19.99,
      image: '💡',
    },
    {
      id: 2,
      name: 'Thermostat Intelligent',
      category: 'Température',
      description: 'Régule température automatiquement',
      price: 89.99,
      image: '🌡️',
    },
    {
      id: 3,
      name: 'Prise Connectée',
      category: 'Prises',
      description: 'Allume/éteint vos appareils à distance',
      price: 14.99,
      image: '🔌',
    },
    {
      id: 4,
      name: 'Caméra Surveillance HD',
      category: 'Sécurité',
      description: 'Vision nocturne + détection mouvements',
      price: 79.99,
      image: '📷',
    },
    {
      id: 5,
      name: 'Capteur Mouvement',
      category: 'Capteurs',
      description: 'Détecte mouvements et allume lumière',
      price: 24.99,
      image: '📡',
    },
    {
      id: 6,
      name: 'Hub Domotique',
      category: 'Hub',
      description: 'Centre de contrôle pour tous les appareils',
      price: 129.99,
      image: '🏠',
    },
  ];

  const categories = ['Tous', 'Éclairage', 'Température', 'Prises', 'Sécurité', 'Capteurs', 'Hub'];

  const filteredProducts = activeCategory === 'Tous'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Notre Boutique</h1>
        <p>Découvrez tous nos appareils domotiques</p>
      </div>

      <div className="container">
        <div className="filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
