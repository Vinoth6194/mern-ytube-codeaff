//*Database Connection
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

mongoose.connect(
  "mongodb://localhost:27017/postManagerDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Mongo Connected");
    } else {
      console.log("Error in Mongo" + JSON.stringify(err, undefined, 2));
    }
  }
);
