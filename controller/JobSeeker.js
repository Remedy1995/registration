
const axios = require('axios');
const ValidateData = require('../helpers/helpers');
const JobSeeker = require('../models/JobSeeker');
const validation = require('../helpers/helpers');

exports.createRegistration = async (req, res, next) => {
   const detailsArray = ["firstname", "lastname", "email", "ssn", "dob", "address", "kasoa", "city", "state", "zipcode", "eligibility", "educational_level", "higher_certificate_level", "jobtitle", "salary_expectation", "skills", "phone"]
     console.log(req.body)
   const checkValidation = validation.DataValidation(req.body);
   if (checkValidation !== 0) {
      return res.status(422).json({
         status: false,
         mesage: ` Sorry ${detailsArray[checkValidation - 1]} is required or cannot be null`
      })
   }
   const email = req.body.email;
    JobSeeker.find({ 'email': new RegExp(email, 'i') }).then(async data => {
      if (data.length > 0) {
         return res.status(422).json({
            status: false,
            message: 'Sorry email address already exists'
         })
      }
      else {
         const createJobSeeker = new JobSeeker({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            ssn: req.body.ssn,
            dob: req.body.dob,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            eligibility: req.body.eligibility,
            educational_level: req.body.educational_level,
            higher_certificate_level: req.body.higher_certificate_level,
            jobtitle: req.body.jobtitle,
            salary_expectation: req.body.salary_expectation,
            skills: req.body.skills,
            phone: req.body.phone
         })
         //sendEmail.sendMail(createJobSeeker);//send email
         await createJobSeeker.save().then(docs => {
            return res.status(201).json({
               status: true,
               message: "Your application has been created Successfully. A representative will return back to you shortly"
            });
         })
      }
   }).catch(error => {
      return res.status(500).json({
         status: false,
         message: error.message
      })
   })



}
