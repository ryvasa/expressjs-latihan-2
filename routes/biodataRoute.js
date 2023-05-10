const express = require("express");
const {
  getBiodataByUrl,
  postBiodata,
} = require("../controller/biodataController");
const { verifyBody, verifyQuery } = require("../middleware/biodataMiddleware");

const router = express.Router();

router.get("/biodata", verifyQuery, getBiodataByUrl);
router.post("/biodata", verifyBody, postBiodata);

module.exports = router;
