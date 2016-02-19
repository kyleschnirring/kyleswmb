'use strict';

var x = document.getElementById("demo");

var busStopLocations = [];


function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function initMap() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
  // Create a map object and specify the DOM element for display.
  var myLatlng = new google.maps.LatLng(47.6811394, -122.136389999999991);

  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });
// To add the marker to the map, call setMap();
marker.setMap(map);
}

initMap();

$.get('/busStopData', function (data) {
  var parsedData = JSON.parse(data);
  for (var i = 0; i < parsedData.data.list.length; i++){
    busStopLocations.push(parsedData.data.list[i]);
  }
  console.log(busStopLocations);
});
