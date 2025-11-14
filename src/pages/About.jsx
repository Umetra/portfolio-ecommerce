import { useState } from 'react';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation simple
    if (formData.name && formData.email && formData.message) {
      console.log('Formulaire envoyé:', formData);
      setSubmitted(true);
      
      // Réinitialise le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>À Propos de Nous</h1>
        <p>Votre partenaire de confiance en domotique</p>
      </div>

      <div className="container">
        <section className="about-content">
          <div className="about-info">
            <h2>Qui sommes-nous ?</h2>
            <p>
              Boutique Domotique est votre expert en solutions domotiques intelligentes. 
              Depuis des années, nous aidons les clients à transformer leurs maisons en 
              espaces connectés et automatisés pour plus de confort et de sécurité.
            </p>
            <p>
              Notre mission est de rendre la technologie accessible à tous, avec des produits 
              de qualité et un service client exemplaire.
            </p>
          </div>

          <div className="about-values">
            <h2>Nos Valeurs</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>🎯 Qualité</h3>
                <p>Produits premium sélectionnés avec soin</p>
              </div>
              <div className="value-item">
                <h3>💼 Professionnalisme</h3>
                <p>Service client réactif et attentionné</p>
              </div>
              <div className="value-item">
                <h3>🚀 Innovation</h3>
                <p>Toujours à la pointe de la technologie</p>
              </div>
              <div className="value-item">
                <h3>🔒 Fiabilité</h3>
                <p>Produits durables et garantis</p>
              </div>
            </div>
          </div>

          <section className="contact-section">
            <h2>Nous Contacter</h2>
            <p>Une question ? N'hésitez pas à nous laisser un message !</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                {submitted ? '✓ Message Envoyé !' : 'Envoyer'}
              </button>
            </form>

            {submitted && (
              <div className="success-message">
                Merci pour votre message ! Nous vous répondrons très bientôt.
              </div>
            )}
          </section>
        </section>
      </div>
    </div>
  );
}
