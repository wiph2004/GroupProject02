
// $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });

//   $('#search-button').click(function() {
//     fetchEventData();
// })

function fetchEventData() {
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
        async: true,
        dataType: "json",
        success: function(json) {
            // Call a function to display the fetched information
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
                console.log(json);
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
                console.log(json);
                // Parse the response.
                // Do other things.
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
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
};

function displayEventData(data) {
    // Assuming 'data' contains the event information in JSON format
    // You can access and display specific details from the 'data' object
    // For example, if 'data' contains event name and date:
    const eventName = data.name;
    const eventDate = data.date;

    // Update the HTML to display the event information
    $('#event-name').text(eventName);
    $('#event-date').text(eventDate);
};

// Call the fetchEventData function when a search button is clicked or when the page loads
$('#search-button').click(function() {
    fetchEventData();
});