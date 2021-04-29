import images from "./gallery-items.js"

const setGallery = document.querySelector(".gallery");

images.forEach(image => {
  setGallery.insertAdjacentHTML("beforeend", `<li class="gallery__item"><a class="gallery__link" href=${image.original}>
  <img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description}></a></li>`)
  
})

const openModalWindow = document.querySelector(".lightbox");

const closeModalWindow = document.querySelector(".lightbox__button");

const backdrop = document.querySelector(".lightbox__overlay");
const toggleBackdrop = () => alert();

setGallery.firstElementChild.addEventListener("click", toggleBackdrop);
//closeModalWindow.addEventListener("click", toggleBackdrop);
