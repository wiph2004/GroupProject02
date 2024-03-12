// Need button functionality for searches
         // Search button
         // checkboxes for type - artist, track, album, etc.
    //Under the hood
        //genre seeds
        //album seeds
        //track seeds
            //all of these will allow us to recommend alternatives after a search
        //all searches need a type, we'll get a 400 error if they don't

const searchBox = document.getElementById('searchBox');
const searchResults = document.getElementById('searchResults');

async function search(searchQuery) {
    //const endpoint = `https://jsonplaceholder.typicode.com/posts/${searchQuery}/comments`;
  
    const response = await fetch(endpoint);
  
    if (!response.ok) {
      throw Error(response.statusText);
    }
  
    const json = await response.json();
    return json;
  };

  async function renderResults(text) {
    const newData = await search(text);
  
    searchResults.innerHTML = '';
  
    newData.forEach((comment) => {
      const body = document.createElement('h3');
      const email = document.createElement('p');
      const hr = document.createElement('hr');
  
      body.textContent = comment.body;
      email.textContent = comment.email;
  
      searchResults.append(body);
      searchResults.append(email);
      searchResults.append(hr);
    });
  }