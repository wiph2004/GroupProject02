function fetchEventData(searchQuery) {
  $.ajax({
      type: "GET",
      url: "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
      async: true,
      dataType: "json",
      success: function(json) {
          displayEventData(json, searchQuery); // Pass the search query
      },
      error: function(xhr, status, err) {
          console.error("Error fetching event data:", err);
      }
  });
};

// event details
function fetchEventDetails () { 
    $.ajax({
      type:"GET",
      url:"https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
      async:true,
      dataType: "json",
      success: function(json) {
                  displayEventData(json, searchQuery);
                  // Parse the response.
                  // Do other things.
               },
      error: function(xhr, status, err) {
                  // This time, we do not end up here!
               }
    });
  };

  // event images 
function fetchEventImages () {
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events/k7vGFKzleBdwS/images.json?apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
    async:true,
    dataType: "json",
    success: function(json) {
                displayEventData(json, searchQuery);
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
};
function fetchAttractionSearch () {
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
    async:true,
    dataType: "json",
    success: function(json) {
                displayEventData(json, searchQuery);
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
};

function fetchAttractionSearch () {
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
    async:true,
    dataType: "json",
    success: function(json) {
                displayEventData(json, searchQuery);
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
};
function displayEventData(data, searchQuery) {
  const eventName = data._embedded.events[0].name;
  const eventDate = data._embedded.events[0].dates.start.localDate;
  const eventTime = data._embedded.events[0].dates.start.localTime;
  const eventLocation = data._embedded.events[0]._embedded.venues[0].name;

  // Update the HTML to display the event information and search input
  eventNameElement.textContent = eventName;
  eventDateElement.textContent = eventDate;
  eventTimeElement.textContent = eventTime;
  eventLocationElement.textContent = eventLocation;
  queryInputElement.textContent = searchQuery;
};

const searchButtonElement = document.querySelector('.search-button');
const eventNameElement = document.getElementById('event-name');
const eventDateElement = document.getElementById('event-date');
const eventTimeElement = document.getElementById('event-time');
const eventLocationElement = document.getElementById('event-location');
const queryInputElement = document.getElementById('query'); // New line to get the input element

searchButtonElement.addEventListener("click", function() {
    const searchQuery = queryInputElement.value; // Get the value from the input element

    // Call the appropriate function to fetch event data based on the search query
    fetchEventData(searchQuery);
});

