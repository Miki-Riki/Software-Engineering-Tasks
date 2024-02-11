import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import Feature from 'ol/Feature.js';
import { Polygon } from 'ol/geom.js';
import { Vector as VectorLayer } from 'ol/layer.js';
import { Vector as VectorSource } from 'ol/source.js';
import { defaults as defaultControls, ZoomSlider } from 'ol/control.js';

// Fetching the JSON file containing polygon coordinates
fetch('polygon.json')
    .then(response => {
        // Check if the network response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Check if data and polygon coordinates are valid
        if (!data || !data.polygon || !Array.isArray(data.polygon)) {
            throw new Error('Invalid polygon data format');
        }

        // Extract polygon coordinates
        const polygonCoords = data.polygon;

        // Create polygon feature using the coordinates
        const polygonFeature = new Feature({
            geometry: new Polygon([polygonCoords])
        });

        // Create vector source and layer
        const vectorSource = new VectorSource({
            features: [polygonFeature]
        });
        const vectorLayer = new VectorLayer({
            source: vectorSource
        });

        // Create map
        const map = new Map({
            target: 'map',
            layers: [
                // Add OpenStreetMap as base layer
                new TileLayer({
                    source: new OSM()
                }),
                // Add vector layer with the polygon feature
                vectorLayer
            ],
            view: new View({
                center: [0, 0], // Set initial center of the map
                zoom: 2 // Set initial zoom level
            }),
            controls: defaultControls().extend([
                new ZoomSlider() // Add zoom slider control
            ])
        });

        // Set map view to fit the extent of the polygon
        map.getView().fit(vectorSource.getExtent());
    })
    .catch(error => {
        // Log any errors occurred during fetching or parsing JSON data
        console.error('Error fetching or parsing polygon data:', error);
    });