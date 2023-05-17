const express = require("express");
const routes = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(cors());
app.use("/api", routes);

app.listen(5000, () =>
  console.log(`server is running! http://localhost:5000/api`)
);
