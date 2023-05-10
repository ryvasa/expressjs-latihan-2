const express = require("express");
const dotenv = require("dotenv");
const biodataRoute = require("./routes/biodataRoute");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(biodataRoute);
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
