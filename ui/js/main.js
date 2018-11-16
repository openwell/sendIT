function makeid() {
  var text = "";
  var possible = "0A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());
// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5vFEjFpuO04h5PuFYfdBRO_JgdAjryAg&callback=initMap">



function initialize() {
  var input = document.getElementById('loc');
  new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);

function initialize2() {
  var input = document.getElementById('dest');
  new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize2);




document.getElementById("quote_form").addEventListener("click", function(event){
    event.preventDefault();
    console.log('dd');
});



