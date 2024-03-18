function fetchEventData() {
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
        async: true,
        dataType: "json",
        success: function(json) {
            displayEventData(json);
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
                  displayEventData(json);
                  // Parse the response.
                  // Do other things.
               },
      error: function(xhr, status, err) {
                  // This time, we do not end up here!
               }
    });
  };

function displayEventData(data) {
    const eventName = data._embedded.events[0].name; // Adjust the path to the event name
    const eventDate = data._embedded.events[0].dates.start.localDate; // Adjust the path to the event date

    // Update the HTML to display the event information
    $('#event-name').text(eventName);
    $('#event-date').text(eventDate);
};
  // event images 
function fetchEventImages () {
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events/k7vGFKzleBdwS/images.json?apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
    async:true,
    dataType: "json",
    success: function(json) {
                displayEventData(json);
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
                displayEventData(json);
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
                displayEventData(json);
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
};


const searchButtonElement = document.querySelector('.search-button');
const eventNameElement = document.getElementById('event-name');
const eventDateElement = document.getElementById('event-date');

searchButtonElement.addEventListener("click", function() {
    const searchQuery = document.getElementById('query').value;

    // Call the appropriate function to fetch event data based on the search query
    fetchEventData(searchQuery);
});
