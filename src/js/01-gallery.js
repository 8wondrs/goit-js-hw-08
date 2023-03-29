import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(
  ({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
  }
);

galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup.join(''));

const galleryBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
