const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//*middleware
app.use((req, res, next) => {
  console.log("Middleware");
  res.send("Running at 5000");
  //   //*passed the req and resp cycle to the next middleware.
  next();
});
app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

//*Server port
app.listen(5000, () => {
  console.log("VinServer running at 5000");
});
