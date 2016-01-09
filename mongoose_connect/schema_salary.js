var mongoose = require('mongoose');
var schema = mongoose.Schema;


var salarySchema = new schema({
	lower_class: String,
	second_class: String,
	third_class: String,
	fourth_class: String,
	fifth_class: String,
	sixth_class: String,
	seventh_class: String,
	eighth_class: String,
	ninth_class: String,
	upper_class: String

}, {collection:'salary'});

exports.salarySchema = salarySchema;

