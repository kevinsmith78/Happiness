var rankedcountries = "joined.geojson";
console.log(rankedcountries)

//start//
d3.json(rankedcountries, function(ranking){ 
    L.geoJSON(ranking, {
      style: function(feature) {
        rank = feature.properties.Overallrank;
        if (rank < 26) {return {color :"black", fillColor: "#0800a4", fillOpacity: 0.5, dashArray: '3', weight: 2}}
        else if (rank < 51) {return {color :"black", fillColor: "#65ecd8", fillOpacity: 0.5, dashArray: '3', weight: 2}}
        else if (rank < 76) {return {color :"black", fillColor: "#008e23", fillOpacity: 0.5, dashArray: '3', weight: 2}}
        else if (rank < 101) {return {color :"black", fillColor: "#ecd365", fillOpacity: 0.5, dashArray: '3', weight: 2}}
        else if (rank < 126) {return {color :"black", fillColor: "#ec7565", fillOpacity: 0.5, dashArray: '3', weight: 2}}
        else {return {color: "black", fillColor: "#ec1c24", fillOpacity: 0.5, dashArray: '1', weight: 2}}
      }
    }).bindPopup(function(layer) {
      return layer.feature.properties.ADMIN;
    }).addTo(myMap);
});
//end//


var myMap = L.map("map", {
    center: [40.5, 3.75],
    zoom: 1.5
});

var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
}).addTo(myMap);

// Legend //
var legend = L.control({
    position: 'bottomleft'
});
    
legend.onAdd = function (color) {
    var div = L.DomUtil.create('div', 'info legend');
    var levels = ['Top 25', '26-50', '51-75', '76-100', '101-125', 'Bottom (rank above 125)'];
    var colors = ['#0800a4', '#65ecd8', '#008e23', '#ecd365', '#ec7565', '#ec1c24']
    for (var i = 0; i < levels.length; i++) {
                div.innerHTML += '<i style="background:' + colors[i] + '"></i>' + levels[i] + '<br>';
            }
        return div;
    }
legend.addTo(myMap);