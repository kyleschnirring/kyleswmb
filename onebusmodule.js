'use strict';

const http = require('http');

exports.numberOfBusStops = function (callback) {
http.get('http://api.pugetsound.onebusaway.org/api/where/stops-for-location.json?key=9d437522-db67-4011-b41a-ed30e4dcd3ef&lat=47.623330499999994&lon=-122.33596059999999&radius=500', (res) => {
  var stringData = '';
   res.on('data', (d) => {
     stringData += d.toString();
   });
   res.on('end', () => {
     callback(stringData);
   })

  }).on('error', (e) => {
    callback(e);
  });
}
