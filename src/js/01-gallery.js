// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItem = document.querySelector('.gallery');

function createGalleryItems(items) {
  const markup = items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
           />
         </a>
       </div>`;
    })
    .join('');
  return markup;
}

console.log(galleryItems);
galleryItem.insertAdjacentHTML('afterbegin', createGalleryItems(galleryItems));
galleryItem.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
