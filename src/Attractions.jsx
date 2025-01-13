import React from 'react';
import mundoMarino from './assets/mundo-marino.jpg';
import lopez from './assets/lopez.jpg';
import parqueMunicipal from './assets/parqueMunicipal.jpg';
import puntaRasa from './assets/puntaRasa.jpg';
import vadinho from './assets/vadinho.jpg';
import termasMarinasPark from './assets/termasMarinasPark.jpg';
import puerto from './assets/Puerto.jpg';
import costaMaluco from './assets/costaMaluco.jpg';

const attractions = [
  { name: 'Mundo Marino', description: 'El oceanario más grande de Sudamérica.', image: mundoMarino, url: 'https://www.tripadvisor.com.ar/Attraction_Review-g312757-d1378678-Reviews-Mundo_Marino-San_Clemente_del_Tuyu_Province_of_Buenos_Aires_Central_Argentina.html' },
  { name: 'Termas Marinas', description: 'Un parque termal con diversas piscinas y actividades.', image: termasMarinasPark, url: 'https://www.tripadvisor.com.ar/Attraction_Review-g312757-d2358887-Reviews-Termas_Marinas_Park-San_Clemente_del_Tuyu_Province_of_Buenos_Aires_Central_Argent.html' },
  { name: 'Parque Municipal Vivero Cosme Argerich', description: 'Un hermoso parque con una gran variedad de flora.', image: parqueMunicipal, url: 'https://www.tripadvisor.com.ar/Attraction_Review-g312757-d3929015-Reviews-Parque_Municipal_Vivero_Cosme_Argerich-San_Clemente_del_Tuyu_Province_of_Buenos_A.html' },
  { name: 'Tapera de López', description: 'Un sitio histórico con vistas impresionantes.', image: lopez, url: 'https://www.tripadvisor.com.ar/Attraction_Review-g312757-d2359518-Reviews-Tapera_de_Lopez-San_Clemente_del_Tuyu_Province_of_Buenos_Aires_Central_Argentina.html' },
  { name: 'Vadinho', description: 'Un lugar para disfrutar de la gastronomía local.', image: vadinho, url: 'https://www.tripadvisor.com.ar/Attraction_Review-g312757-d3935820-Reviews-Vadinho-San_Clemente_del_Tuyu_Province_of_Buenos_Aires_Central_Argentina.html' },
  { name: 'Punta Rasa', description: 'Un lugar ideal para el avistamiento de aves.', image: puntaRasa, url: 'https://www.tripadvisor.com.ar/Attraction_Review-g312757-d2367557-Reviews-Punta_Rasa-San_Clemente_del_Tuyu_Province_of_Buenos_Aires_Central_Argentina.html' },
  { name: 'Puerto', description: 'El puerto de San Clemente.', image: puerto, url: 'https://www.tripadvisor.com.ar/Attraction_Review-g312757-d3929018-Reviews-Puerto_de_San_Clemente_del_Tuyu-San_Clemente_del_Tuyu_Province_of_Buenos_Aires_Ce.html' },
  { name: 'Costa Maluco', description: 'Un balneario con excelentes servicios.', image: costaMaluco, url: 'https://www.tripadvisor.com.ar/Attraction_Review-g312757-d9789387-Reviews-Balneario_Costa_Maluco-San_Clemente_del_Tuyu_Province_of_Buenos_Aires_Central_Arg.html' },
];

const Attractions = () => {
  return (
    <div className="attractions">
      <div className="attractions-grid">
        {attractions.map((attraction, index) => (
          <div key={index} className="card">
            <a href={attraction.url} target="_blank" rel="noopener noreferrer">
              <img src={attraction.image} alt={attraction.name} className="card-image" />
              <div className="card-content">
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attractions;
