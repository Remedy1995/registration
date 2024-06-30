import { useState, useEffect } from "react";
import { UserService } from "../Services/JobService";


export const ViewAdminRequestForm = (id) => {
    const [formData, setFormData] = useState({ request: '', hasError: false, isTouched: false });

    useEffect(() => {
        UserService.viewFormDetails(id).then(data => {
            setFormData({
                request: data?.admin_request_detail
            })
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return { formData, setFormData }
}

// export const ViewFlexiWorkHourForm = (id) => {
//     const [formData, setFormData] = useState({
//         application_status: '', });

//     useEffect(() => {
//         UserService.viewFormDetails(id).then(data => {
//             setFormData({
//                 request: data?.admin_request_detail
//             })
//         }).catch(error => {
//             console.log(error)
//         })
//     }, [])

//     return { formData, setFormData }
// }




export const ViewLocalTravelForm = (id) => {
    const [formData, setFormData] = useState({
        destination: '',
        departureDate: '',
        returnDate: '',
        travelPurpose: '',
        hasError: false,
        isTouched: false,
        hasError1: false,
        isTouched1: false,
    });

    useEffect(() => {
        UserService.viewFormDetails(id).then(data => {
            setFormData({
                destination: data?.local_travel_destination,
                departureDate: data?.local_travel_departure_date,
                returnDate: data?.local_travel_return_date,
                travelPurpose: data?.local_travel_purpose
            })
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return { formData, setFormData }
}

export const ViewIntroductoryForm = (id) => {
    const [formData, setFormData] = useState({
        introductory_employment_date: '',
        introductory_purpose: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        selectFile: '',
        hasError: false,
        isTouched: false,
        hasError1: false,
        isTouched1: false,
        hasError2: false,
        isTouched2: false,
        hasError3: false,
        isTouched3: false,
    });

    useEffect(() => {
        UserService.viewFormDetails(id).then(data => {
            console.log(data.introductory_employment_date)
            setFormData({
                introductory_employment_date: data.introductory_employment_date,
                introductory_purpose: data?.introductory_purpose,
                first_name: data?.first_name,
                last_name: data?.last_name,
                middle_name: data?.middle_name,
                selectFile: data ? data?.application_files[0].url : "",
            })
            console.log("hello", formData.introductory_employment_date)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return { formData, setFormData }
}





export const ViewMedicalForm = (id) => {
    const [formData, setFormData] = useState({
        medical_card_number: "",
        medical_bank_name: "",
        medical_bank_account_number: "",
        medical_bank_account_type: "",
        medical_amount: "",
        hasError: false,
        isTouched: false,
        hasError1: false,
        isTouched1: false,
        hasError2: false,
        isTouched2: false,

    });

    useEffect(() => {
        UserService.viewFormDetails(id).then(data => {
            setFormData({
                medical_card_number: data?.medical_card_number,
                medical_bank_name: data?.medical_bank_name,
                medical_bank_account_number: data?.medical_bank_account_number,
                medical_bank_account_type: data?.medical_bank_account_type,
                medical_amount: data?.medical_amount
            })
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return { formData, setFormData }
}





export const ViewFlexiWorkHourForm = (id) => {
    const [formData, setFormData] = useState({
        flexi_type: "",
        flexi_specific_week: "",
        flexi_start_date: "",
        flexi_end_date: "",
        flexi_attestation: "",
        applicant_contact: "",
        flexi_specific_day1: "",
        flexi_specific_day2: "",
    });


    const flexiData = {

    }

    useEffect(() => {
        UserService.viewFormDetails(id).then(data => {
            setFormData({
                flexi_type: data.flexi_schedule,
                flexi_specific_week: data.flexi_schedule_specific_week,
                flexi_start_date: data.flexi_schedule_start_date,
                flexi_end_date: data.flexi_schedule_end_date,
                flexi_attestation: data.flexi_working_attestation,
                applicant_contact: data.applicant_contact,
                flexi_specific_day1: data.flexi_schedule_specific_day1,
                flexi_specific_day2: data.flexi_schedule_specific_day2
            })
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return { formData, setFormData }
}



export const ViewLoanApplicationForm = (id) => {
    const [formData, setFormData] = useState({
        employment_date: '',
        bank_Name: '',
        bank_Account_Number: '',
        amount_Request: '',
        repayment_Duration: '',
        outstanding_Balance: '',
        attachments: [],
        signature: '',
        hasError: false,
        isTouched: false,
        hasError1: false,
        isTouched1: false,
        hasError2: false,
        isTouched2: false,
        hasError3: false,
        isTouched3: false,
        hasError4: false,
        isTouched4: false,
        hasError5: false,
        isTouched5: false,
        hasError6: false,
        isTouched6: false,
        hasError7: false,
        isTouched7: false,
    });

    useEffect(() => {
        UserService.viewFormDetails(id).then(data => {
            console.log('This is the real data',data)
            setFormData({
                employment_date: data.loan_year_of_employment,
                bank_Name: data.loan_bank_name,
                bank_Account_Number: data.loan_account_number,
                amount_Request: data.loan_amount,
                repayment_Duration: data.loan_repayment_duration,
                outstanding_Balance: data.loan_existing_outstanding_balance,
                attachments: data.application_files,
                signature: '',
            })
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return { formData, setFormData }
}



export const ViewChangeBankApplicationForm = (id) => {
    const [formData, setFormData] = useState({
        previous_bank_account_number: '',
        previous_bank_Name: '',
        previous_bank_branch: '',
        new_bank_account_number: '',
        new_bank_account_name: '',
        new_bank_branch: '',
        new_bank_account_type: "",
        signature: '',
        hasError: false,
        isTouched: false,
        hasError1: false,
        isTouched1: false,
        hasError2: false,
        isTouched2: false,
        hasError3: false,
        isTouched3: false,
        hasError4: false,
        isTouched4: false,
        hasError5: false,
        isTouched5: false,
        hasError6: false,
        isTouched6: false,
        hasError7: false,
        isTouched7: false,
    });

    useEffect(() => {
        UserService.viewFormDetails(id).then(data => {
            setFormData({
                previous_bank_account_number: data.bank_previous_account_number,
                previous_bank_Name: data.bank_previous_bank,
                previous_bank_branch: data.bank_previous_branch,
                new_bank_account_number: data.bank_new_account_number,
                new_bank_account_name: data.bank_new_bank,
                new_bank_branch: data.bank_new_branch,
                new_bank_account_type: data.bank_new_account_type,
                signature: '',
            })

            console.log('my data is',data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return { formData, setFormData }
}



export const ViewVisaApplicationForm = (id) => {
    const [formData, setFormData] = useState({
        travel_purpose:'',
        travel_passport_number:'',
        travel_applicant_dob:'',
        travel_passport_expiry:'',
        travel_destination:'',
        travel_date:'',
        signature: '',
        hasError: false,
        isTouched: false,
        hasError1: false,
        isTouched1: false,
        hasError2: false,
        isTouched2: false,
    });

    useEffect(() => {
        UserService.viewFormDetails(id).then(data => {
            setFormData({
                travel_purpose:data.travel_purpose,
                travel_passport_number:data.travel_passport_number,
                travel_applicant_dob:data.travel_applicant_dob,
                travel_passport_expiry:data.travel_passport_expiry,
                travel_destination:data.travel_destination,
                travel_date:data.travel_date,
                signature: '',
            })

            console.log('my data is',data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return { formData, setFormData }
}