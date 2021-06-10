var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2xlYmVyaW5mb3dheSIsImEiOiJja3BuZ2plcW8wOGV4MndvMzN4cnV2b2d3In0.Kr6_rCA8VqsOBmmmas4NGQ';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});