import { useHeaderScroll } from '../hooks/useHeaderScroll';
import { useNavigate, useLocation } from 'react-router-dom';
import MobileNav from './MobileNav';

export default function Header() {
  const isScrolled = useHeaderScroll();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1>Boutique Domotique</h1>
        <p>Transformez votre maison en maison intelligente</p>
      </div>
      
      {/* Desktop Nav */}
      <nav className="header-nav">
        {location.pathname !== '/' && (
          <button className="nav-btn" onClick={() => navigate('/')}>
            Accueil
          </button>
        )}
        
        {location.pathname !== '/shop' && (
          <button className="nav-btn" onClick={() => navigate('/shop')}>
            Boutique
          </button>
        )}
        
        <button className="nav-btn" onClick={() => navigate('/about')}>
          À propos
        </button>
      </nav>

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
}
