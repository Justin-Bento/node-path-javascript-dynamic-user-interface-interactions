const carouselContainer = document.querySelector(".image-carousels");
const carouselItems = [
  { fruitName: "apples", fruitColor: "red" },
  { fruitName: "Bananas", fruitColor: "yellow" },
  { fruitName: "Citron", fruitColor: "green" },
  { fruitName: "Date", fruitColor: "brown" },
  { fruitName: "Elderberry", fruitColor: "purple" },
  { fruitName: "False Mangosteen", fruitColor: "black" },
];

let currentIndex = 0;

carouselItems.forEach((item) => {
  let newElement = document.createElement("div");
  newElement.textContent = item.fruitName;
  newElement.style.backgroundColor = item.fruitColor;
  newElement.style.display = "none";
  newElement.style.placeContent = "center";
  newElement.style.width = "100%";
  newElement.style.height = "90vh";
  newElement.classList.add("carousel-item");
  carouselContainer.appendChild(newElement);
});

carouselContainer.children[0].style.display = "grid";

function changeItem() {
  carouselContainer.children[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselContainer.children[currentIndex].style.display = "grid";
}

setInterval(changeItem, 2000);
