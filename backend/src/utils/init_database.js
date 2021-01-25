const database = require("mongodb").MongoClient;
database.connect("mongodb://db:27017/testxtech", (err, connection) => {
  if (err) {
    console.log(err);
    return;
  }
  const db = connection.db();

  db.createCollection("users");

  connection.close();
});
