

var map = L.map('map').setView([50.845, 4.35], 13);

var marker = L.marker([50.845, 4.35], 13).addTo(map); 
var marker = L.marker([50.748298, 5.442127]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);