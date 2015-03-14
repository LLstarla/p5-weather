
$.simpleWeather({
    
    location: '99004', // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      // Get and store State
      var state = weather.region;
      
      //Get and store thumbnail 
      var thumb = weather.thumbnail;
      console.log(thumb);
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.thumb img').attr('src', thumb)
      
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });




































//  if (navigator.geolocation) {
//     // Yes! Show button
//     $('.getGeolocation').show(); 
//   } else {
//     // No. Hide button
//     $('.getGeolocation').hide();
//   }

// // 2. Get Geolocation & return Simple Weather
// $('.getGeolocation').on('click', function() {
  
//     navigator.geolocation.getCurrentPosition(function(position) {
//     //load weather using your lat/lng coordinates. See _loadWeather()_ below
//     loadWeather(position.coords.latitude+','+position.coords.longitude); 
//     // See latitute & longitude. Note, wait a few seconds
//     console.log(position.coords.latitude+','+position.coords.longitude);
//   });
  
// });

// // 3. Wrap SimpleWeather in a function called _loadWeather()
// var loadWeather = function(location) {
    
//     $.simpleWeather({
//     location: location,
    
//     // Get _weather_ object
//     success: function(weather) {
        
//       console.log(weather);
      
//       // Get & store temperature
//       var temp = weather.temp;
//       // Get & store city
//       var city = weather.city;
      
//       // Output to hooks in HTML
//       $('.temp').text(temp);
//       $('.city').text(city);
      
//       // See console for _weather_ object
//       console.log(weather);
//     }
  
//   });
    
// }; // end of _loadWeather()_ function