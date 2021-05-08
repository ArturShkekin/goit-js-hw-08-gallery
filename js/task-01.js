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
};

onCloseModal.addEventListener("click", onClose);







/*const onOpenModal = document.querySelector(".lightbox");
const onCloseModal = document.querySelector(".lightbox__button");
const modalImg = document.querySelector(".lightbox__image");
const backdrop = document.querySelector(".lightbox__overlay");
const linkEl = document.querySelector(".gallery__link");
const imgGallery = document.querySelector(".gallery__image");
const itemGallery = document.querySelector(".gallery__item");*/

/*const onOpen = (event) => {
  event.preventDefault();
  onOpenModal.classList.toggle("is-open");
  modalImg.src = event.target.dataset.source;
  linkEl.href = "";
};*/

/*imgGallery.addEventListener("click", onOpen);


const onClose = () => {
  onOpenModal.classList.toggle("is-open");
  modalImg.src = "";
};

onCloseModal.addEventListener("click", onClose);


const ulList = document.querySelector(".js-gallery");
ulList.addEventListener("click", handleNavClick);*/





/*function handleNavClick(event) {
  event.preventDefault();
  const target = event.target;
  console.log("event target: ", target); // посмотрите что тут
  // Проверяем тип узла, если не ссылка выходим из функции
  if (target.nodeName !== "Img") return;
  setActiveImg(target);
}

function setActiveImg(nextActiveImg) {
  const currentActiveImg = ulList.querySelector("a.is-open");
  if (currentActiveImg) {
    currentActiveImg.classList.remove("is-open");
  }
  nextActiveImg.classList.add("is-open");
}*/


/*const nav = document.querySelector(".js-nav");
nav.addEventListener("click", handleNavClick);

function handleNavClick(event) {
  event.preventDefault();
  const target = event.target;
  console.log("event target: ", target); // посмотрите что тут
  // Проверяем тип узла, если не ссылка выходим из функции
  if (target.nodeName !== "A") return;
  setActiveLink(target);
}


function setActiveLink(nextActiveLink) {
  const currentActiveLink = nav.querySelector("a.active");
  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }
  nextActiveLink.classList.add("active");
}*/