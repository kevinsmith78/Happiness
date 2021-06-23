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

var countries = "joined.geojson"
L.geoJSON(countries).addTo(myMap);

// Style //
function getColor(d) {
    return d > 125 ? '#ec1c24' :
           d > 100 ? '#ec7565' :
           d > 75  ? '#ecd365' :
           d > 50  ? '#008e23' :
           d > 25  ? '#65ecd8' :
                      '#0800a4';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.Overallrank),
        weight: 1.5,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// Add styled layer with popup //
L.geoJson(countries, {style: style}).bindPopup(function (layer) {return '<h3>' + layer.feature.properties.ADMIN + ': ' + layer.feature.properties.Overallrank + '</h3>';}).addTo(myMap);

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