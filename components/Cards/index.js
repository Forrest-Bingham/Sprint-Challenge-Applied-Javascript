// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    console.log(typeof response.data.articles);
    console.log(response.data.articles.bootstrap);
    response.data.articles.bootstrap.forEach(item => {
      const newCard = Article(item);
      CardsEntryPoint.appendChild(newCard);
    });
    response.data.articles.javascript.forEach(item => {
      const newCard = Article(item);
      CardsEntryPoint.appendChild(newCard);
    });
    response.data.articles.jquery.forEach(item => {
      const newCard = Article(item);
      CardsEntryPoint.appendChild(newCard);
    });
    response.data.articles.node.forEach(item => {
      const newCard = Article(item);
      CardsEntryPoint.appendChild(newCard);
    });
    response.data.articles.technology.forEach(item => {
      const newCard = Article(item);
      CardsEntryPoint.appendChild(newCard);
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

function Article(info) {
  const newArticle = document.createElement("div"),
    Headline = document.createElement("div"),
    AuthorSpace = document.createElement("div"),
    ImageContainer = document.createElement("div"),
    Image = document.createElement("img"),
    Author = document.createElement("span");

  newArticle.classList.add("card");
  Headline.classList.add("headline");
  AuthorSpace.classList.add("author");
  ImageContainer.classList.add("img-container");

  Headline.textContent = info.headline;
  Image.src = info.authorPhoto;
  Author.textContent = info.authorName;

  newArticle.appendChild(Headline);
  newArticle.appendChild(AuthorSpace);
  AuthorSpace.appendChild(ImageContainer);
  AuthorSpace.appendChild(Author);
  ImageContainer.appendChild(Image);

  return newArticle;
}

const CardsEntryPoint = document.querySelector(".cards-container");
