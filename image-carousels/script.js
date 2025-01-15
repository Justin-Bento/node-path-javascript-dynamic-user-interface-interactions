const carouselContainer = document.querySelector(".image-carousels");
const carouselItems = [
  "apples",
  "Bananas",
  "Citron",
  "Date",
  "Elderberry",
  "Fig",
];

carouselItems.forEach((item) => {
  let newElement = document.createElement("div");
  newElement.textContent = item;
  newElement.classList.add("carousel-item");
  carouselContainer.appendChild(newElement);
});
