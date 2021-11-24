const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
const ATLAS_URI='mongodb+srv://lyappunov:OjqmRUnKf2mjMNRM@cluster0.zevc3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const Db = ATLAS_URI;
console.log('mongo uri is ', Db)
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("myFirstDatabase");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};