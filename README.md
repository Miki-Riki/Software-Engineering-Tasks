# Software-Engineering-Tasks

**<h2>Polygon Display on Map</h2>**

**<h3>Overview</h3>**

This project demonstrates how to display a polygon on a map using JavaScript and the OpenLayers library. The polygon coordinates are provided in a JSON file, and the code fetches and parses these coordinates to create a polygon feature displayed on an interactive map.

**<h3>Approach</h3>**
<ol type="1" style="text-align: justify;">
  <li><b>Fetching Data:</b> The code fetches the JSON file containing polygon coordinates using the Fetch API.</li>
  <li><b>Parsing Data:</b> After fetching the JSON data, it is parsed to extract the polygon coordinates.</li>
  <li><b>Creating Polygon Feature:</b> The extracted coordinates are used to create a polygon feature using the OpenLayers library.</li>
  <li><b>Setting up the Map:</b> The polygon feature is added to a vector layer, which is then added to the map along with an OpenStreetMap base layer. Map controls, such as a zoom slider, are also added.</li>
  <li><b>View Configuration:</b> The map view is configured to fit the extent of the polygon feature.</li>
</ol>

**<h3>Assumptions</h3>**

The JSON file **`polygon.json`** contains valid polygon coordinates in GeoJSON format.
The JSON data structure is well-defined with a **`polygon`** property containing an array of coordinates.
The map is initialized with default settings such as center coordinates **`[0, 0]`** and zoom level **`2`**.

**<h3>Steps to Run the Code</h3>**
Clone this repository to your local machine.
```
https://github.com/Miki-Riki/Software-Engineering-Tasks.git
```
Navigate to the project directory.
```
cd polygon-map
```
Install dependencies using npm.
```
npm install
```
Place your polygon.json file containing polygon coordinates in the root directory of the project.
```
npm start
```
Open your web browser and navigate to **`http://localhost:3000`** to view the map with the displayed polygon.

**<h3>Dependencies</h3>**
<ul>
  <li>OpenLayers: JavaScript library for displaying map data in web browsers.</li>
  <li>Node.js: JavaScript runtime environment for executing JavaScript code outside a web browser.</li>
</ul>

**<h3>Additional Notes</h3>**
<ul>
  <li>The code is written using modern JavaScript syntax (ES6+).</li>
  <li>Error handling is implemented to handle network errors and invalid data formats.</li>
  <li>For more information on OpenLayers, refer to the <a href="https://openlayers.org/">official documentation.</li>
</ul>
