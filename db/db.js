const mongoose = require('mongoose'); // import module
const MONGODB_URL = "mongodb://127.0.0.1:27017/mongoDB";
mongoose.connect(MONGODB_URL);