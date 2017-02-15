var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    title: String,
    subtitle: String,
    summary: String,
    image: String,
    banner_image: String,
    level: String,
    expected_duration: Number,
    expected_duration_unit: String,
    keywords: [String],
    started: Boolean,
    percentage: Number
});

var course = mongoose.model('Course', courseSchema);

module.exports = course;