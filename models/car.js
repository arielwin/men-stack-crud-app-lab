const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    transmission: String,
    fuelType: String,
    isCool: Boolean
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car
