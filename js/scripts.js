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
      $('.temp').text(temp+ ' ' +weather.units.temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.sunrise').text(sunrise);
      $('.sunset').text(sunset);
      $('.humidity').text(humidity+ ' %');
      $('.currently').text(currently);
      $('.heatindex').text(heatindex+ ' ' +weather.units.temp);
      $('.image img').attr('src', image);
      $('.wind').text(weather.wind.speed+' '+weather.units.speed+' '+weather.wind.direction);


      
      
      if(weather.code = 0) {$('body').addClass('tornado');}
      if(weather.code = 1) {$('body').addClass('tropicalstorm');}
      if(weather.code = 2) {$('body').addClass('hurricane');}
      if(weather.code = 3) {$('body').addClass('severthunderstorms');}
      if(weather.code = 4) {$('body').addClass('thunderstorms');}
      if(weather.code = 5) {$('body').addClass('mixedrainandsnow');}
      if(weather.code = 6) {$('body').addClass('mixedrainandsleet');}
      if(weather.code = 7) {$('body').addClass('mixedsnowandsleet');}
      if(weather.code = 8) {$('body').addClass('freezingdrizzle');}
      if(weather.code = 9) {$('body').addClass('drizzle');}
      if(weather.code = 10) {$('body').addClass('freezingrain');}
      if(weather.code = 11) {$('body').addClass('showers');}
      if(weather.code = 12) {$('body').addClass('showers');}
      if(weather.code = 13) {$('body').addClass('snowflurries');}
      if(weather.code = 14) {$('body').addClass('lightsnowshowers');}
      if(weather.code = 15) {$('body').addClass('blowingsnow');}
      if(weather.code = 16) {$('body').addClass('snow');}
      if(weather.code = 17) {$('body').addClass('hail');}
      if(weather.code = 18) {$('body').addClass('sleet');}
      if(weather.code = 19) {$('body').addClass('dust');}
      if(weather.code = 20) {$('body').addClass('foggy');}
      if(weather.code = 21) {$('body').addClass('haze');}
      if(weather.code = 22) {$('body').addClass('smoky');}
      if(weather.code = 23) {$('body').addClass('blustery');}
      if(weather.code = 24) {$('body').addClass('windy');}
      if(weather.code = 25) {$('body').addClass('cold');}
      if(weather.code = 26) {$('body').addClass('cloudy');}
      if(weather.code = 27) {$('body').addClass('mostlycloudynight');}
      if(weather.code = 28) {$('body').addClass('mostlycloudyday');}
      if(weather.code = 29) {$('body').addClass('partlycloudynight');}
      if(weather.code = 30) {$('body').addClass('partlycloudyday');}
      if(weather.code = 31) {$('body').addClass('clearnight');}
      if(weather.code = 32) {$('body').addClass('sunny');}
      if(weather.code = 33) {$('body').addClass('fairnight');}
      if(weather.code = 34) {$('body').addClass('fairday');}
      if(weather.code = 35) {$('body').addClass('mixedrainandhail');}
      if(weather.code = 36) {$('body').addClass('hot');}
      if(weather.code = 37) {$('body').addClass('isolatedthunderstorms');}
      if(weather.code = 38) {$('body').addClass('scatteredthunderstorms');}
      if(weather.code = 39) {$('body').addClass('scatteredthunderstorms');}
      if(weather.code = 40) {$('body').addClass('scatteredshowers');}
      if(weather.code = 41) {$('body').addClass('heavysnow');}
      if(weather.code = 42) {$('body').addClass('scatteredsnowshowers');}
      if(weather.code = 43) {$('body').addClass('heavysnow');}
      if(weather.code = 44) {$('body').addClass('partycloudy');}
      if(weather.code = 45) {$('body').addClass('thundershowers');}
      if(weather.code = 46) {$('body').addClass('snowshowers');}
      if(weather.code = 47) {$('body').addClass('isolatedthundershowers');}
      
     
      
      // See console for _weather_ object
      console.log(weather);
    },
  
  });

function clock(){

//Save the times in variables

var today = new Date();

var hours = today.getHours();
var minutes = today.getMinutes();



//Set the AM or PM time

if (hours >= 12){
  meridiem = " PM";
}
else {
  meridiem = " AM";
}


//convert hours to 12 hour format and put 0 in front
if (hours>12){
  hours = hours - 12;
}
else if (hours===0){
  hours = 12; 
}

//Put 0 in front of single digit minutes and seconds

if (minutes<10){
  minutes = "0" + minutes;
}
else {
  minutes = minutes;
}




document.getElementById("clock").innerHTML = (hours + ":" + minutes + meridiem);

}


setInterval('clock()', 1000);




      



