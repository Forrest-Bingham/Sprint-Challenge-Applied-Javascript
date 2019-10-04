// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const newHeader = document.createElement("div"),
    theDate = document.createElement("span"),
    Title = document.createElement("h3"),
    Temp = document.createElement("span");

  theDate.textContent = "SMARCH 28, 2019";
  Title.textContent = "Lambda Times";
  Temp.textContent = "98°";

  newHeader.classList.add("header");
  theDate.classList.add("date");
  Temp.classList.add("temp");

  newHeader.appendChild(theDate);
  newHeader.appendChild(Title);
  newHeader.appendChild(Temp);

  return newHeader;
}

const headerEntryPoint = document.querySelector(".header-container");

console.log(headerEntryPoint);

headerEntryPoint.appendChild(Header());
console.log("new Header Added");
