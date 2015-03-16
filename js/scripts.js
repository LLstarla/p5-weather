$.simpleWeather({
    
    location: '99004', // change zip
    unit: 'f',
    
   
    success: function(weather) {
      
      var temp = weather.temp;
      var city = weather.city;
      var state = weather.region;
      var sunrise = weather.sunrise;
      var sunset = weather.sunset;
      var humidity = weather.humidity;
      var currently = weather.currently;
      var heatindex = weather.heatindex;
      var image = weather.image;
      
    
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.sunrise').text(sunrise);
      $('.sunset').text(sunset);
      $('.humidity').text(humidity);
      $('.currently').text(currently);
      $('.heatindex').text(heatindex);
      $('.image img').attr('src', image);
      
      
      
      // See console for _weather_ object
      console.log(weather);
    },
  
  });