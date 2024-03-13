// Need button functionality for searches
// Search button
// checkboxes for type - artist, track, album, etc.

//Under the hood
//genre seeds
//album seeds
//track seeds
//all of these will allow us to recommend alternatives after a search
//all searches need a type, we'll get a 400 error if they don't

async function searchSpotify() {
  const search = {
    query: document.getElementById("query").value,
    type: document.getElementById("type"),
  };
  try {
    const response = await fetch("/spotify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: search }),
    });
    const data = await response.json();

    const displayElement = document.getElementById("results");
    displayElement.innerHTML =
      "<pre>" + JSON.stringify(data, null, 2) + "<pre>";
  } catch (err) {
    console.log(err);
  }
}
