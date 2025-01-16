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
    fruitImage: "bananas-fruit-image.jpg",
  },
  {
    fruitName: "Citron",
    fruitColor: "green",
    fruitImage: "citron-fruit-image.jpg",
  },
  {
    fruitName: "Date",
    fruitColor: "brown",
    fruitImage: "date-fruit-image.jpg",
  },
  {
    fruitName: "Elderberry",
    fruitColor: "purple",
    fruitImage: "elderberry-fuit-image.jpg",
  },
  {
    fruitName: "False Mangosteen",
    fruitColor: "black",
    fruitImage: "falseMangosteen-fruit-image.jpg",
  },
];

let currentIndex = 0;
const carouselElements = [];

carouselItems.forEach((item) => {
  let newElement = document.createElement("img");
  newElement.src = `/image-carousels/images/${item.fruitImage}`; // Set the initial image
  newElement.alt = `An image of a ${item.fruitName}`;
  newElement.style.display = "none"; // Initially hide all images
  newElement.style.width = "100%";
  newElement.style.height = "90vh";
  newElement.classList.add("carousel-item");
  carouselContainer.appendChild(newElement);
  carouselElements.push(newElement); // Store each element in the array
});

carouselElements[0].style.display = "block"; // Show the first image

function changeItem() {
  carouselElements[currentIndex].style.display = "none"; // Hide the current image
  currentIndex = (currentIndex + 1) % carouselItems.length; // Move to the next item

  // Update the image src
  carouselElements[
    currentIndex
  ].src = `/image-carousels/images/${carouselItems[currentIndex].fruitImage}`;

  carouselElements[currentIndex].style.display = "block"; // Show the next image
}

setInterval(changeItem, 2000); // Change every 2 seconds
