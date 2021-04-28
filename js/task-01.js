import images from "./gallery-items.js"

const setGallery = document.querySelector(".gallery");

images.forEach(image => {
  const listString = `<li class="gallery__item"><a class="gallery__link" href=${image.original}>
  <img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description}></a></li>`;
  setGallery.innerHTML += listString;
})
