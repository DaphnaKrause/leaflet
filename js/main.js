
let mymap = L.map('mapid').setView([28.152942,-80.593808], 12.00);

L.tileLayer('https://api.mapbox.com/styles/v1/daphnakrause/cjox8aenwbw2o2rmnghbpscsz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFwaG5ha3JhdXNlIiwiYSI6ImNqb3g3amh5YzI1bXQzcHFpNmhwbGdoa24ifQ.LUUR7xHl_RKZPM2iEL-98A', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([28.123460, -80.577850]).addTo(mymap);
 marker1.bindPopup("<b>Thai Thai II</b><br>Thai food place.").openPopup();

let marker2 = L.marker([28.173604, -80.589996]).addTo(mymap);
marker2.bindPopup("<b>Da Kine Diego's</b><br>Burrito place with a surfer vibe.");

let marker3 = L.marker([28.116330, -80.574890]).addTo(mymap);
marker3.bindPopup("<b>Moo's Soft Serve</b><br>Beachy ice cream place.");

let marker4 = L.marker([28.102370, -80.570230]).addTo(mymap);
marker4.bindPopup("<b>Blueberry Muffin Restaurant</b><br>Small town breakfast and lunch place.");


/*Make sure all the code is called after the div and leaflet.js inclusion. That’s it! You have a working Leaflet map now?*/
/*I thought we don't use VAR?*/
