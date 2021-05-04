import images from "./gallery-items.js";

const setGallery = document.querySelector(".gallery");

images.forEach(image => {
  setGallery.insertAdjacentHTML("beforeend", `<li class="gallery__item"><a class="gallery__link" href=${image.original}>
  <img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description}></a></li>`)
  
})

const onOpenModal = document.querySelector(".lightbox");
const onCloseModal = document.querySelector(".lightbox__button");
const modalImg = document.querySelector(".lightbox__image");
const backdrop = document.querySelector(".lightbox__overlay");
const linkEl = document.querySelector(".gallery__link");
const imgGallery = document.querySelector(".gallery__image");
const itemGallery = document.querySelector(".gallery__item");

/*const  onEmage = () => {
  
 console.log("ОППА");
  
  //onOpenModal.classList.toggle("is-open");
  //onCloseModal.classList.toggle("is-open");
  
  //modalImg.src = event.target.dataset.source;
  
};*/

const onEmage = (event) => {
  event.preventDefault();
  onOpenModal.classList.toggle("is-open");
  modalImg.src = event.currentTarget.dataset.source;
  linkEl.href = "";
};

imgGallery.addEventListener("click", onEmage);

const onClose = () => {
onOpenModal.classList.toggle("is-open");
};

onCloseModal.addEventListener("click", onClose);

