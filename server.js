const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const ValidateData = require('./helpers/helpers')
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const contactUsEmail = require('./routes/contactEmail');
const jobseeker = require('./routes/JobSeekers');
const connection = require('./controller/Auth');
connection();//database;
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname + '/public/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/public/build/index.html'));
});
app.use('/jobseeker', jobseeker);

app.use('/contactUsEmail', contactUsEmail);


const dataValidation = ValidateData.DataValidation({
  firstname : "uu",
  lastname : "oo",
  email : "erere",
  ssn :  "88",
  dob : "9888",
  address : "kasoa",
  city :"kasoa",
  state : "asan",
  zipcode : "asame",
  eligibility :"asante",
  educational_level : "fgfgf",
  higher_certificate_level :"ggce",
  jobtitle :"hello",
  salary_expectation : "memis",
  skills :"hello",
  phone :"ffff"
})

console.log('my validation',dataValidation)
app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})

