import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';



import Navbaruno from './view/navbar/navbaruno.js';
import Carrusel from './view/carrusel/carrusel.js';
import Contacto from './view/contacto/contact.js';
import Tablet from './view/tablet/tablet.js';
import Footer from './view/footer/footer.js';
import Parallazx from './view/parallax/parallaxfont.js';


//import './view/css/all-fontawesome.min.css';
//import './view/css/animate.min.css';

//import './view/css/feather.min.css';
//import './view/css/flaticon.css';
//import './view/css/jquery-ui.min.css';
//import './view/css/magnific-popup.min.css';
//import './view/css/nice-select.min.css';
//import './view/css/owl.carousel.min.css';
import './view/css/navbaruno.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import './view/js/main.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Navbaruno />
      <Carrusel />

      <Contacto />
      <Tablet />

      <Parallazx/>
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
