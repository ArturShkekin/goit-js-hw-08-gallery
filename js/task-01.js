import images from "./gallery-items.js";

const setGallery = document.querySelector(".js-gallery");
const listMarkUp = createGallery(images);
const onOpenModal = document.querySelector(".lightbox");
const modalImg = document.querySelector(".lightbox__image");
const onCloseModal = document.querySelector(".lightbox__button");

setGallery.insertAdjacentHTML("beforeend", listMarkUp);
setGallery.addEventListener("click", setGalleryContainerClick);

function createGallery(images) {
  return images.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`;
  }).join("");
}

function setGalleryContainerClick(evt) {
  evt.preventDefault();
  const elementGallery = evt.target.classList.contains("gallery__image");
  if (!elementGallery) {
    return;
  }
  onOpenModal.classList.toggle("is-open");
  modalImg.src = evt.target.dataset.source;
}

const onClose = () => {
  onOpenModal.classList.toggle("is-open");
  modalImg.src = "";
}

onCloseModal.addEventListener("click", onClose);

