import { galleryItems } from './gallery-items.js';
// Change code below this line

const basicLightbox = window.basicLightbox;
const galleryList = document.querySelector('.gallery');
const galleryMarkup = handleGalleryMarkup(galleryItems);
let instance = null;

 function handleGalleryMarkup (items) {
    return items.map(({ preview, original, description }) => {
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
    }).join("");
    
 }
 
//  console.log(galleryMarkup);

 galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
 galleryList.addEventListener('click', handleGalleryClick);

 function handleGalleryClick(event) {
  event.preventDefault();
    if(event.target.nodeName !== 'IMG') {
        return;
    }
    
    const modalImg = event.target.dataset.source;
    console.log(modalImg);
    const instance = basicLightbox.create(`
    <img src="${modalImg}" width="800" height="600">`);

instance.show();
 }
// function handleEscCloseModal(evt) {
//   if (evt.code === 'Escape') {
//     handleCloseModal();
//    }
//  }
// function handleCloseModal() {
//   window.removeEventListener('keydown', handleKeydown);
//   document.
// }
// function handleKeydown()