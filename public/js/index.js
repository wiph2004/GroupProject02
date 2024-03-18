const searchBtn = document.querySelector('.search-button');
const queryInput = document.getElementById('query');
let checkedBoxes = [];

let image;

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
    const newData = parseData([data]);
    console.log("new Data ", newData);

    // const alternates = getAlternates(data);
    // console.log("Found Id", alternates);
    // const responseAlt = await fetch("/spotify-alternate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ alternates }),
    // });
    // const newAlternates = await responseAlt.json();
    // console.log("Alternates ", newAlternates);
    
    if(data.artists){
      image = data.artists.items[0].images[0].url;
    }
    console.log(image);
    finalData = newData;//.push(newAlternates);

    const displayElement = document.getElementById("results");
    displayElement.innerHTML =
      "<pre>" + finalData + "</pre>";
      const displayImage = document.getElementById("myImage");
    displayImage.src = image;
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

function getAlternates(data) {
  const artists = data.artists ? data.artists.items[0] : {};
  const albums = data.albums ? data.albums.items[0] : {};
  const tracks = data.tracks ? data.tracks.items[0] : {};
  const audiobooks = data.audiobooks ? data.audiobooks.items[0] : {};
  const shows = data.shows ? data.shows.items[0] : {};
  const episodes = data.episodes ? data.episodes.items[0] : {};

  const allData = [artists, albums, tracks, audiobooks, shows, episodes];

  let foundId = null;

  for (let i = 0; i < allData.length; i++) {
    const currentArray = allData[i];
    console.log("current array", currentArray);
    if(currentArray.id !== undefined){
      foundId = currentArray.id
    }
  }
  
  return foundId;
}

function parseData(data){
  // return function() {
  const resultArray = [];

  data.forEach(dataItem => {
    if (dataItem.artists) {
      const parsedArtists = [];
      let count = 0;
    // dataItem.artists.forEach(artists => {
      const artists = dataItem.artists
        if (count < 5 && artists.items) {
          artists.items.forEach(items => {
            if (count < 5 && items.name){
              parsedArtists.push(items.name);
              count++;
            };
          });
        };
      // });
      resultArray.push(parsedArtists);
    }
    
    if (dataItem.albums) {
      const parsedAlbums = [];
      let count = 0;
      dataItem.albums.forEach(albums => {
        if (count < 5 && albums.items) {
          albums.items.forEach(items => {
            if (count < 5 && items.name){
              parsedAlbums.push(items.name);
            count++;
            };
          });
        };
      });
      resultArray.push(parsedAlbums);
    };
    
    if (dataItem.tracks) {
      const parsedTracks = [];
      let count = 0;
      dataItem.tracks.forEach(tracks => {
        if (count < 5 && tracks.items) {
          tracks.items.forEach(items => {
            if (count < 5 && items.name){
              parsedTracks.push(items.name);
            count++;
            };
          });
        };
      });
      resultArray.push(parsedTracks);
    }
    if (dataItem.audiobooks) {
        const parsedAudiobooks = [];
        let count = 0;
        dataItem.audiobooks.forEach(audiobooks => {
          if (count < 5 && audiobooks.items) {
            audiobooks.items.forEach(items => {
              if (count < 5 && items.name){
                parsedAudiobooks.push(items.name);
              count++;
              };
            });
          };
        });
        resultArray.push(parsedAudiobooks);
      }
      if (dataItem.episodes) {
        const parsedEpisodes = [];
        let count = 0;
        dataItem.episodes.forEach(episodes => {
          if (count < 5 && episodes.items) {
            episodes.items.forEach(items => {
              if (count < 5 && items.name){
                parsedEpisodes.push(items.name);
              count++;
              };
            });
          };
        });
        resultArray.push(parsedEpisodes);
      }
      if (dataItem.shows) {
        const parsedShows = [];
        let count = 0;
        dataItem.shows.forEach(shows => {
          if (count < 5 && shows.items) {
            shows.items.forEach(items => {
              if (count < 5 && items.name){
                parsedShows.push(items.name);
              count++;
              };
            });
          };
        });
        resultArray.push(parsedShows);
      }


  });
  console.log("resultArray " + resultArray);
  return resultArray;
//  };
}

// const searchBox = document.getElementById("searchBox");
// const searchResults = document.getElementById("searchResults");

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

searchBtn.addEventListener("click", function(event) {
  searchSpotify(event);
});

queryInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      searchSpotify(event);
  }
});