import { useState } from "react";
import { StringContainsNumber, ValidateSpecialCharacters, validateEmail } from "../Validators/Validators";
import { Label } from "./components/Label";
import { useContext } from "react";
import Account from "./job-information";
import AuthContext from "../Context/context";



interface ClientProps {
    client: string,
    NextActiveStep: () => void,
    PreviousActiveStep: () => void
}




function Client({ client, NextActiveStep, PreviousActiveStep }: ClientProps) {

    const [showPage, setShowPage] = useState(false);
    const { data,setData }: any = useContext(AuthContext);
   console.log('pushed data ',data)
    const [formData, setFormData] = useState<{
        firstname: string | '',
        lastname: string | '',
        address: string | '',
        city:string | '',
        state :string | '',
        zipcode : string | '',
        clientSSN: string | '',
        email : string | '',
        dob : string | '',
        eligibility :string | '',
        isTouched: boolean | undefined,
        hasError: boolean | undefined,
        isTouched1: boolean | undefined,
        hasError1: boolean | undefined,
        isTouched2: boolean | undefined,
        hasError2: boolean | undefined,
        isTouched3: boolean | undefined,
        hasError3: boolean | undefined,
        isTouched4: boolean | undefined,
        hasError4: boolean | undefined,
        isTouched5: boolean | undefined,
        hasError5: boolean | undefined,
        isTouched6: boolean | undefined,
        hasError6: boolean | undefined,
        isTouched7: boolean | undefined,
        hasError7: boolean | undefined,
        isTouched8: boolean | undefined,
        hasError8: boolean | undefined,
        isTouched9: boolean | undefined,
        hasError9: boolean | undefined,
        isTouched10: boolean | undefined,
        hasError10: boolean | undefined

    }>({
        firstname:data.firstname ,
        lastname: data.lastname,
        address :data.address,
        city :data.city,
        state:data.state,
        zipcode :data.zipcode,
        clientSSN: data.ssn,
        email :data.email,
        dob :data.dob,
        eligibility :data.eligibility,
        isTouched: false,
        hasError: false,
        isTouched1: false,
        hasError1: false,
        isTouched2: false,
        hasError2: false,
        isTouched3: false,
        hasError3: false,
        isTouched4: false,
        hasError4: false,
        isTouched5: false,
        hasError5: false,
        isTouched6: false,
        hasError6: false,
        isTouched7: false,
        hasError7: false,
        hasError8: false,
        isTouched8: false,
        hasError9: false,
        isTouched9: false,
        hasError10: false,
        isTouched10: false
    });


    console.log('my client', formData)

    const ClientFirstNamehandler = (e: { target: { value: string; }; }) => {
        const clientFirstName = e.target.value.trim();
        let hasError = false
        let isTouched = false;

        if (ValidateSpecialCharacters(clientFirstName) || StringContainsNumber(clientFirstName)) {
            hasError = true;
            isTouched = true;
        }
        else {
            hasError = false;
            isTouched = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            firstname: e.target.value,
            hasError,
            isTouched
        }))
    }

    const ClientLastNamehandler = (e: { target: { value: string; }; }) => {
        const clientLastName = e.target.value.trim();
        let hasError1 = false
        let isTouched1 = false;

        if (ValidateSpecialCharacters(clientLastName) || StringContainsNumber(clientLastName)) {
            hasError1 = true;
            isTouched1 = true;
        }
        else {
            hasError1 = false;
            isTouched1 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            lastname: e.target.value,
            hasError1,
            isTouched1
        }))
    }



    
    const ClientEmailhandler = (e: { target: { value: string; }; }) => {
        const clientEmail = e.target.value.trim();
        let hasError10 = false
        let isTouched10 = false;

        if (!validateEmail(clientEmail)) {
            hasError10 = true;
            isTouched10 = true;
        }
        else {
            hasError10 = false;
            isTouched10 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            email: e.target.value,
            hasError10,
            isTouched10
        }))
    }
    const ClientAddresshandler = (e: { target: { value: string; }; }) => {
        const clientAddress = e.target.value.trim();
        let hasError8 = false
        let isTouched8 = false;

        if (ValidateSpecialCharacters(clientAddress) || StringContainsNumber(clientAddress)) {
            hasError8 = true;
            isTouched8 = true;
        }
        else {
            hasError8 = false;
            isTouched8 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            address: e.target.value,
            hasError8,
            isTouched8
        }))
    }

    const ClientCityhandler = (e: { target: { value: string; }; }) => {
        const clientCity = e.target.value.trim();
        let hasError2 = false
        let isTouched2 = false;

        if (ValidateSpecialCharacters(clientCity) || StringContainsNumber(clientCity)) {
            hasError2 = true;
            isTouched2 = true;
        }
        else {
            hasError2 = false;
            isTouched2 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            city: e.target.value,
            hasError2,
            isTouched2
        }))
    }


    const ClientDobHandler = (e: { target: { value: string; }; }) => {
        console.log('This is the error', e.target.value)
        const getBirthYear = Number(e.target.value.split('-')[0])
        let hasError9 = false;
        let isTouched9 = false;
        if (e.target.value === '' || (new Date().getFullYear() - getBirthYear < 18) ) {
            hasError9 = true;
            isTouched9 = true;
        }
        else {
            hasError9 = false;
            isTouched9 = true;
        }
        setFormData((currentVal) => ({
            ...currentVal,
            dob: e.target.value,
            isTouched9,
            hasError9

        }))
    }

    
    const ClientZipCodehandler = (e: { target: { value: string; }; }) => {
        const clientZip = e.target.value.trim();
        let hasError6 = false
        let isTouched6 = false;

        
        if (ValidateSpecialCharacters(clientZip) || !Number.isFinite(Number(clientZip)) ) {
            hasError6 = true;
            isTouched6 = true;
        }
        else {
            hasError6 = false;
            isTouched6  = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            zipcode: e.target.value,
            hasError6,
            isTouched6
        }))
    }

    const ClientStatehandler = (e: { target: { value: string; }; }) => {
        const clientState = e.target.value.trim();
        let hasError3 = false
        let isTouched3 = false;

        if (ValidateSpecialCharacters(clientState) || StringContainsNumber(clientState)) {
            hasError3 = true;
            isTouched3 = true;
        }
        else {
            hasError3 = false;
            isTouched3 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            state: e.target.value,
            hasError3,
            isTouched3
        }))
    }
    
    const ClientSSNhandler = (e: { target: { value: string; }; }) => {
        const clientSSN = e.target.value.trim();
        let hasError4 = false
        let isTouched4= false;

        // if (ValidateSpecialCharacters(clientSSN) || StringContainsNumber(clientSSN)) {
        //     hasError8 = true;
        //     isTouched8 = true;
        // }
        // else {
        //     hasError8 = false;
        //     isTouched8 = true;
        // }
        setFormData(currentValue => ({
            ...currentValue,
            clientSSN: e.target.value,
            hasError4,
            isTouched4
        }))
    }

    const EligibleHandler = (e: { target: { value: string; }; }) => {
        let hasError7 = false;
        let isTouched7 = true;
        if (e.target.value === 'Are you eligible to work in Canada') {
            hasError7 = true;
            isTouched7 = true;
           }
           else {
               hasError7 = false;
               isTouched7 = true;
           }
        setFormData((currentVal) => ({
            ...currentVal,
            eligibility: e.target.value,
            isTouched7,
            hasError7
        }))
    }


    const showNextPage = (event : any) => {
        event.preventDefault()
        setShowPage(true);
        NextActiveStep()
        setData((prevValue:any)=>({
        ...prevValue,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          ssn: formData.clientSSN,
          dob: formData.dob,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode,
          eligibility: formData.eligibility,       
        }))
     
    }

    const showPrevPage = (event : any) => {
        event.preventDefault()
        PreviousActiveStep();
    }
    console.log('my page', showPage)
    const [firstname, setFirstName] = useState('Japhet');
    return (


        <>

            {!showPage ? <>
                {/*             
                <Pills showPillsPhoneActive={false} showPillsClientActive={true} showPillsAccountActive={false} showPillsTrusteeActive={false} showPillsBeneficiaryActive={false} showPillsSummaryActive={false} showValidationAndSubmissionActive={false} showDueDilligenceActive={false} /> */}
                <form>
                    <div className="row justify-content-center m-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Client</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Registration</li>
                            </ol>
                        </nav>
                        <div className="col-sm-6 col-md-6 col-lg-6 bg-white  p-3">
                            <div className="mb-3">
                                <Label name={"First Name"} symbol={"* "} />
                                <input type="text" className={formData.firstname && formData.hasError && formData.isTouched ? "form-control p-2 is-invalid" : formData.firstname && !formData.hasError && formData.isTouched ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02" value={formData.firstname} onChange={ClientFirstNamehandler} required
                                    placeholder="John" />
                                <div className="invalid-feedback">
                                    Please provide a valid firstname
                                </div>
                            </div>
                            <div className="mb-3">
                                <Label name={"Last Name"} symbol={"* "} />
                                <input type="text" className={formData.lastname && formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-invalid" : formData.lastname && !formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02" value={formData.lastname} onChange={ClientLastNamehandler}
                                    placeholder="Asante" />
                                <div id="validationServer03Feedback" className="invalid-feedback">
                                    Please provide a valid lastname
                                </div>
                            </div>
                            <div className="mb-3">
                                <Label name={"Email Address"} symbol={"* "} />
                                <input type="text" className={formData.email && formData.hasError10  && formData.isTouched10 ? "form-control p-2 is-invalid" : formData.email && !formData.hasError10  && formData.isTouched10 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02" value={formData.email} onChange={ClientEmailhandler}
                                    placeholder="Email Address" />
                                <div id="validationServer03Feedback" className="invalid-feedback">
                                    Please provide a valid email
                                </div>
                            </div>
                           
                            <div className="mb-3">
                                <Label name={"SIN "} symbol={"* "} />
                                <input type="text" className={formData.clientSSN && formData.hasError4 && formData.isTouched4 ? "form-control p-2 is-invalid" : formData.clientSSN && !formData.hasError4 && formData.isTouched4 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02" value={formData.clientSSN} placeholder="SIN" onChange={ClientSSNhandler} />
                                <div className="invalid-feedback">
                                    Please provide a valid sin 
                                </div>
                            </div>
                            <div className="mb-3">
                                    <Label name={"Date Of Birth"} symbol={"* "} />
                                    <input type="date" className={formData.hasError9 && formData.isTouched9 ? "form-control p-2 is-invalid" : !formData.hasError9 && formData.isTouched9 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer03" value={formData.dob} onChange={ClientDobHandler} />
                                    <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please Select Date Of Birth
                                    </div>
                                </div>

                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 bg-white  p-3">
                        <div className="mb-3">
                                <Label name={"Address"} symbol={"* "} />
                                <input type="text" className={formData.address && formData.hasError8 && formData.isTouched8 ? "form-control p-2 is-invalid" : formData.address && !formData.hasError8 && formData.isTouched8 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02" value={formData.address} placeholder="Address" onChange={ClientAddresshandler} />
                                <div className="invalid-feedback">
                                    Please provide a valid address
                                </div>
                            </div>
                            <div className="mb-3">
                                <Label name={"City"} symbol={"* "} />
                                <input type="text" className={formData.city && formData.hasError2 && formData.isTouched2 ? "form-control p-2 is-invalid" : formData.city && !formData.hasError2 && formData.isTouched2 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02" value={formData.city} placeholder="City" onChange={ClientCityhandler} />
                                <div className="invalid-feedback">
                                    Please provide a valid city
                                </div>
                            </div>
                            <div className="mb-3">
                                <Label name={"State"} symbol={"* "} />
                                <input type="text" className={formData.state && formData.hasError3 && formData.isTouched3 ? "form-control p-2 is-invalid" : formData.state && !formData.hasError3 && formData.isTouched3 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02" value={formData.state} placeholder="State" onChange={ClientStatehandler} />
                                <div className="invalid-feedback">
                                    Please provide a valid state
                                </div>
                            </div>
                            <div className="mb-3">
                                <Label name={"Postal Code"} symbol={"* "} />
                                <input type="text" className={formData.zipcode && formData.hasError6 && formData.isTouched6 ? "form-control p-2 is-invalid" : formData.zipcode && !formData.hasError6 && formData.isTouched6 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer02" value={formData.zipcode} placeholder="Zip Code" onChange={ClientZipCodehandler} />
                                <div className="invalid-feedback">
                                    Please provide a valid postal code
                                </div>
                            </div>
                            <div className="mb-3">
                                <Label name={"Are you eligible to work in Canada"} symbol={"* "} />
                                <select className={formData.hasError7 && formData.isTouched7 ? "form-control p-2 is-invalid" :!formData.hasError7 && formData.isTouched7 ? "form-control p-2 is-valid" : "form-control p-2"} aria-label="Default select example" onChange={EligibleHandler}>
                                    <option value={'Are you eligible to work in Canada'}>Are you eligible to work in Canada</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                                <div id="validationServer03Feedback" className="invalid-feedback">
                                    Please provide whether you are required to work in Canada
                                </div>
                            </div>

                        </div>
                    </div>
                </form><div className="d-flex mt-3">
                    <div className="me-auto">
                        <input className="btn btn-danger px-4 py-2" type="submit" value="Go Back" onClick={showPrevPage} />
                    </div>
                    <div className="ms-auto">
                        <input className="btn btn-danger px-4 py-2" type="submit" value="Next" onClick={showNextPage} 
                        disabled={!formData.firstname|| formData.hasError || !formData.lastname || formData.hasError1||
                            !formData.email || formData.hasError6|| !formData.clientSSN || formData.hasError4|| !formData.dob|| formData.hasError9||!formData.address|| formData.hasError8
                            || !formData.city || formData.hasError2 || !formData.state || formData.hasError3 || !formData.zipcode || formData.hasError6||
                          !formData.eligibility || formData.hasError7
                         }

                        />
                    </div>
                </div></>
                :
                <Account client={""} NextActiveStep={NextActiveStep} PreviousActiveStep={PreviousActiveStep} />}
        </>


    )
}


export default Client;