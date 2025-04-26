// db.js file is used to define database path or URL

// This file exports a configuration object that contains the MongoDB database URL

module.exports = {
    URL: 'mongodb://127.0.0.1:27017/SachinKaDB'
}
    // URL is the connection string for MongoDB
    // 'mongodb://127.0.0.1:27017/SachinKaDB'
    // -> '127.0.0.1' is the localhost IP (same as 'localhost')
    // -> '27017' is the default MongoDB port
    // -> 'SachinKaDB' is the name of the database (it will be created if it doesn't exist)
