// SKY TRACKER 

$(document).ready(function() {
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      var ampm = h >= 12 ? ' PM' : ' AM';
     
      hmod= h % 12;
 
    $('#time').text(hmod + ":" + m + ":" + s + ampm);
      setTimeout(function(){startTime()},500);
    if( hmod.toString().length === 1) {
      $('#time').text(hmod + ":" +  m + ":" + s + ampm);
    };
    if( m.toString().length === 1) {
      $('#time').text(hmod + ":" + "0" + m + ":" + s + ampm);
    };
    if( s.toString().length === 1) {
      $('#time').text(hmod + ":" + m + ":" + "0" + s + ampm);
    };
  };
  startTime();
  
  $("#bluejay").hide();
  $(".grass").hide();
  $(".pond1day").hide();
  $(".pond2day").hide();
  $(".pond3day").hide();
  $(".lilypadday").hide();
  $(".lilypadcutoutday").hide();
  
  if (h <= 12) {
    $(".moon").toggleClass('sun');
    $(".moon").removeClass('moon');
    $(".moondot1").removeClass('moondot1');
    $(".moondot2").removeClass('moondot2');
    $(".moondot3").removeClass('moondot3');
    $(".moondot4").removeClass('moondot4');
    $(".bodynight").toggleClass('bodyday');
    $(".bodynight").removeClass('bodynight');
    $(".linebackgroundnight").toggleClass('linebackgroundday');
    $(".pond1").hide();
    $(".pond2").hide();
    $(".pond3").hide();
    $(".lilypad").hide();
    $(".lilypadcutout").hide();
    $(".pond1day").fadeIn();
    $(".pond2day").fadeIn();
    $(".pond3day").fadeIn();
    $(".lilypadday").fadeIn();
    $(".lilypadcutoutday").fadeIn();
    $(".owl img").hide();
    $("#bluejay").fadeIn();
    $(".grass").fadeIn();
  };
});





























// $.simpleWeather({
    
//     location: '99004', // change zip
//     unit: 'f',
    
//     // Get _weather_ object
//     success: function(weather) {
      
//       // Get & store temperature
//       var temp = weather.temp;
//       // Get & store city
//       var city = weather.city;
//       // Get and store State
//       var state = weather.region;
      
//       //Get and store thumbnail 
//       var thumb = weather.thumbnail;
//       console.log(thumb);
      
//       // Output to hooks in HTML
//       $('.temp').text(temp);
//       $('.city').text(city);
//       $('.state').text(state);
//       $('.thumb img').attr('src', thumb)
      
      
//       // See console for _weather_ object
//       console.log(weather);
//     },
  
//     // if error
//     error: function(error) {  
//       $('body').html('<p>' + error + '</p>');
//     }
  
//   });




































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