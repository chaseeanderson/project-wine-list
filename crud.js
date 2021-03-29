require('dotenv').config();
require('./config/database');


const Wine = require('./models/wine');
const Location = require('./models/location');

let w, wines;
let l, locations;

Wine.find({}, (err, wineDocs) => wines = wineDocs);
Location.find({}, (err, locationDocs) => locations = locationDocs);