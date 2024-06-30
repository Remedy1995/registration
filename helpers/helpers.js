
const DataValidation = (data, jsonData = []) => {

    jsonData.push(data);

    for (const value in jsonData) {
        let dataObject = jsonData[value];

        if (!dataObject.hasOwnProperty("firstname") || !dataObject.firstname) {
            return 1;
        }

        if (!dataObject.hasOwnProperty("lastname") || !dataObject.lastname) {
            return 2;
        }
        if (!dataObject.hasOwnProperty("email") || !dataObject.email) {
            return 3;
        }
        if (!dataObject.hasOwnProperty("ssn") || !dataObject.ssn) {
            return 4;
        }
        if (!dataObject.hasOwnProperty("dob") || !dataObject.dob) {
            return 5;
        }
        if (!dataObject.hasOwnProperty("address") || !dataObject.address) {
            return 6;
        }
        if (!dataObject.hasOwnProperty("city") || !dataObject.city) {
            return 7;
        }
        if (!dataObject.hasOwnProperty("state") || !dataObject.state) {
            return 8;
        }
        if (!dataObject.hasOwnProperty("zipcode") || !dataObject.zipcode) {
            return 9;
        }
        if (!dataObject.hasOwnProperty("eligibility") || !dataObject.eligibility) {
            return 10;
        }
        if (!dataObject.hasOwnProperty("educational_level") || !dataObject.educational_level) {
            return 11;
        }
        if (!dataObject.hasOwnProperty("higher_certificate_level") || !dataObject.higher_certificate_level) {
            return 12;
        }

        if (!dataObject.hasOwnProperty("jobtitle") || !dataObject.jobtitle) {
            return 13;
        }
        if (!dataObject.hasOwnProperty("salary_expectation") || !dataObject.salary_expectation) {
            return 14;
        }
        if (!dataObject.hasOwnProperty("skills") || !dataObject.skills) {
            return 15;
        }
        if (!dataObject.hasOwnProperty("phone") || !dataObject.phone) {
            return 16;
        }
    }

    return 0;
}


module.exports = { DataValidation }
