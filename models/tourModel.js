const mongoose = require("mongoose");

// Create a tour Schema
const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A tour must have a title"],
    unique: [true, "A tour name must be unique"],
  },
  ratings: { type: Number, default: 4 },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
});

// Create a Tour model out of the tourSchema
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
