const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
//*Database
require("./db");
//*middleware
app.use(cors({ origin: "http://localhost:3000" }));
// app.use((req, res, next) => {
//   console.log("Middleware");
//   res.send("Running at 5000");
//   //   //*passed the req and resp cycle to the next middleware.
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Second middleware");
//   next();
// });
//*Controller
var postMessageRoutes = require("./controllers/postMessageController");
app.use(bodyParser.json());
app.use("/postmessages", postMessageRoutes);
//*Server port
app.listen(5000, () => {
  console.log("VinServer running at 5000");
});
