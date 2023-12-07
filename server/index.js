const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FoodModule = require('./Models/food')
const cors = require("cors")
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://57barkat:21579121@mern-crud.ze7tdcf.mongodb.net/Foods?retryWrites=true&w=majority").then(() => {
    console.log("mongoodb connected")
})

app.post("/insert", async (req, res) => {
    try {

        const Food = await FoodModule.create(req.body);
        console.log(Food)
        res.send(Food).status(200);
    } catch (err) {
        console.log(err)
    }
});
app.get('/read', (req, res) => {
    FoodModule.find({}).exec()
        .then(result => {
           res.send(result);
        })
        .catch(err => {
            console.error(err);
        });

})


app.listen(3001, () => {
    console.log("server is runing on port 3001")
})