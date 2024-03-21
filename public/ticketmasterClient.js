const searchButtonElement = document.querySelector('.search-button');
const eventNameElement = document.getElementById('event-name');
const eventDateElement = document.getElementById('event-date');
const eventTimeElement = document.getElementById('event-time');
const eventLocationElement = document.getElementById('event-location');
const queryInputElement = document.getElementById('query'); // New line to get the input element

function fetchEventData(searchQuery) {
  $.ajax({
      type: "GET",
      url: "https://app.ticketmaster.com/discovery/v2/events.json", // Corrected endpoint for events
      data: {
          keyword: searchQuery, // Pass the search query as a parameter
          apikey: "pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK"
      },
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

searchButtonElement.addEventListener("click", function() {
    const searchQuery = queryInputElement.value; // Get the value from the input element

    // Call the appropriate function to fetch event data based on the search query
    fetchEventData(searchQuery);
});

