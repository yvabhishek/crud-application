const mongoose = require("mongoose");

const DB = "mongodb+srv://raoabhishek3105:t8qrqo034ESKupCy@cluster0.jmwpfwk.mongodb.net/MERNStack?retryWrites=true&w=majority";

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
).then(() => {
  console.log("Connection started");
}).catch((error) => {
  console.log(error.message);
});