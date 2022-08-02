const mongoose = require("mongoose");
const database =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todo_express";
mongoose.connect(database);
mongoose.connection.on("connected", () => {
  console.log(`${database} terkoneksi`);
});
