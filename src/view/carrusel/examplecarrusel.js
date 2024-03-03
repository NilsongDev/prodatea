import React from 'react';
import imgtest from '../img/imgteste.jpg';

const ExampleCarouselImage = ({ src, text }) => {
    return (
      <div className="example-carousel-image">
        <img src={src} alt={text} className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'cover' }}/>
      </div>
    );
  }

export default ExampleCarouselImage;