import { 
  Lightbulb, 
  Thermometer, 
  Plug, 
  Camera, 
  Radar, 
  Wifi,
  Settings 
} from 'lucide-react';

const iconMap = {
  'Éclairage': Lightbulb,
  'Température': Thermometer,
  'Prises': Plug,
  'Sécurité': Camera,
  'Capteurs': Radar,
  'Hub': Wifi,
  'default': Settings,
};

export default function ProductCard({ product }) {
  const IconComponent = iconMap[product.category] || iconMap.default;

  return (
    <div className="product-card">
      <div className="product-icon">
        <IconComponent size={56} strokeWidth={1.5} />
      </div>
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="description">{product.description}</p>
      <div className="product-footer">
        <span className="price">{product.price}€</span>
        <button className="btn-add">Ajouter</button>
      </div>
    </div>
  );
}
