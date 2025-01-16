const carouselContainer = document.querySelector(".image-carousels");
const carouselItems = [
  {
    fruitName: "apples",
    fruitColor: "red",
    fruitImage: "apple-fruit-image.jpg",
  },
  {
    fruitName: "Bananas",
    fruitColor: "yellow",
    fruitImage: "apple-fruit-image.jpg",
  },
  {
    fruitName: "Citron",
    fruitColor: "green",
    fruitImage: "apple-fruit-image.jpg",
  },
  {
    fruitName: "Date",
    fruitColor: "brown",
    fruitImage: "apple-fruit-image.jpg",
  },
  {
    fruitName: "Elderberry",
    fruitColor: "purple",
    fruitImage: "apple-fruit-image.jpg",
  },
  {
    fruitName: "False Mangosteen",
    fruitColor: "black",
    fruitImage: "apple-fruit-image.jpg",
  },
];

let currentIndex = 0;

carouselItems.forEach((item) => {
  let newElement = document.createElement("img");
  newElement.src = `/image-carousels/images/${item.fruitImage}`;
  newElement.alt = `An image of a ${item.fruitName}`;
  newElement.style.backgroundColor = item.fruitColor;
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
