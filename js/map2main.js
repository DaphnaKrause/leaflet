let mymap = L.map('map2').setView([32.078909, 35.342767], 8.00);

L.tileLayer('https://api.mapbox.com/styles/v1/daphnakrause/cjp0ds21h05r32toblq14cgj2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFwaG5ha3JhdXNlIiwiYSI6ImNqb3g3amh5YzI1bXQzcHFpNmhwbGdoa24ifQ.LUUR7xHl_RKZPM2iEL-98A', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(mymap);

for ( let i = 0;  i < places.length; i++) {
  L.marker( [places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +     places[i].descrip + '</p>')
  .addTo( mymap );

}
