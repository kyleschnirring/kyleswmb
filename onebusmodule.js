'use strict';

const http = require('http');

exports.numberOfBusStops = function (callback) {
  http.get('http://api.pugetsound.onebusaway.org/api/where/stops-for-location.json?key=9d437522-db67-4011-b41a-ed30e4dcd3ef&lat=47.7169265&lon=-122.10184980000001&radius=300', (res) => {
   res.on('data', (d) => {
     callback(d.toString());
   });

  }).on('error', (e) => {
    callback(e);
  });
}
