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

function header() {
  let header = document.createElement("div");
  let date = document.createElement("span");
  let title = document.createElement("h1");
  let temp = document.createElement("span");

  date.textContent = "February 21, 2020";
  title.textContent = "Lambda Times";
  temp.textContent = "98°";
  
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  return header;
}

document.querySelector(".header-container").appendChild(header());
