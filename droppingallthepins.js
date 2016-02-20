'use strict';

var x = document.getElementById("demo");

var busStopObjects = [];

$.get('/busStopData', function (data) {
  var parsedData = JSON.parse(data);
  for (var i = 0; i < parsedData.data.list.length; i++){
    busStopObjects.push(parsedData.data.list[i]);
  }
});

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function dropAllThePins() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }

  var mapOptions = {
      center: new google.maps.LatLng(47.6811394, -122.136389999999991),
      zoom: 15,
      mapTypeControl: false,
      panControl: false,
      streetViewControl: false,
      zoomControl: false,
      disableDoubleClickZoom: true,
  };
  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  var goldStar = {
    path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
    fillColor: 'yellow',
    fillOpacity: 0.8,
    scale: 0.09,
    strokeColor: 'gold',
    strokeWeight: 1
  };

  var you = new google.maps.Marker({
    position: map.center,
    icon: goldStar,
    map: map
  });

  var contentString = '<div class="content">'+
      '<div class="busStop">'+
      '</div>'+
      '<h1 class="firstHeading"></h1>'+
      '<div class="bodyContent">'+
      '<p></p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  //var marker;

  for (var i = 0; i < busStopObjects.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(busStopObjects[i].lat, busStopObjects[i].lon),
      map: map
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
}

google.maps.event.addDomListener(window, 'load', dropAllThePins);
/*
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
}*/

//initMap();
//dropAllThePins();
