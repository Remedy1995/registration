const mongoose = require('mongoose');


const JobSeekerSchema = new mongoose.Schema({
   firstname: {
      type : String,
      required : true
   },
   lastname: {
      type : String,
      required : true
   },
   email: {
      type : String,
      required : true
   },
   ssn: {
      type : String,
      required : true
   },
   dob: {
      type : String,
      required : true
   },
   address: {
      type : String,
      required : true
   },
   city: {
      type : String,
      required : true
   },
   state: {
      type : String,
      required : true
   },
   zipcode: {
      type : String,
      required : true
   },
   eligibility: {
      type : String,
      required : true
   },
   educational_level: {
      type : String,
      required : true
   },
   higher_certificate_level: {
      type : String,
      required : true
   },
   jobtitle: {
      type : String,
      required : true
   },
   salary_expectation: {
      type : String,
      required : true
   },
   skills: {
      type : String,
      required : true
   },
   phone: {
      type : String,
      required : true
   }


})

const JobSeek = mongoose.model("jobseeker", JobSeekerSchema);
module.exports = JobSeek;
