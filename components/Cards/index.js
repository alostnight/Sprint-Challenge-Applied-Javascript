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
    Object.values(response.data.articles).forEach(item => {
      item.forEach(items => {
        getarticles.append(createArticles(items));
      });
    });
  })
  .catch(error => {
    console.log(error);
  });

function createArticles(article) {
  const container = document.createElement("div"),
    headLine = document.createElement("div"),
    author = document.createElement("div"),
    img = document.createElement("div"),
    imgA = document.createElement("img"),
    spans = document.createElement("span");

  container.append(headLine);
  container.append(author);
  author.append(img);
  img.append(imgA);
  author.append(spans);

  container.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  img.classList.add("img-container");

  headLine.textContent = article.headline;
  imgA.src = article.authorPhoto;
  spans.textContent = `By ${article.authorName}`;

  return container;
}

const getarticles = document.querySelector(".cards-container");
