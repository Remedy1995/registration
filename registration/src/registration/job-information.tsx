import { useState } from "react";
import { StringContainsNumber, ValidateSpecialCharacters } from "../Validators/Validators";
import { Label } from "./components/Label";
import AccountSummary from "./summary";
import { useContext } from "react";
import AuthContext from "../Context/context";

interface JobProps {
    client: string,
    NextActiveStep: () => void,
    PreviousActiveStep: () => void
}



function Job({ client, NextActiveStep, PreviousActiveStep }: JobProps) {

    const [showPage, setShowPage] = useState(false);
    const { data,setData }: any = useContext(AuthContext);
    console.log('my dfgfdg',data)
    const [formData, setFormData] = useState<{
        mode_of_payment: string | '',
        bank_name: string | '',
        bank_Job_number: string | '',
        Job_name: string | '',
        skills :string | '',
        salary_expectations : string | '',
        Job_type: string | '',
        education_level :string | '',
        certificate_level :string | '',
        start_month_and_year: string | '',
        mandate_authorization: string | '',
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
        hasError7: boolean | undefined
        isTouched8: boolean | undefined,
        hasError8: boolean | undefined
    }>({
        mode_of_payment: '',
        bank_name: '',
        bank_Job_number: '',
        Job_name: data.jobtitle,
        salary_expectations :data.salary_expectation,
        Job_type: '',
        education_level :data.educational_level,
        certificate_level :data.higher_certificate_level,
        skills : data.skills,
        start_month_and_year: '',
        mandate_authorization: '',
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
        isTouched8: false,
        hasError8: false,
    });


    console.log('my client', formData)

    const EducationalLevelHandler = (e: { target: { value: string; }; }) => {

        let hasError4 = false
        let isTouched4 = false;

        if (e.target.value === 'Educational Level') {
            hasError4 = true;
            isTouched4 = true;
        }
        else {
            hasError4 = false;
            isTouched4 = true;
        }
        setFormData((currentVal) => ({
            ...currentVal,
            education_level: e.target.value,
            hasError4,
            isTouched4
        }))
    }


    
    const CertificatesHandler = (e: { target: { value: string; }; }) => {
        let hasError5 = false
        let isTouched5 = false;

        if (e.target.value === 'Higher Certificate Attained') {
            hasError5 = true;
            isTouched5 = true;
        }
        else {
            hasError5 = false;
            isTouched5 = true;
        }
        setFormData((currentVal) => ({
            ...currentVal,
            certificate_level: e.target.value,
            hasError5,
            isTouched5
        }))
    }


    const ClientSkillshandler = (e: { target: { value: string; }; }) => {
        const clientskills = e.target.value.trim();
        let hasError8 = false
        let isTouched8 = false;

        // if (ValidateSpecialCharacters(clientskills) || StringContainsNumber(clientskills)) {
        //     hasError1 = true;
        //     isTouched1 = true;
        // }
        // else {
        //     hasError1 = false;
        //     isTouched1 = true;
        // }
        setFormData(currentValue => ({
            ...currentValue,
            skills: e.target.value,
            hasError8,
            isTouched8
        }))
    }
    const JobNameHandler = (e: { target: { value: string; }; }) => {
        const Job_name = e.target.value.trim();
        let hasError1 = false
        let isTouched1 = false;
        if (ValidateSpecialCharacters(Job_name) || StringContainsNumber(Job_name)) {
            hasError1 = true;
            isTouched1 = true;
        }
        else {
            hasError1 = false;
            isTouched1 = true;
        }
        setFormData(currentValue => ({
            ...currentValue,
            Job_name: e.target.value,
            hasError1,
            isTouched1
        }))
    }


    const SalaryExpectationHandler = (e: { target: { value: string; }; }) => {
        console.log(Number.isFinite(Number(e.target.value)))
        const salary = e.target.value;
        let hasError2 = false
        let isTouched2 = false;

        if (!Number.isFinite(Number(salary))) {
            hasError2 = true;
            isTouched2 = true;
        }
        else {
            hasError2 = false;
            isTouched2 = true;
        }

        setFormData(currentValue => ({
            ...currentValue,
            salary_expectations: e.target.value,
            hasError2,
            isTouched2
        }))
    }
    const formSubmit = (event: any) => {
        event.preventDefault()
        console.log('my efe', formData);
    }

    const showNextPage = (event: any) => {
        event.preventDefault()
        setShowPage(true);
        NextActiveStep()

        setData((prevValue :any )=>({
            ...prevValue,
            educational_level: formData.education_level,
            higher_certificate_level:  formData.certificate_level,
            jobtitle: formData.Job_name,
            salary_expectation:  formData.salary_expectations,
            skills: formData.skills,
        }))
    }


    const showPrevPage = (event : any) => {
        event.preventDefault()
        setShowPage(false);
        PreviousActiveStep()
    }

   
    return (


        <>
            {!showPage ?
                <>
                    {/* <Pills showPillsPhoneActive={false} showPillsClientActive={false} showPillsJobActive={true} showPillsTrusteeActive={false} showPillsBeneficiaryActive={false} showPillsSummaryActive={false} showValidationAndSubmissionActive={false} showDueDilligenceActive={false} /> */}
                    <form onSubmit={formSubmit}>
                        <div className="row justify-content-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Job</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">UES</li>
                                </ol>
                            </nav>
                            <div className="col-sm-12 col-md-12 col-lg-12 bg-white p-sm-5 p-md-6 p-lg-6">
                                <div className="mb-3">
                                    <Label name={"Educational Level"} symbol={"* "} />
                                    <select className={formData.hasError4 && formData.isTouched4 ? "form-control p-2 is-invalid" : !formData.hasError4 && formData.isTouched4 ? "form-control p-2 is-valid" : "form-control p-2"} aria-label="Default select example" onChange={EducationalLevelHandler}>
                                        <option value={'Educational Level'}>Educational Level</option>
                                        <option value="JHS">JHS</option>
                                        <option value="SHS">SHS</option>
                                        <option value="University">University</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select educational Level
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <Label name={"Higher Certificate Attained"} symbol={"* "} />
                                    <select className={formData.hasError5 && formData.isTouched5 ? "form-control p-2 is-invalid" : !formData.hasError5 && formData.isTouched5 ? "form-control p-2 is-valid" : "form-control p-2"} aria-label="Default select example" onChange={CertificatesHandler}>
                                        <option value={'Higher Certificate Attained'}>Higher Certificate Attained</option>
                                        <option value="WASSCE">WASSCE</option>
                                        <option value="HND">HND</option>
                                        <option value="Degree">Degree</option>
                                        <option value="Masters Degree">Masters Degree</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select Higher Certificate Attained
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <Label name={"Job Title"} symbol={"* "} />
                                    <input type="text" className={formData.Job_name && formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-invalid" : formData.Job_name && !formData.hasError1 && formData.isTouched1 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer04" value={formData.Job_name} onChange={JobNameHandler}
                                        placeholder="Factory Worker" />
                                    <div id="validationServer04Feedback" className="invalid-feedback">
                                        Please provide a valid job title
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <Label name={"Salary Expectation in CAD "} symbol={"* "} />
                                    <input type="text" className={formData.salary_expectations && formData.hasError2 && formData.isTouched2 ? "form-control p-2 is-invalid" : formData.salary_expectations && !formData.hasError2 && formData.isTouched2 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer04" value={formData.salary_expectations} onChange={SalaryExpectationHandler}
                                        placeholder="2000" />
                                    <div id="validationServer04Feedback" className="invalid-feedback">
                                        Please provide a valid salary expectation
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <Label name={"Enter Skills seperated by commas"} symbol={"* "} />
                                    <textarea  className={formData.skills && formData.hasError8 && formData.isTouched8 ? "form-control p-2 is-invalid" : formData.skills && !formData.hasError8 && formData.isTouched8 ? "form-control p-2 is-valid" : "form-control p-2"} id="validationServer03" value={formData.skills} placeholder="Coding,Designing" onChange={ClientSkillshandler} />
                                    <div id="validationServer03Feedback" className="invalid-feedback">
                                        Please provide skills
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
                            disabled={
                                formData.hasError4 || !formData.education_level ||
                                formData.hasError5 || !formData.certificate_level || !formData.Job_name || formData.hasError1||
                                 formData.hasError2 || !formData.salary_expectations || !formData.skills
                            }
                             />
                        </div>
                    </div></>
                :
                <AccountSummary client={""} NextActiveStep={NextActiveStep} PreviousActiveStep={PreviousActiveStep} />}
        </>


    )
}


export default Job;