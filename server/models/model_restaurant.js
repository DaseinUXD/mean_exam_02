const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    user_name: {type: String, required: [true, 'Each review must have a user\'s name.'], minlength: [3, 'User\'s name must have at least three (3) characters']},
    description: {type: String, required: [true, 'Each review must have a description.'], minlength: [3, 'The description must have at least three (3) characters']},
    rating: {type: Number, required: [true, 'Each review must have a rating'], min: [1, 'The minimum rating is one (1) star.'], max: [1, 'The maximum rating is five (5) stars.']},
}, {timestamps: true});

const RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Restaurant name is required'], minlength: [3, 'Name must be at least three (3) characters'], unique: [true, 'Each restaurant must have a unique name.']},
    cuisine: {type: String, required: [true, 'Restaurant\'s cuisine is require'], minlength: [3, 'Cuisine must be at least three (3) characters']},
    reviews: [ReviewSchema],
}, {timestamps: true});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;