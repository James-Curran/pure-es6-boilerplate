# Tsp-Algo
Tsp-Algo is a genetic algorithm that finds the shortest path between an array of lat/long values.

## Usage
Tsp-Algo uses ES6, Webpack, Babel, Jest and ESLint. Webpack is used to build and minify the source 
into the bundle.js file found in build/dist/bundle.js. For more information on these, or to use the 
boilerlate I have made as a template for your own project, check it out here https://github.com/James-Curran/pure-es6-boilerplate

### Implementation
Look at src/index.js for an example implementation
* Create a Tsp object from the tsp.js class
```
var tsp = new Tsp();
```
* Call the getShortestRoute() method and pass in an array of lat/long values
```
var latLong = [[40.738967, -73.983748], [40.722868, -73.988469], [40.736853, -73.978427], [40.717598, -73.991130], [40.730934, -73.983019]];
tsp.getShortestRoute(latLong);
```
* By default you can see the output for each generation in the console, such as the current best order and the current
record distance. Calling getShortestRoute() will return the final best order found.
