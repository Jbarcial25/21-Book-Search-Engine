const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Kaayching:Jspr1233@cluster0.w2p5d.mongodb.net/test", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;