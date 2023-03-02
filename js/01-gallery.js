import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(({ preview, description, original }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      loading = "lazy"
    />
  </a>
</div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsEl);

galleryEl.addEventListener("click", handleClickImage);

function handleClickImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    ` <img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape" || event.code === "Enter") {
      instance.close();
    }
  });
}
