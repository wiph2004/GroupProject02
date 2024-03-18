// // script.js
// document.addEventListener('DOMContentLoaded', function () {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', '/api/concert', true);

//     xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             var response = JSON.parse(xhr.responseText);
//             console.log(response); // Log the response to the console
//             // Do something with the response
//         } else {
//             console.error('Request failed with status:', xhr.status);
//             // Handle error
//         }
//     };

//     xhr.onerror = function () {
//         console.error('Request failed');
//         // Handle error
//     };

//     xhr.send();
// });

$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=pQXVqxhgfoGrTTOHh97c7cyLJqaE2uwK",
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