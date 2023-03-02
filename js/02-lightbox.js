import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(({ preview, description, original }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" loading = "lazy"/>
</a>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsEl);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {});
