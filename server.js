const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ky = require('./onebusmodule');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/styles.css'));
app.use(express.static(__dirname + '/droppingallthepins.js'));

var port = process.env.PORT || 3000;

ky.numberOfBusStops( (data) => {
  var parsedData = JSON.parse(data);
  console.log(parsedData.data.list[0].lat);
  console.log(parsedData.data.list[0].lon);
});

app.get('/', (res, req) => {
  res.sendFile(__dirname, 'index.html', function(error){
    if (error) {
      response.status(404).send('<h1>EPIC FAAAAAAAAAAAAAAAAAAAAIIIIIIIIIIIIIILLLLLLLLLL</h1>');
    }
  });
});

app.listen(port, () => {
  console.log('Server Up');
});
