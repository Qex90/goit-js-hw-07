import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const refs = {
  gallery: document.querySelector(".gallery"),
};
const makeGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${original}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
    </div>`;
  })
  .join("");

refs.gallery.insertAdjacentHTML("afterbegin", makeGalleryItems);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
