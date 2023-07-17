const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const orderRoutes = require("./src/routes/orderRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use("/", orderRoutes);
app.use("/", paymentRoutes);

app.listen(8000, () => {
  console.log("Server is listening at http://localhost:8000");
});
