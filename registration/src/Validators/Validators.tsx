// import moment from "moment/moment";
// const today = moment();
// const currentDate = today.format('YYYY-MM-DD');
export const ValidateSpecialCharacters = (string: string) => {
    //eslint-disable-next-line
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharacters.test(string);
}

export const StringContainsNumber = (data: string)=>{
    return /\d/.test(data)
}
export const validateString = (text: string) => {
    return /[0-9]/.test(text);
}

export function isLetter(str: string) {
    return /^[A-Za-z0-9]*$/.test(str);
}

export function containsLetter(str :string){
    return /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(str);
}



export const validateEmail = (email: string): boolean => {
    // Your regex pattern here
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };
  

export const DisableDate = () => {
    var today, date, month, year;
    today = new Date();
    date = today.getDate();
    month = today.getMonth() + 1;
    year = today.getFullYear();
    if (date < 10) {
        date = '0' + date;
    }
    if (month < 10) {
        month = "0" + month;
    }
    return year + "-" + month + "-" + date + "T00:00";
}

// export const validateDate = (departureDate: string, returnDate: string) => {
//     const chooseStartDate = moment(departureDate);
//     const chooseEndDate = moment(returnDate);
//     const allowedStartDate = chooseStartDate.isAfter(currentDate);
//     const allowedEndDate = chooseEndDate.isAfter(currentDate);
//     const compareDates = chooseEndDate.isAfter(chooseStartDate);
//     if (departureDate === "" || returnDate === "") {
//         return ('no dates chosen');
//     }
//     if (allowedStartDate === false) {
//         return ('invalid departure date');
//         // Please the departure date you chose is behind the current date choose a future date
//     }
//     if (allowedEndDate === false) {
//         return ('invalid return date')
//         //return ('Please the return  date you chose is behind the current date choose a future date');
//     }

//     else if (allowedEndDate && allowedStartDate && compareDates === false) {
//         return ('Invalid range of dates')
//         // return ("Please the Return date you chose should be higher than the Departure date");
//     }

// }

// export const validateFLexiDate = (startingDate: string, endDate: string) => {
//     const chooseStartDate = moment(startingDate);
//     const chooseEndDate = moment(endDate);
//     const allowedStartDate = chooseStartDate.isAfter(currentDate) || chooseStartDate.isSame(currentDate);
//     const allowedEndDate = chooseEndDate.isAfter(currentDate) || chooseEndDate.isSame(currentDate);
//     const compareDates = chooseEndDate.isAfter(chooseStartDate);

//     if (startingDate === "" || endDate === "") {
//         return ('no dates chosen');
//     }
//     if (allowedStartDate === false) {
//         return ('invalid starting date');
//         // Please the departure date you chose is behind the current date choose a future date
//     }
//     if (allowedEndDate === false) {
//         return ('invalid endDate date')
//         //return ('Please the return  date you chose is behind the current date choose a future date');
//     }

//     else if (allowedEndDate && allowedStartDate && compareDates === false) {
//         return ('Invalid range of dates')
//         // return ("Please the Return date you chose should be higher than the Departure date");
//     }

// }


// export const validateVisaTravelDate = (travelDate: any) => {
//     const chooseTravelDate = moment(travelDate);
//     const allowedTravelDate = chooseTravelDate.isAfter(currentDate) || chooseTravelDate.isSame(currentDate);

//     if (allowedTravelDate === "") {
//         return ('no dates chosen');
//     }
//     if (allowedTravelDate === false) {
//         return ('invalid date choose a current or future date');
//         // Please the departure date you chose is behind the current date choose a future date
//     }
// }


