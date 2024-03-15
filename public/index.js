// Need button functionality for searches
// Search button
// checkboxes for type - artist, track, album, etc.

//Under the hood
//genre seeds
//album seeds
//track seeds
//all of these will allow us to recommend alternatives after a search
//all searches need a type, we'll get a 400 error if they don't
const searchButton = document.querySelector('.search-button');
const queryInput = document.getElementById('query');
let checkedBoxes = [];

async function searchSpotify(event) {
  event.preventDefault();

  checkedBoxes = [];
  checkedBoxes = getCheckedTypes();
  console.log("Checked boxes: " + checkedBoxes);

  const search = {
    query: document.getElementById("query").value.trim(),
    type: checkedBoxes,
  };

  console.log(search);
  try {
    const response = await fetch("/spotify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search }),
    });
    const data = await response.json();
    console.log(data);

    const displayElement = document.getElementById("results");
    displayElement.innerHTML =
      "<pre>" + data.artists.items[0].name + "</pre>";
  } catch (err) {
    console.log(err);
  }
};

function getCheckedTypes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
          checkedBoxes.push(checkbox.name);
      }
  });
  return checkedBoxes;
};

const searchBox = document.getElementById("searchBox");
const searchResults = document.getElementById("searchResults");

async function search(searchQuery) {
  event.preventDefault();
  //const endpoint = `https://jsonplaceholder.typicode.com/posts/${searchQuery}/comments`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const json = await response.json();
  return json;
}

async function renderResults(text) {
  const newData = await search(text);

  searchResults.innerHTML = "";

  newData.forEach((comment) => {
    const body = document.createElement("h3");
    const email = document.createElement("p");
    const hr = document.createElement("hr");

    body.textContent = comment.body;
    email.textContent = comment.email;

    searchResults.append(body);
    searchResults.append(email);
    searchResults.append(hr);
  });
}

searchButton.addEventListener("click", function(event) {
  searchSpotify(event);
});

queryInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      searchSpotify(event);
  }
});