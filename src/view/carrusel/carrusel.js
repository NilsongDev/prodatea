import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './examplecarrusel';

import imgtest from '../img/imgteste.jpg';
import imgtest1 from '../img/imgtest1.jpg';

function carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={2000} >
        <ExampleCarouselImage text="First slide"  src={imgtest}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <ExampleCarouselImage text="Second slide"  src={imgtest1} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" src={imgtest}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carrusel;