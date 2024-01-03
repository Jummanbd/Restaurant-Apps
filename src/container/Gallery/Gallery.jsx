import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery section_padding_t_b flex__center">
      <div className="container">
        <div className="app__gallery-content">
          <SubHeading title="Instagram" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button type="button" className="custom__button">View More</button>
        </div>
        <div class="gallery__wrap">
          <article class="gallery__item">
            <img src= {images.gallery05} alt="Fearless leader" />
          </article>
          <article class="gallery__item">
            <img src= {images.gallery02} alt="Southbank - Strike a Pose"  />
          </article>
          <article class="gallery__item">
            <img src= {images.gallery03} alt="Tower Bridge, light trails" />
          </article>
          <article class="gallery__item">
            <img src= {images.gallery04} alt="The Clyde Arc"/>
          </article>
          <article class="gallery__item">
            <img src= {images.gallery01} alt="Reflections at St Pauls"/>
          </article>
       </div>

      </div>
    </div>
  );
};

export default Gallery;