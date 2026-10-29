import React, { useState } from 'react';
import './App.css';

const carsData = [
  {
    id: 1,
    name: 'BMW M4 Competition',
    category: 'Sport',
    price: '$250',
    per: 'kuniga',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    specs: { transmission: 'Avtomat', fuel: 'Benzin', seats: '4 o\'rin' }
  },
  {
    id: 2,
    name: 'Mercedes-Benz G63 AMG',
    category: 'SUV',
    price: '$400',
    per: 'kuniga',
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=800&q=80',
    specs: { transmission: 'Avtomat', fuel: 'Benzin', seats: '5 o\'rin' }
  },
  {
    id: 3,
    name: 'Tesla Model S Plaid',
    category: 'Elektromobil',
    price: '$200',
    per: 'kuniga',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    specs: { transmission: 'Avtomat', fuel: 'Elektr', seats: '5 o\'rin' }
  },
  {
    id: 4,
    name: 'Porsche 911 Carrera',
    category: 'Sport',
    price: '$350',
    per: 'kuniga',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80',
    specs: { transmission: 'Avtomat', fuel: 'Benzin', seats: '2 o\'rin' }
  },
  {
    id: 5,
    name: 'Range Rover Sport',
    category: 'SUV',
    price: '$300',
    per: 'kuniga',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    specs: { transmission: 'Avtomat', fuel: 'Dizel', seats: '5 o\'rin' }
  },
  {
    id: 6,
    name: 'Audi RS6 Avant',
    category: 'Universal',
    price: '$220',
    per: 'kuniga',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    specs: { transmission: 'Avtomat', fuel: 'Benzin', seats: '5 o\'rin' }
  }
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalCar, setModalCar] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const categories = ['Barchasi', 'Sport', 'SUV', 'Elektromobil', 'Universal'];

  const filteredCars = carsData.filter(car => {
    const matchesCategory = selectedCategory === 'Barchasi' || car.category === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setModalCar(null);
    }, 2500);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h2>LUXE<span>DRIVE</span></h2>
        </div>
        <nav className="nav-links">
          <a href="#home">Bosh sahifa</a>
          <a href="#fleet">Avtomobillar</a>
          <a href="#about">Biz haqimizda</a>
          <a href="#contact">Aloqa</a>
        </nav>
        <button className="cta-btn" onClick={() => alert('Bog‘lanish markazi: +998 71 123-45-67')}>Bog‘lanish</button>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Orzuingizdagi mashinani <span>ijaraga oling</span></h1>
          <p>Shahhar bo'ylab yoki sayohat uchun eng zo'r zamonaviy avtomobillar sizni kutmoqda. Ishonchli, qulay va tezkor.</p>
          
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Mashina nomini kiriting (masalan: BMW, Tesla...)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">Qidirish</button>
          </div>
        </div>
      </section>

      {/* Biz haqimizda Section */}
      <section className="about-section" id="about">
        <div className="about-content">
          <h2>Biz Haqimizda</h2>
          <p>LuxeDrive — bu shunchaki avtomobil ijarasi xizmati emas, balki sizning qulayligingiz va xavfsizligingizni ta'minlaydigan ishonchli hamkor. Biz mijozlarimizga eng so'nggi rusumdagi, mukammal holatdagi sport va premium avtomobillarni eng qulay shartlarda taklif etamiz.</p>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="fleet-section" id="fleet">
        <div className="section-title">
          <h2>Bizning Avtopark</h2>
          <p>O'zingizga mos toifadagi avtomobilni tanlang</p>
        </div>

        {/* Categories Filter */}
        <div className="categories">
          {categories.map((cat, index) => (
            <button 
              key={index} 
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="cars-grid">
          {filteredCars.length > 0 ? (
            filteredCars.map(car => (
              <div className="car-card" key={car.id}>
                <div className="car-img-wrapper">
                  <span className="car-tag">{car.category}</span>
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="car-details">
                  <h3>{car.name}</h3>
                  <div className="car-specs">
                    <span>⚡ {car.specs.transmission}</span>
                    <span>⛽ {car.specs.fuel}</span>
                    <span>💺 {car.specs.seats}</span>
                  </div>
                  <div className="car-footer">
                    <div className="price">
                      <strong>{car.price}</strong> <span>/ {car.per}</span>
                    </div>
                    <button className="book-btn" onClick={() => setModalCar(car)}>Ijara olish</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-cars">
              <p>Hech qanday avtomobil topilmadi.</p>
            </div>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      {modalCar && (
        <div className="modal-overlay" onClick={() => setModalCar(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalCar(null)}>&times;</button>
            {bookingSuccess ? (
              <div className="success-message">
                <h3>Tabriklaymiz! 🎉</h3>
                <p>Buyurtmangiz qabul qilindi. Operatorimiz tez orada siz bilan bog'lanadi.</p>
              </div>
            ) : (
              <div>
                <h2>{modalCar.name} ni band qilish</h2>
                <p className="modal-price">Narxi: <strong>{modalCar.price}</strong> / kun</p>
                <form onSubmit={handleBookingSubmit} className="booking-form">
                  <div className="form-group">
                    <label>Ismingiz</label>
                    <input type="text" placeholder="Azizbek" required />
                  </div>
                  <div className="form-group">
                    <label>Telefon raqamingiz</label>
                    <input type="tel" placeholder="+998 90 123 45 67" required />
                  </div>
                  <div className="form-group">
                    <label>Ijara boshlanish sanasi</label>
                    <input type="date" required />
                  </div>
                  <button type="submit" className="submit-btn">Tasdiqlash</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <h3>LUXE<span>DRIVE</span></h3>
          <p>O'zbekistondagi eng zamonaviy va ishonchli rent-a-car xizmati.</p>
          <p className="copyright">&copy; 2026 LuxeDrive. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;