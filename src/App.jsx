import { useState } from 'react'
import './App.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import imagen1 from './assets/imagen1.jpeg'
import imagen2 from './assets/imagen2.jpeg'
import imagen3 from './assets/imagen3.jpeg'
import imagen4 from './assets/imagen4.jpeg'
import imagen5 from './assets/imagen5.jpeg'
import imagen6 from './assets/imagen6.jpeg'
import imagen7 from './assets/imagen7.jpeg'
import imagen8 from './assets/imagen8.jpeg'
import imagen9 from './assets/imagen9.jpeg'
import imagen10 from './assets/imagen10.jpeg'
import imagen11 from './assets/imagen11.jpeg'
import imagen12 from './assets/imagen12.jpeg'
import imagen13 from './assets/imagen13.jpeg'
import imagen14 from './assets/imagen14.jpeg'
import imagen15 from './assets/imagen15.jpeg'
import imagen16 from './assets/imagen16.jpeg'
import whatsappIcon from './assets/whatsapp-icon.png' // Asegúrate de tener este icono en tu carpeta de assets
import React from 'react';
import Attractions from './Attractions';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Icono de menú */}
        </div>
        <ul className={menuOpen ? 'show' : ''}>
          <li><a href="#footer">Contacto</a></li> {/* Enlace al footer */}
          <li><a href="#carousel">Fotos</a></li> {/* Enlace al carrusel */}
          <li><a href="#map">Ubicación</a></li> {/* Enlace al mapa */}
          <li><a href="#attractions">Atracciones</a></li> {/* Enlace a las atracciones */}
        </ul>
      </div>
      <div className="portada">
        <div className="portada-content">
          <h1>Alquiler en San Clemente</h1>
          <div className="contact-text">
            <p>Consultá sin compromiso!</p>
            <a href="https://wa.me/5491157229652" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
            </a>
          </div>
        </div>
      </div>
      <div id="carousel" className="carousel-container"> {/* Agregar id al contenedor del carrusel */}
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <img src={imagen1} alt="Imagen 1" />
          </div>
          <div>
            <img src={imagen2} alt="Imagen 2" />
          </div>
          <div>
            <img src={imagen3} alt="Imagen 3" />
          </div>
          <div>
            <img src={imagen4} alt="Imagen 4" />
          </div>
          <div>
            <img src={imagen5} alt="Imagen 5" />
          </div>
          <div>
            <img src={imagen6} alt="Imagen 6" />
          </div>
          <div>
            <img src={imagen7} alt="Imagen 7" />
          </div>
          <div>
            <img src={imagen8} alt="Imagen 8" />
          </div>
          <div>
            <img src={imagen9} alt="Imagen 9" />
          </div>
          <div>
            <img src={imagen10} alt="Imagen 10" />
          </div>
          <div>
            <img src={imagen11} alt="Imagen 11" />
          </div>
          <div>
            <img src={imagen12} alt="Imagen 12" />
          </div>
          <div>
            <img src={imagen13} alt="Imagen 13" />
          </div>
          <div>
            <img src={imagen14} alt="Imagen 14" />
          </div>
          <div>
            <img src={imagen15} alt="Imagen 15" />
          </div>
          <div>
            <img src={imagen16} alt="Imagen 16" />
          </div>
        </Carousel>
      </div>
      <div id="attractions">
        <Attractions />
      </div>
      <div id="map" className="map-container"> {/* Agregar id al contenedor del mapa */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.639506639145!2d-56.72008568476956!3d-36.3566849804596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac7f1a3b9f1%3A0x2e2b2e2b2e2b2e2b!2sC.%2050%20Bis%20585%2C%20B7105%20San%20Clemente%20del%20Tuyu%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1633021234567!5m2!1ses!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <footer id="footer" className="footer"> {/* Agregar id al footer */}
        <div className="contact-text">
          <p>Consultá sin compromiso!</p>
        </div>
        <a href="https://wa.me/5491157229652" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
        </a>
      </footer>
    </div>
  )
}

export default App
