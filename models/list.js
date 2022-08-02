const mongoose = require("mongoose");
const List = mongoose.model("List", {
  content: {
    type: String,
    required: true,
  },
});

module.exports = List;
