const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errHandler");
require("dotenv").config();
const PORT = process.env.PORT || 3500;

app.use(logger);
app.use(express.json());
app.use(cors());
app.use(cookieParser);

app.use("/", require("./routes/route"));
app.use("/", express.static(path.join(__dirname, "/public")));

app.all("*", (req, res) => {
  res.status(404)
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "/views/404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "Resource does not exist" });
  } else {
    res.type("txt").send("404! Resource does not exist");
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
