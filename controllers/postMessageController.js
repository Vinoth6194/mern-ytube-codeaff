const express = require("express");
var router = express.Router();

var { PostMessage } = require("../models/postMessage");
//*GET Api
router.get("/", (req, res) => {
  PostMessage.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in retrieving the records " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});
//*POST Api
router.post("/", (req, res) => {
  var newRecord = new PostMessage({
    title: req.body.title,
    message: req.body.message,
  });
  newRecord.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in adding the record " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});
module.exports = router;
