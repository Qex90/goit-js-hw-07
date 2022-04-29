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
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </div>`;
  })
  .join("");

refs.gallery.insertAdjacentHTML("afterbegin", makeGalleryItems);
refs.gallery.addEventListener("click", onGalleryClick);
function onGalleryClick(e) {
  e.preventDefault();
  const img = e.target.dataset.source;
  const instance = basicLightbox.create(
    `<img
      src="${img}"
    />`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onClickEscape);

        function onClickEscape(e) {
          if (e.key === "Escape") {
            instance.close();
          }
        }
      },
    }
  );
  instance.show();
}
