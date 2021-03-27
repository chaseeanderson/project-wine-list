require('dotenv').config();
require('./config/database');

const Wine = require('./models/wine');

let w, wines;

Wine.find({}, (err, wineDocs) => wines = wineDocs);