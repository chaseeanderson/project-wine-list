require('dotenv').config();
require('./config/database');


const Wine = require('./models/wine');
const Location = require('./models/location');
const User = require('./models/user');

let w, wines;
let l, locations;
let u, users;

Wine.find({}, (err, wineDocs) => wines = wineDocs);
Location.find({}, (err, locationDocs) => locations = locationDocs);
User.find({}, (err, userDocs) => users = userDocs);