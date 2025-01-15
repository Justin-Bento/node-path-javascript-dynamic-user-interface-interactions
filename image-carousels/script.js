const carouselContainer = document.querySelector(".image-carousels");
const carouselItems = [
  { fruitName: "apples", fruitColor: "red" },
  { fruitName: "Bananas", fruitColor: "yellow" },
  { fruitName: "Citron", fruitColor: "green" },
  { fruitName: "Date", fruitColor: "brown" },
  { fruitName: "Elderberry", fruitColor: "purple" },
  { fruitName: "False Mangosteen", fruitColor: "black" },
];

carouselItems.forEach((item) => {
  let newElement = document.createElement("div");
  newElement.textContent = item.fruitName;
  newElement.style.backgroundColor = item.fruitColor;
  newElement.style.display = "none";
  newElement.style.grid = "1fr";
  newElement.style.placeContent = "center";
  newElement.style.width = "100%";
  newElement.style.height = "90vh";
  newElement.classList.add("carousel-item");
  carouselContainer.appendChild(newElement);
});

let currentIndex = 0;

carouselContainer.children[0].style.display = "grid";
