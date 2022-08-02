const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
app.use("/public", express.static("public"));
app.use("views", express.static(path.join(__dirname, "views")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(expressLayouts);

// rute
app.use(require("./routes/router.js"));
app.listen(port, () => console.log("Server sedang dijalankan"));

