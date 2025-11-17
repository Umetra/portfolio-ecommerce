import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="mobile-nav">
      <button 
        className="burger-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="mobile-menu">
          {location.pathname !== '/' && (
            <button 
              className="mobile-link"
              onClick={() => handleNavigate('/')}
            >
              Accueil
            </button>
          )}

          {location.pathname !== '/shop' && (
            <button 
              className="mobile-link"
              onClick={() => handleNavigate('/shop')}
            >
              Boutique
            </button>
          )}

          <button 
            className="mobile-link"
            onClick={() => handleNavigate('/about')}
          >
            À propos
          </button>
        </div>
      )}
    </div>
  );
}
