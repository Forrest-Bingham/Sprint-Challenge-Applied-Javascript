/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const newCarousel = document.createElement("div"),
    leftButton = document.createElement("button"),
    Image1 = document.createElement("img"),
    Image2 = document.createElement("img"),
    Image3 = document.createElement("img"),
    Image4 = document.createElement("img"),
    rightButton = document.createElement("button");

  newCarousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");
  Image1.classList.add("img");
  Image2.classList.add("img");
  Image3.classList.add("img");
  Image4.classList.add("img");

  Image1.src = "./assets/carousel/mountains.jpeg";
  Image2.src = "./assets/carousel/computer.jpeg";
  Image3.src = "./assets/carousel/trees.jpeg";
  Image4.src = "./assets/carousel/turntable.jpeg";

  newCarousel.appendChild(leftButton);
  newCarousel.appendChild(Image1);
  newCarousel.appendChild(Image2);
  newCarousel.appendChild(Image3);
  newCarousel.appendChild(Image4);
  newCarousel.appendChild(rightButton);

  console.log("Carousel Returned");

  return newCarousel;
}

const CarouselEntryPoint = document.querySelector(".carousel-container");
console.log(CarouselEntryPoint);
CarouselEntryPoint.appendChild(Carousel());
