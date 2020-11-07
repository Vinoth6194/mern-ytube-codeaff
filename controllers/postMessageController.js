const express = require("express");
var router = express.Router();
var ObjectID = require("mongoose").Types.ObjectId;

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

//*UPDATE Api
router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with given id : " + req.params.id);

  var updatedRecord = {
    title: req.body.title,
    message: req.body.message,
  };

  PostMessage.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error while updating a record : " + JSON.stringify(err, undefined, 2)
        );
    }
  );
});
module.exports = router;
