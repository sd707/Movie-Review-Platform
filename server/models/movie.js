var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    reviewer: {type: String, required: [true, 'Reviewer name is required'], minimum:3},
    rating: {type: Number, required: true, minimum: 1, maximum: 5},
    content: {type: String, required: [true, 'Review content is required'], minimum:[3, 'Review content must be at least 3 characters long']},
}, {timestamps: true});

var MovieSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required'], minimum:[3, 'Name must be at least 3 characters long']},
    user: {type: String, required: [true, 'Username is required'], minimum:[3, 'Username must be at least 3 characters long']},
    reviews: [ReviewSchema]
}, {timestamp: true});

mongoose.model("Review", ReviewSchema);
mongoose.model("Movie", MovieSchema);
