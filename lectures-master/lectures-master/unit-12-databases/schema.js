var foodSchema = new mongoose.Schema({
  name: String,
  group: String,
  price: Number
});

var userSchema = new mongoose.Schema({
  name: String,
  email: String, 
  liked_foods: [foodSchema]
});



var foodSchema = new mongoose.Schema({
  name: String,
  group: String,
  price: Number
});

var userSchema = new mongoose.Schema({
  name: String,
  email: String, 
  liked_foods: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
});