function getWeather() {
    var location = $('#city').val();

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json&env=store://datatables.org/alltableswithkeys', function (data) {

        /* Check that a city was found */
        if (data.query.results === null) {
            alert("Location not found: " + location + "!");

        } else {
            
            /* Display results of the city */
            $('.city-forecast').html('<h2>' + data.query.results.channel.item.title + '</h2>' +
                '<div><b>Current Conditions:</b></div>' +
                '<div>' + data.query.results.channel.item.condition.text + '</div>' +
                '<div>&nbsp;</div>' +
                '<div class="cols date"><h4>Date</h4>' + data.query.results.channel.item.pubDate + '</div>' +
                '<div class="cols high"><h4>high</h4>' + data.query.results.channel.item.forecast[0].high + '</div>' +
                '<div class="cols low"><h4>Low</h4>' + data.query.results.channel.item.forecast[0].low + '</div>')
            $('.results').show();
        }

    });
}

// data.query.results.channel.wind.speed;
// data.query.results.channel.location.city;
// data.query.results.channel.item.condition.temp;
// data.query.results.channel.atmosphere.humidity;
// data.query.results.channel.atmosphere.pressure;
// data.query.results.channel.item.condition.text;
// data.query.results.channel.astronomy.sunrise;
// data.query.results.channel.astronomy.sunset;
// data.query.results.channel.item.forecast[0].high;
// data.query.results.channel.item.forecast[0].low;


// 7 random unique numbers between 0 and 9
var arr = [];
while(arr.length < 7){
  var randomnumber=Math.ceil(Math.random()*9)
  var found=false;
  for(var i=0;i<arr.length;i++){
    if(arr[i]==randomnumber){found=true;break}
  }
  if(!found)arr[arr.length]=randomnumber;
}
$('.random-numbers').html(arr);


// Extend the JavaScript String object
String.prototype.reverse = function() {
    return Array.prototype.reverse.apply(this.split('')).join('');
};
var mystring = "hello world";
$('.reverse-string').html(mystring.reverse());