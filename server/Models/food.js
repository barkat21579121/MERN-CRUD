const mongoose = require('mongoose');


const FoodSchema = new mongoose.Schema({
    FoodName :{
        type : String,
     
    },
    daysSinceIAte:{
        type :String ,
  
    }
});

const Food = mongoose.model("FoodData", FoodSchema);

module.exports = Food ;