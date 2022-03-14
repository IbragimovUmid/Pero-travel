import React from 'react'
import './gallery.scss'
import GalleryCards from './GalleryCards/GalleryCards';

const Gallery = () => {
  return (
    <div>
      <div className='galery-div-name container'>
        <h1 className="galery-name">Галерея</h1>
        <h2 className="galery-title">Смотреть все</h2>
      </div>
      <GalleryCards/>
    </div>
  );
}

export default Gallery