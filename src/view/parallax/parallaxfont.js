
import React from 'react';
import { Parallax, Background } from 'react-parallax';




function Parallazx(){


  return(
    <div>
    <Parallax
      blur={10}
      bgImage={'https://picsum.photos/id/237/200/300'} 
      bgImageAlt="the cat"
      strength={200}
    >
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '500px', width:'auto' }} />
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={'https://picsum.photos/id/237/200/300'}
      bgImageAlt="the dog"
      strength={200}
    >
      Blur transition from min to max
      <div style={{ height: '200px' }} />
    </Parallax>
    <Parallax strength={300}>
      <div>Use the background component for custom elements</div>
      <Background className="custom-bg">
        <img src="https://picsum.photos/id/237/200/300" alt="fill murray" />
      </Background>
    </Parallax>
  </div>






  );

}

export default Parallazx;