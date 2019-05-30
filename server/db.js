const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/status", { useNewUrlParser: true });



let creditCardSchema = mongoose.Schema({
  status: { type: String, required: true },
  
});


let Card = mongoose.model("Card", creditCardSchema);

let saveData = obj => {
  let instance = new Card(obj);
  instance.save((err, data) => {
    if (err) {
      console.log(err, " not Saved :( ");
    } else {
      console.log(data.name, "Saved");
    }
  });
};

module.exports.saveData = saveData;

module.exports.Card = Card;