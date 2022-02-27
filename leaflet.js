
const DISTRICTING_STATES = ["12", "32"]

const states = state_data.features.filter(function (entry) {
    return DISTRICTING_STATES.includes(entry.properties.STATE);
});

var map = L.map('map', {
    minZoom: 4,
    maxZoom: 10,
    zoom: 4.5,
    maxBounds: L.latLngBounds(L.latLng(10, -124.7), L.latLng(49.4, -67)),
    zoomSnap: .5
});

var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
}).addTo(map);

var state_layers = [];

var district_layers = [];

DISTRICTING_STATES.forEach(element => {
    state_layers.push(
        L.geoJSON(states, {
            style: {
                fillColor: '#800026',
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7,
                className: element
            },
            filter: function (feature) {
                return (feature.properties.STATE === element);
            }
        })
    )
});

console.log(state_layers);

state_layers.forEach(element => {
    element.on('mouseover', highlightFeature).on('mouseout', resetHighlight).on('click', zoomToFeature).addTo(map);
});

// L.geoJSON(states).on('mouseover', highlightFeature).addTo(map);

map.setView([0, 0], 0);