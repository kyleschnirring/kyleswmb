'use strict';

const http = require('http');

exports.numberOfBusStops = function (callback) {
  http.get('http://api.pugetsound.onebusaway.org/api/where/stops-for-location.json?key=9d437522-db67-4011-b41a-ed30e4dcd3ef&lat=47.6811394&lon=-122.136389999999991&radius=150', (res) => {
   res.on('data', (d) => {
     var stringData = d.toString();
     callback(stringData);
   });

  }).on('error', (e) => {
    callback(e);
  });
}
