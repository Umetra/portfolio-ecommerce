import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import About from './pages/About';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleExplore = () => {
    navigate('/shop');
  };

  return (
    <div className="app">
      <Header />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero onExplore={handleExplore} />
              <Home onDiscover={handleExplore} />
            </>
          } 
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
