import SimpleLightbox from 'simplelightbox';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const makeGalleryArr = galleryItems.map(e => {
  const galarryItemEl = `
  <a class="gallery__item" href=${e.original}>
  <img class="gallery__image" src=${e.preview} alt=${e.description} />
</a>`;
  return galarryItemEl;
});

const makeGallery = makeGalleryArr.join('');
galleryEl.insertAdjacentHTML('afterbegin', makeGallery);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  navtext: ['<~', '~>'],
});
