# Software-Engineering-Tasks

**<h1>Polygon Display on Map</h1>**

Overview

This project demonstrates how to display a polygon on a map using JavaScript and the OpenLayers library. The polygon coordinates are provided in a JSON file, and the code fetches and parses these coordinates to create a polygon feature displayed on an interactive map.

Approach
Fetching Data: The code fetches the JSON file containing polygon coordinates using the Fetch API.

Parsing Data: After fetching the JSON data, it is parsed to extract the polygon coordinates.

Creating Polygon Feature: The extracted coordinates are used to create a polygon feature using the OpenLayers library.

Setting up the Map: The polygon feature is added to a vector layer, which is then added to the map along with an OpenStreetMap base layer. Map controls, such as a zoom slider, are also added.

View Configuration: The map view is configured to fit the extent of the polygon feature.
